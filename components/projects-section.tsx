"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const projects = [
  {
    id: "project1",
    image: "/bancoPagePhoto.png",
    technologies: ["React", "Javascript", "Styled Components", "Firebase"],
    demoLink: "https://criptoetec.firebaseapp.com",
    githubLink: "https://github.com/GabrielLucre/feira-da-troca-page",
    featured: true
  },
  {
    id: "project2",
    image: "/bancoDaFeiraPhoto.png",
    technologies: ["React", "Javascript", "Nodejs", "Express", "Material UI"],
    demoLink: "",
    githubLink: "https://github.com/GabrielLucre/banco-feira-da-troca",
    featured: false
  },
  {
    id: "project3",
    image: "/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
    demoLink: "https://gabriellucre.vercel.app/",
    githubLink: "https://github.com/GabrielLucre/portifolio-website",
    featured: false
  },
  {
    id: "project4",
    image: "/apata.png",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
    demoLink: "https://apata.site",
    githubLink: "https://github.com/GabrielLucre/apata-website",
    featured: false
  },
];

export const ProjectsSection = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={`text-gradient text-gradient-dark ${theme === 'dark' ? 'text-gradient-dark' : ''}`}>{t("projects.title")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            {t("projects.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card className={`overflow-hidden h-full border-none shadow-lg group ${theme === 'light' ? 'project-card-light' : 'project-card'}`}>
                <div className={`relative overflow-hidden ${project.featured ? 'h-80' : 'h-64'}`}>
                  <Image
                    src={project.image}

                    alt={t(`${project.id}.title`)}
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay Actions */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ scale: 0.8 }}
                  >
                    <div className="flex space-x-4">
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          size="sm"
                          className={`rounded-full backdrop-blur-sm transition-all duration-300 ${theme === 'light'
                            ? 'bg-black/90 text-white hover:bg-black border border-black/20'
                            : 'bg-white/90 text-black hover:bg-white border border-white/20'
                            }`}
                          asChild
                        >
                          {project.demoLink && <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLinkIcon className="h-4 w-4 mr-2" />
                            {t('project.liveDemo')}
                          </a>}
                        </Button>
                      </motion.div>
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className={`rounded-full backdrop-blur-sm transition-all duration-300 ${theme === 'light'
                            ? 'border-black/30 text-black hover:bg-black/10 bg-white/80'
                            : 'border-white/30 text-white hover:bg-white/10 bg-black/80'
                            }`}
                          asChild
                        >
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GithubIcon className="h-4 w-4 mr-2" />
                            {t('project.code')}
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {t(`${project.id}.title`)}
                    </h3>
                    {project.featured && (
                      <motion.span
                        className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${theme === 'light'
                          ? 'bg-black/10 text-black border-black/20'
                          : 'bg-white/10 text-white border-white/20'
                          }`}
                      >
                        {t('project.featured')}
                      </motion.span>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {t(`${project.id}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 ${theme === 'light'
                          ? 'bg-black/5 text-black/70 border-black/10 hover:bg-black/10 hover:border-black/20'
                          : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:border-white/20'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    className={`inline-flex items-center text-sm font-medium transition-all duration-300 cursor-pointer ${theme === 'light' ? 'text-black' : 'text-white'}`}
                  >
                    {t('project.view')}
                    <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform duration-300" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};