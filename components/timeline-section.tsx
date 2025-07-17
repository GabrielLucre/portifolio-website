"use client";

import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { CalendarIcon, GraduationCapIcon, MapPinIcon } from "lucide-react";
import { useTheme } from "next-themes";

const timelineData = [
  {
    id: 1,
    type: "education",
    titleKey: "timeline.education.title",
    companyKey: "timeline.education.company",
    locationKey: "timeline.education.location",
    periodKey: "timeline.education.period",
    descriptionKey: "timeline.education.description",
    icon: <GraduationCapIcon className="w-5 h-5" />,
  },
];

export const TimelineSection = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="timeline" className="py-32 relative overflow-hidden">
      {/* Minimal Background Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080">
          <defs>
            <linearGradient id="timelineTopologyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={theme === 'light' ? '#000000' : '#ffffff'} stopOpacity="0.02" />
              <stop offset="50%" stopColor={theme === 'light' ? '#000000' : '#ffffff'} stopOpacity="0.05" />
              <stop offset="100%" stopColor={theme === 'light' ? '#000000' : '#ffffff'} stopOpacity="0.02" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className={theme === 'light' ? 'text-black' : 'text-white'}>{t('timeline.title')}</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('timeline.description')}
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <motion.div
              className={`w-full rounded-full ${theme === 'light' ? 'bg-black' : 'bg-white'}`}
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } space-y-8 md:space-y-0`}
              >
                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                    }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`rounded-2xl p-8 group transition-all duration-500 border ${theme === 'light'
                      ? 'bg-white/90 border-black/10 hover:border-black/20 hover:shadow-xl hover:shadow-black/10'
                      : 'bg-black/90 border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-white/10'
                      } backdrop-blur-sm`}
                  >
                    {/* Period Badge */}
                    <motion.div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${theme === 'light'
                        ? 'bg-black text-white border border-black/20'
                        : 'bg-white text-black border border-white/20'
                        }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <CalendarIcon className="w-4 h-4" />
                      {t(item.periodKey)}
                    </motion.div>

                    {/* Title and Company */}
                    <motion.h3
                      className={`text-xl font-semibold mb-2 transition-colors duration-300 ${theme === 'light'
                        ? 'text-black group-hover:text-gray-700'
                        : 'text-white group-hover:text-gray-300'
                        }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      {t(item.titleKey)}
                    </motion.h3>
                    <motion.p
                      className="text-lg font-medium text-muted-foreground mb-2"
                      whileHover={{ scale: 1.01 }}
                    >
                      {t(item.companyKey)}
                    </motion.p>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPinIcon className="w-4 h-4" />
                      {t(item.locationKey)}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {t(item.descriptionKey)}
                    </p>
                  </div>
                </motion.div>

                {/* Central Icon */}
                <motion.div
                  className="w-full md:w-2/12 flex justify-center items-center relative z-10 h-16 md:h-full"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-2 ${theme === 'light'
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-white'
                      }`}
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`w-6 h-6 rounded-full shadow-lg ${theme === 'light' ? 'bg-black' : 'bg-white'}`}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};