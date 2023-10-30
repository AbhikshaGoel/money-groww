"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/mf"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/mutualfund"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Mutual Fund
        </Link>
        <Link
          href="/ppf"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          PPF
        </Link>
        <Link
          href="/nps"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          NPS
        </Link>
        <Link
          href="/fd"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Fixed Deposit
        </Link>
        <Link
          href="/gold"
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          Gold
        </Link>
      </nav>
    </div>
  );
}
