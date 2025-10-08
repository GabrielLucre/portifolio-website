"use client";

import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import ViteIcon from "../app/assets/icons/Vite.svg"

const technologies = [
  {
    name: "Figma",
    description: "Design tool",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    gradient: "from-orange-500 to-pink-500"
  },
  {
    name: "Next.js",
    description: "React Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    name: "TypeScript",
    description: "JavaScript Superset",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Tailwind",
    description: "CSS Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    gradient: "from-teal-400 to-blue-500"
  },
  {
    name: "Git",
    description: "Version control",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    gradient: "from-red-500 to-orange-500"
  },
  {
    name: "React",
    description: "JavaScript Library",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    name: "Vite",
    description: "Frontend build tool",
    icon: ViteIcon,
    gradient: "from-purple-500 to-yellow-400"
  },
  {
    name: "Supabase",
    description: "Backend tool",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    gradient: "from-green-400 to-emerald-500"
  },
];

export const TechSection = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="stack" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className={`text-gradient text-gradient-dark ${theme === 'dark' ? 'text-gradient-dark' : ''}`}>{t("techstack.title")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              {t("techstack.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className={`rounded-2xl p-6 group cursor-pointer relative overflow-hidden ${theme === 'light' ? 'tech-card-light' : 'tech-card'}`}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 relative group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};