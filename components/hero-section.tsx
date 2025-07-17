"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowDownIcon, Download, SparklesIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: number; size: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 8,
      size: Math.random() * 4 + 2,
    }));
    setParticles(newParticles);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${theme === 'light' ? 'hero-bg-light' : 'hero-bg'}`}>
      {/* Main Content */}
      <motion.div
        className="text-center max-w-4xl px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 text-primary text-sm font-medium mt-12">
            <SparklesIcon className="w-4 h-4" />
            {t("availability.title")}
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-4 font-light"
        >
          {t("hero.greeting")}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className={`text-gradient text-gradient-dark ${theme === 'dark' ? 'text-gradient-dark' : ''}`}>{t("hero.name")}</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl font-medium text-muted-foreground mb-8"
        >
          {t("hero.title")}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="#projects">
            <Button
              size="lg"
              className={`rounded-md px-8 py-6 text-lg font-medium hover:scale-105 transition-all duration-300 ${theme === 'light' ? 'glow-light' : 'glow'
                }`}
            >
              {t("hero.work")}
            </Button>
          </Link>

          <a
            href="/path/to/?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-lg font-medium px-8 py-2 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={floatingVariants}
        initial={{ y: 0 }}
        animate="animate"
        viewport={{ once: true }}
        className="absolute bottom-8 transform -translate-x-1/2 z-10 hidden md:block"
      >
        <Link href="#stack">
          <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 hover:bg-primary/10 hover:scale-110 transition-all duration-300 flex items-center justify-center">
            <ArrowDownIcon className="h-6 w-6 text-primary" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};