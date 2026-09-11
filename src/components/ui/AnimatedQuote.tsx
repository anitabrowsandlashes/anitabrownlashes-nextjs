"use client";

import { useEffect, useRef } from "react";

export interface QuotePart {
  text: string;
  /** Wort(e) semantisch/farblich hervorgehoben (z. B. Plum-Akzent). */
  emphasis?: boolean;
}

interface AnimatedQuoteProps {
  parts: QuotePart[];
  /** Klassen für hervorgehobene Wörter, z. B. "text-orchid not-italic". */
  emphasisClassName?: string;
  className?: string;
  /** Verzögert den Start des Letter-Reveals, z. B. damit er kurz nach einer
   * umgebenden Section-Einflug-Animation einsetzt. */
  startDelayMs?: number;
}

/** ms Verzögerung zwischen zwei Buchstaben; die Mobile-Geschwindigkeit wird
 * bewusst nur über kürzere CSS-Transition-Dauer geregelt (siehe globals.css),
 * damit Server- und Client-Rendering exakt gleich bleiben. Bewusst grosser
 * Versatz für einen langsamen "Wave Reveal" (Welle läuft von links nach rechts
 * durch den Text). */
const STAGGER_MS = 55;

interface WordToken {
  pi: number;
  wi: number;
  word: string;
  emphasis?: boolean;
  isLastWord: boolean;
  startIndex: number;
}

function tokenizeParts(parts: QuotePart[]): WordToken[] {
  const tokens = parts.flatMap((part, pi) => {
    const words = part.text.split(" ");
    return words.map((word, wi) => ({
      pi,
      wi,
      word,
      emphasis: part.emphasis,
      isLastWord: pi === parts.length - 1 && wi === words.length - 1,
    }));
  });

  return tokens.reduce<{ list: WordToken[]; next: number }>(
    (acc, token) => {
      acc.list.push({ ...token, startIndex: acc.next });
      acc.next += token.word.length;
      return acc;
    },
    { list: [], next: 0 },
  ).list;
}

/**
 * Großes Editorial-Zitat mit langsamem "Wave Reveal": jeder Buchstabe steigt
 * mit weichem Überschwingen von unten auf (opacity + translateY + leichte
 * Rotation + Blur), stark von links nach rechts gestaffelt, sodass eine Welle
 * durch den Text läuft. Einmalig beim Eintritt in den Viewport.
 * Wörter werden als nicht umbrechbare Einheiten gerendert, damit das responsive
 * Zeilen-Wrapping unangetastet bleibt. Für Screenreader steht der volle Text
 * zusätzlich als einfacher, nicht zerlegter Textknoten bereit.
 */
export function AnimatedQuote({
  parts,
  emphasisClassName = "",
  className = "",
  startDelayMs = 0,
}: AnimatedQuoteProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => node.classList.add("is-visible"), startDelayMs);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [startDelayMs]);

  const fullText = parts.map((part) => part.text).join(" ");
  const wordTokens = tokenizeParts(parts);

  return (
    <p ref={ref} className={`letter-reveal ${className}`}>
      <span aria-hidden="true">
        {wordTokens.map(({ pi, wi, word, emphasis, isLastWord, startIndex }) => {
          const letters = (
            <span className="letter-reveal-word">
              {word.split("").map((char, ci) => (
                <span
                  key={ci}
                  className="letter-reveal-char"
                  style={{ transitionDelay: `${(startIndex + ci) * STAGGER_MS}ms` }}
                >
                  {char}
                </span>
              ))}
            </span>
          );
          return (
            <span key={`${pi}-${wi}`}>
              {emphasis ? <em className={emphasisClassName}>{letters}</em> : letters}
              {!isLastWord ? " " : ""}
            </span>
          );
        })}
      </span>
      <span className="sr-only">{fullText}</span>
    </p>
  );
}
