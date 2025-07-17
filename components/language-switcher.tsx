"use client";

import { useLanguage } from "@/lib/i18n";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const flagMap: Record<string, string> = {
  en: "🇺🇸",
  es: "🇪🇸",
  br: "🇧🇷",
};

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-2xl"
            aria-label="Select language"
          >
            {flagMap[language]}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {Object.entries(flagMap).map(([lang, flag]) => (
            <DropdownMenuItem
              key={lang}
              onClick={() => setLanguage(lang as any)}
              className={`flex items-center justify-center text-2xl ${language === lang ? "opacity-100" : "opacity-60"}`}
            >
              {flag}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
};
