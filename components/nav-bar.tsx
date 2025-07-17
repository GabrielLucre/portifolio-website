"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsAtTop(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#timeline", label: t("nav.timeline") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center relative">
        {isAtTop && <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary relative group",
                (pathname === "/" && item.href === "/") ||
                  (pathname !== "/" && item.href.startsWith("#"))
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                  (pathname === "/" && item.href === "/") ||
                    (pathname !== "/" && item.href.startsWith("#"))
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                )}
              ></span>
            </Link>
          ))}
        </nav>}

        <div className="flex items-center space-x-2 ml-auto">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </motion.header>
  );
};