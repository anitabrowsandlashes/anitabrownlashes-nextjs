export interface ServiceMethod {
  title: string;
  tagline: string;
  text: string;
}

export interface Service {
  slug: string;
  title: string;
  short?: string;
  description?: string;
  /** Einzelne Methoden/Varianten der Leistung, falls die Behandlung mehrere Ansätze hat. */
  methods?: ServiceMethod[];
  image: string;
  imageAlt: string;
  /** CSS object-position, tuned so the eye/brow area stays in frame when cropped. */
  imageFocus?: string;
}

export const services: Service[] = [
  {
    slug: "wimpernverlaengerung",
    title: "Wimpernverlängerung",
    short: "Individuell abgestimmt auf dich und deine Naturwimpern.",
    description:
      "Bei der Wimpernverlängerung ist mir besonders wichtig, dass das Ergebnis natürlich wirkt und individuell zu dir passt. Länge, Stärke und Curl wähle ich passend zu deinen Naturwimpern, deiner Augenform und deinem gewünschten Look aus. Dabei achte ich auf eine saubere und präzise Arbeit, damit die Naturwimpern möglichst wenig belastet werden. Ob natürlich, elegant oder etwas ausdrucksstärker – am Ende sollst du dich mit deinen Wimpern rundum wohlfühlen. Natürlich erhältst du von mir auch Tipps für die richtige Pflege zu Hause.",
    image: "/images/lashextention.webp",
    imageAlt: "Detailaufnahme einer Wimpernverlängerung",
    imageFocus: "center 32%",
  },
  {
    slug: "lash-lifting",
    title: "Lash Lifting",
    methods: [
      {
        title: "Klassisches Wimpernlifting",
        tagline: "Für einen natürlichen, eleganten Schwung.",
        text: "Beim klassischen Wimpernlifting forme ich deine Naturwimpern sanft nach oben und verleihe ihnen einen schönen Schwung für einen offeneren Blick. Pflegende Wirkstoffe wie Keratin, Proteine und Vitamine unterstützen die Wimpern während der Behandlung und sorgen für ein geschmeidiges und gepflegtes Aussehen.",
      },
      {
        title: "Koreanisches Wimpernlifting",
        tagline: "Sanfter Schwung und intensive Pflege.",
        text: "Beim Korean Lash Lifting arbeite ich mit besonders sanften und pflegenden Produkten sowie einer speziellen Auftragetechnik. Dadurch entsteht ein weicher, fließender Schwung direkt vom Wimpernansatz – ohne einen zu starken oder geknickten Effekt. Keratin, Proteine, Aminosäuren und Vitamine unterstützen die Naturwimpern zusätzlich und verleihen ihnen ein geschmeidiges, glänzendes und gepflegtes Aussehen.",
      },
    ],
    image: "/images/lashlisting.webp",
    imageAlt: "Wimpern nach einem Lash Lifting",
    imageFocus: "center 32%",
  },
  {
    slug: "brow-lifting",
    title: "Brow Lifting",
    short: "Natürlich geformt und harmonisch definiert.",
    description:
      "Beim Brow Lifting ist mir besonders wichtig, deine natürlichen Augenbrauen schön in Form zu bringen, ohne dass sie unnatürlich wirken. Die Härchen werden in die gewünschte Richtung gebracht und fixiert, wodurch die Brauen voller und definierter erscheinen. Die Form passe ich individuell an dein Gesicht und deine natürlichen Brauen an. Abschließend erhalten die Härchen eine pflegende Behandlung, damit sie geschmeidig bleiben – und ich erkläre dir, worauf du bei der Pflege zu Hause achten solltest.",
    image: "/images/browslifting.webp",
    imageAlt: "Augenbrauen nach einem Brow Lifting",
    imageFocus: "center 30%",
  },
];
