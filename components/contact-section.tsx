"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { GithubIcon, Instagram as InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const ContactSection = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const contactItems = [
    {
      icon: <MailIcon className="h-6 w-6" />,
      title: t("contact.email"),
      value: "gabriellucrecosta@gmail.com",
      href: "mailto:gabriellucrecosta@gmail.com",
    },
    {
      icon: <LinkedinIcon className="h-6 w-6" />,
      title: t("contact.linkedin"),
      value: "linkedin.com/in/gabriellucrecio",
      href: "https://linkedin.com/in/gabriellucrecio",
    },
    {
      icon: <GithubIcon className="h-6 w-6" />,
      title: t("contact.github"),
      value: "github.com/Gabriellucre",
      href: "https://github.com/GabrielLucre",
    },
    {
      icon: <InstagramIcon className="h-6 w-6" />,
      title: t("contact.instagram"),
      value: "instagram.com/gabriel.lucrecio",
      href: "https://instagram.com/gabriel.lucrecio",
    },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={`text-gradient text-gradient-dark ${theme === 'dark' ? 'text-gradient-dark' : ''}`}>{t("contact.title")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactItems.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group"
                    >
                      <div className="flex-shrink-0 mr-4 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};