import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { SkillsSection } from "@/components/jack/SkillsSection";
import { FooterSection } from "@/components/jack/FooterSection";
import favicon from "@/assets/favicon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Krish Shrestha — Web Developer & Cybersecurity Enthusiast",
      },
      {
        name: "description",
        content:
          "Portfolio of Krish Shrestha, a BCS CSIT student and developer from Nepal focused on web development, cybersecurity, and building practical digital products.",
      },
      {
        property: "og:title",
        content:
          "Krish Shrestha — Web Developer & Cybersecurity Enthusiast",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Krish Shrestha, a BCS CSIT student and developer from Nepal focused on web development, cybersecurity, and building practical digital products.",
      },
    ],

    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: favicon,
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <main style={{ background: "#151A1F", overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
