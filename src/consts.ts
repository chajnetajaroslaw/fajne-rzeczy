import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Fajne Rzeczy",
  DESCRIPTION: "Kontenery, homelab, automatyzacja aplikacje i narzędzia.",
  EMAIL: "chajnetajaroslaw@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const wpisy: Metadata = {
  TITLE: "wpisy",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const KOLEKCJE: Metadata = {
  TITLE: "Kolekcje",
  DESCRIPTION:
    "Kolekcje i listy najciekawszych aplikacji, narzędzi i poradników.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/chajnetajaroslaw",
  }
];
