import type socialIcons from "@assets/socialIcons";

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type DimasNamesObject = {
  name: string;
}[];

export type NewsObject = {
  title: string;
  date: string;
}[];

export type ServicesObject = {
  title: string;
  services: string[];
}[];

export type PublicationObject = {
  title: string;
  authors: string[];
  conference: string | undefined;
  url: string;
}[];