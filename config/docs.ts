import { MainNavItem, SidebarNavItem } from "@/app/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Mutual Fund",
      href: "/mf",
    },
    {
      title: "PPF",
      href: "/ppf",
    },
    {
      title: "NPS",
      href: "/nps",
    },
    {
      title: "Fixed Deposit",
      href: "/fd",
    },
    {
      title: "Gold",
      href: "/gold",
    },
    {
      title: "GitHub",
      href: "https://github.com/shadcn/ui",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/shadcn",
      external: true,
    },
  ],
  sidebarNav: [],
};
