import type {
  Site,
  SocialObjects,
  NewsObject,
  PublicationObject,
  DimasNamesObject,
  ServicesObject,
} from "./types";

export const SITE: Site = {
  website: "https://dparikesit.github.io/",
  author: "dParikesit",
  desc: "Dimas Shidqi Parikesit's personal blog",
  title: "dParikesit",
  ogImage: "astropaper-og.png",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN", "id-ID"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SERVICES: ServicesObject = [
  {
    title: "Teaching Assistant - Bandung Institute of Technology",
    services: ["Artificial Intelligence", "Programming Fundamentals", "Introduction to Computation"],
  },
];

export const NEWS: NewsObject = [
  // {
  //   title: "I'm applying to",
  //   date: "December 12 2023",
  // },
];

export const DIMASNAMES: DimasNamesObject = [
  {
    name: "Dimas Shidqi",
  },
  {
    name: "Dimas Parikesit",
  },
];

export const PUBLICATION: PublicationObject = [
  // {
  //   title: "Ini judul",
  //   authors: ["Bukan Dimas", "Bukan Dimas", "Dimas Shidqi"],
  //   conference: "Ini judul conference",
  //   url: "https://informatika.stei.itb.ac.id/~rinaldi.munir/Stmik/2022-2023/stima22-23.htm",
  // },
];

export const SOCIALS: SocialObjects = [
  {
    name: "Mail",
    href: "mailto:dsparikesit@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dimas-parikesit/",
    linkTitle: `Have job opportunities? ${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/dParikesit",
    linkTitle: `Checkout ${SITE.title} on Github`,
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
