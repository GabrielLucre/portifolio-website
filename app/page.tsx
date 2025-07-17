import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FireChars } from "@/components/fire-chars";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { TechSection } from "@/components/tech-section";
import { TimelineSection } from "@/components/timeline-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <ContactSection />
      <FireChars />
    </>
  );
}