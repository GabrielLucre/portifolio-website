"use client";

import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { CalendarIcon, ClockIcon, HeartIcon, MapPinIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const AboutSection = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const stats = [
    {
      icon: <CalendarIcon className="w-5 h-5" />,
      labelKey: 'about.stats.age.label',
      valueKey: 'about.stats.age.value',
    },
    {
      icon: <ClockIcon className="w-5 h-5" />,
      labelKey: 'about.stats.experience.label',
      valueKey: 'about.stats.experience.value',
    },
  ];

  const skills = [
    {
      categoryKey: 'about.skills.tools.category',
      itemsKeys: [
        'about.skills.tools.items.0',
        'about.skills.tools.items.1',
        'about.skills.tools.items.2',
        'about.skills.tools.items.3',
      ],
    },
    {
      categoryKey: 'about.skills.soft.category',
      itemsKeys: [
        'about.skills.soft.items.0',
        'about.skills.soft.items.1',
        'about.skills.soft.items.2',
        'about.skills.soft.items.3',
      ],
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={`text-gradient text-gradient-dark ${theme === 'dark' ? 'text-gradient-dark' : ''}`}>{t('about.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/20 to-primary/5" />
              <Image
                src="/about_photo.png"
                alt="Profile"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.intro')}
              </p>

              <div className="flex items-center gap-2 text-muted-foreground mb-8">
                <MapPinIcon className="w-4 h-4" />
                <span>{t('about.location')}</span>
                <HeartIcon className="w-4 h-4 text-red-500 ml-4" />
                <span>{t('about.availability')}</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.labelKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-muted/30 rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">{stat.icon}</div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      {t(stat.labelKey)}
                    </h4>
                  </div>
                  <p className="font-semibold text-lg">{t(stat.valueKey)}</p>
                </motion.div>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.categoryKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <h3 className="font-semibold text-lg text-primary">
                    {t(skillGroup.categoryKey)}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.itemsKeys.map((itemKey) => (
                      <li key={itemKey} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0"></span>
                        <span className="text-sm">{t(itemKey)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <p className="text-muted-foreground mb-4">
                {t('about.cta')}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {t('about.badges.fast')}
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {t('about.badges.design')}
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {t('about.badges.performance')}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};