import type {
  DimasNamesObject,
  NewsObject,
  PublicationObject,
  ServicesObject,
  Site,
  SocialObjects,
} from "./types";

export const SITE: Site = {
  website: "https://dparikesit.github.io/",
  author: "Dimas Shidqi Parikesit",
  desc: "Dimas Shidqi Parikesit is a Computer Science PhD student at the University of Virginia researching systems reliability, cloud and distributed systems, and AI inference systems.",
  title: "dParikesit",
  ogImage: "astropaper-og.png",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SERVICES: ServicesObject = [
  {
    title: "OSDI'26 Artifact Evaluation - Evaluated 3 research prototypes",
    services: [],
  },
  {
    title: "Teaching Assistant - University of Virginia",
    services: ["Cloud Computing"],
  },
  {
    title: "Teaching Assistant - Bandung Institute of Technology",
    services: [
      "Artificial Intelligence",
      "Programming Fundamentals",
      "Introduction to Computation",
    ],
  },
];

export const NEWS: NewsObject = [
  {
    title: "Our position paper on LISA is published at HotNets '25!",
    date: "November 2025",
  },
  {
    title: "T2C is accepted at OSDI '25!",
    date: "March 25 2025",
  },
  {
    title:
      "I started my Computer Science PhD at LiftLab, University of Virginia, advised by Prof. Chang Lou.",
    date: "August 2024",
  },
  {
    title:
      "I'm admitted to the PhD program at LIFTLAB @ University of Virginia!",
    date: "January 22 2024",
  },
  {
    title:
      "I'm applying for Ph.D. program in systems! Let's chat if you're interested in hiring me.",
    date: "December 15 2023",
  },
  {
    title:
      "EVStore is up on ASPLOS '23! I built the cache key clusters for EVProx.",
    date: "June 16 2023",
  },
];

export const DIMASNAMES: DimasNamesObject = [
  {
    name: "Dimas Shidqi",
  },
  {
    name: "Dimas Parikesit",
  },
  {
    name: "Dimas Shidqi Parikesit",
  },
];

export const PUBLICATION: PublicationObject = [
  {
    title:
      "Once Bitten, Still Shy: Can We Prevent Cloud Systems from Repeating Their Mistakes?",
    authors: ["Dimas Parikesit", "Chang Lou"],
    conference: "ACM HotNets 2025 · Position paper · First author",
    url: "https://conferences.sigcomm.org/hotnets/2025/papers/hotnets25-final48.pdf",
  },
  {
    title:
      "Deriving Semantic Checkers from Tests to Detect Silent Failures in Production Distributed Systems",
    authors: [
      "Chang Lou",
      "Dimas Shidqi Parikesit",
      "Yujin Huang",
      "Zhewen Yang",
      "Senapati Diwangkara",
      "Yuzhuo Jing",
      "Achmad Imam Kistijantoro",
      "Ding Yuan",
      "Suman Nath",
      "Peng Huang",
    ],
    conference: "USENIX OSDI 2025 · Second author",
    url: "https://www.usenix.org/conference/osdi25/presentation/lou",
  },
];

export const SOCIALS: SocialObjects = [
  {
    name: "Mail",
    href: "mailto:vqx2dc@virginia.edu",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dimas-parikesit/",
    linkTitle: `Connect with ${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/dParikesit",
    linkTitle: `View ${SITE.author}'s projects on GitHub`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/dimashidqi",
    linkTitle: `Follow ${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dimashidqi/",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
