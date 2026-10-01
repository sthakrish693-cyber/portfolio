import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";

import projectStudentProfile from "@/assets/dream.png";
import projectPortfolio from "@/assets/midnight.png";
import projectAcademiaX from "@/assets/academiax.png";
import projectkris from "@/assets/kris.png";

interface Project {
  n: string;
  category: string;
  name: string;
  description: string;
  technologies: string;
  image: string;
  link: string;
  secondaryLabel?: string;
}

const PROJECTS: Project[] = [
  {
    n: "01",
    category: "Web app",
    name: "AcademiaX",
    description:
      "A web platform where students and parents can watch college sports and esports events. I built the front end and the PHP/MySQL back end.",
    technologies: "HTML, CSS, JavaScript, PHP, MySQL",
    image: projectAcademiaX,
    link: "https://streamingacademia.netlify.app/",
    secondaryLabel: "Security audit write-up: coming soon",
  },
  {
    n: "02",
    category: "Web app",
    name: "Dream Wedding",
    description:
      "A wedding planning tool for managing guest lists, seating arrangements and event schedules. I built it to practise structuring a multi-feature interface.",
    technologies: "HTML, CSS, JavaScript",
    image: projectStudentProfile,
    link: "https://dreamweddingnp.netlify.app/",
  },
  {
    n: "03",
    category: "C programming",
    name: "The Midnight",
    description:
      "A command-line C program that uses variables, loops and functions to work with time. I wrote it to practise core C and the Linux terminal.",
    technologies: "C, Linux",
    image: projectPortfolio,
    link: "https://github.com/sthakrish693-cyber/The-Midnight",
  },
  {
    n: "04",
    category: "React portfolio",
    name: "This portfolio",
    description: "Designed and built from scratch in React, TypeScript and Tailwind CSS.",
    technologies: "React, TypeScript, Tailwind CSS, Framer Motion",
    image: projectkris,
    link: "https://sthakrish.com.np",
  },
];

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const shouldReduceMotion = useReducedMotion();
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32" style={{ top: `${index * 28 + 96}px` }}>
      <motion.div
        style={{ scale: shouldReduceMotion ? 1 : scale }}
        className="rounded-[40px] border border-white/10 bg-[#151A1F]/95 p-4 shadow-[0_0_60px_rgba(255,255,255,0.03)] backdrop-blur-xl transition-all duration-300 hover:border-white/20 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="mb-6 flex flex-col justify-between gap-6 px-2 sm:px-4 md:mb-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
            <div
              className="hero-heading font-black text-white/15"
              style={{
                fontSize: "clamp(3rem, 10vw, 140px)",
                lineHeight: 1,
              }}
            >
              {project.n}
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-[0.25em] text-white/50 sm:text-sm">
                {project.category}
              </span>

              <span
                className="text-white font-medium uppercase"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.75rem)",
                }}
              >
                {project.name}
              </span>
              <span className="max-w-xl text-sm leading-relaxed text-white/60">
                {project.description}
              </span>
              <span className="text-xs uppercase tracking-[0.16em] text-white/40">
                {project.technologies}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3">
            <LiveProjectButton href={project.link} />
            {project.secondaryLabel ? (
              <span className="text-xs uppercase tracking-[0.18em] text-white/45">
                {project.secondaryLabel}
              </span>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className="flex flex-col gap-4 md:col-span-2">
            <img
              src={project.image}
              alt={`${project.name} project preview`}
              loading="lazy"
              className="w-full rounded-[30px] border border-white/10 object-cover transition-all duration-300 hover:scale-[1.02]"
              style={{ height: "clamp(140px,18vw,240px)" }}
            />

            <img
              src={project.image}
              alt={`${project.name} project dashboard`}
              loading="lazy"
              className="w-full rounded-[30px] border border-white/10 object-cover transition-all duration-300 hover:scale-[1.02]"
              style={{ height: "clamp(180px,24vw,320px)" }}
            />
          </div>

          <div className="md:col-span-3">
            <img
              src={project.image}
              alt={`${project.name} project layout`}
              loading="lazy"
              className="h-full w-full rounded-[35px] border border-white/10 object-cover transition-all duration-300 hover:scale-[1.01] md:rounded-[45px]"
              style={{ minHeight: "100%" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" ref={containerRef} className="bg-[#151A1F] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <FadeIn y={40} className="mb-16 text-center sm:mb-20 md:mb-28">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {PROJECTS.map((project, index) => (
          <div key={project.n} className="h-[85vh]">
            <ProjectCard
              project={project}
              index={index}
              total={PROJECTS.length}
              progress={scrollYProgress}
            />
          </div>
        ))}
      </div>
    </section>
  );
}