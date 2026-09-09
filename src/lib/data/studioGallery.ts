export interface StudioGalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** CSS object-position, tuned per photo so faces/hands stay sichtbar when cropped. */
  focus?: string;
}

/**
 * Kuratierte Auswahl echter Studio- und Behandlungsfotos von Anita.
 * Die Reihenfolge ist bewusst auf die Editorial-Collage in StudioGallery.tsx
 * abgestimmt (fünf lückenlose 6×3-Bänder). Wird die Liste geändert, muss das
 * `layout`-Array in StudioGallery.tsx entsprechend angepasst werden.
 *
 * Zusätzlich folgt die Reihenfolge – so weit es die feste Bildform je Slot
 * zulässt – bewusst einer kleinen Geschichte: zuerst Studio/Atmosphäre,
 * dann Anita bei der Arbeit, dann nahe Behandlungs-/Detailaufnahmen.
 */
export const studioGalleryImages: StudioGalleryImage[] = [
  {
    src: "/images/galerie13.webp",
    alt: "Anita bei der Wimpernverlängerung einer Kundin im Profil",
    width: 1920,
    height: 1080,
    focus: "center 40%",
  },
  {
    src: "/images/galerie1.webp",
    alt: "Reinigung der Arbeitsinstrumente im Ultraschallgerät im Studio",
    width: 1080,
    height: 1920,
    focus: "center 55%",
  },
  {
    src: "/images/galerie3.webp",
    alt: "Anita bei der Arbeit an den Wimpern einer Kundin",
    width: 1080,
    height: 1920,
    focus: "center 22%",
  },
  {
    src: "/images/galerie11.webp",
    alt: "Anita im Studio vor dem runden Spiegel mit dem Zitat an der Wand",
    width: 1920,
    height: 1080,
    focus: "center 30%",
  },
  {
    src: "/images/galerie12.webp",
    alt: "Vorbereitete Behandlungsinstrumente auf einem Tablett im Studio",
    width: 1920,
    height: 1080,
    focus: "center 45%",
  },
  {
    src: "/images/galerie8.webp",
    alt: "Nahaufnahme von Auge und Augenbraue nach der Behandlung",
    width: 1920,
    height: 1080,
    focus: "center 42%",
  },
  {
    src: "/images/galerie5.webp",
    alt: "Anita bei der Behandlung einer Kundin unter dem Ringlicht, InLei-Produkte im Vordergrund",
    width: 1080,
    height: 1920,
    focus: "center 18%",
  },
  {
    src: "/images/galerie9.webp",
    alt: "Nahaufnahme einer Wimpernbehandlung mit Bürstchen und Unterlidpads",
    width: 1920,
    height: 1080,
    focus: "center 38%",
  },
  {
    src: "/images/galerie10.webp",
    alt: "Nahaufnahme einer Wimpernverlängerung mit Unterlidpads",
    width: 1920,
    height: 1080,
    focus: "center 42%",
  },
  {
    src: "/images/galerie15.webp",
    alt: "Nahaufnahme eines Lash Liftings mit Silikonpad auf dem Lid",
    width: 1920,
    height: 1080,
    focus: "center 42%",
  },
  {
    src: "/images/galerie7.webp",
    alt: "Porträt von Anita mit Wimpern-Pinzette vor der Studiowand mit Zitat",
    width: 1080,
    height: 1920,
    focus: "center 16%",
  },
  {
    src: "/images/galerie4.webp",
    alt: "Wimpernverlängerung mit UV-Technik – einzelne Wimpern werden mit der Pinzette unter UV-Licht angesetzt",
    width: 1080,
    height: 1920,
    focus: "center 40%",
  },
  {
    src: "/images/galerie2.webp",
    alt: "Hand mit Wimpern-Pads und Produkten während der Behandlungsvorbereitung",
    width: 1080,
    height: 1920,
    focus: "center 32%",
  },
  {
    src: "/images/galerie6.webp",
    alt: "Anita mit Pinzette vor der Studiowand mit dem Schriftzug „Beauty begins the moment you decide to be yourself“",
    width: 1080,
    height: 1920,
    focus: "center 20%",
  },
  {
    src: "/images/galerie16.webp",
    alt: "Anita in ihrem hellen Studio am Behandlungsplatz",
    width: 1080,
    height: 1920,
    focus: "center 22%",
  },
];
