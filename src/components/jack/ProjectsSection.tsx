import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";

import projectStudentProfile from "@/assets/dream.png";
import projectPortfolio from "@/assets/midnight.png";
import projectCybersecurity from "@/assets/academiax.png";
import projectPlaceholder from "@/assets/pivot.png";
import projectCybersecuritys from "@/assets/portfolio.png";

interface Project {
  n: string;
  category: string;
  name: string;
  description: string;
  technologies: string;
  image: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    n: "01",
    category: "Web & Software",
    name: "Dream Wedding",
    description: "A wedding management system that allows users to plan and manage their wedding events, including guest lists, seating arrangements, and event schedules.",
    technologies: "HTML, CSS, JavaScript",
    image: projectStudentProfile,
    link: "https://dreamweddingnp.netlify.app/",
  },
  {
    n: "02",
    category: "C Programming",
    name: "The Midnight ",
    description: "A simple C program that demonstrates the use of basic programming concepts, time ,including variables, loops, and functions .",
    technologies: "C, Linux",
    image: projectPortfolio,
    link: "https://sthakrish.com.np/",
  },
  {
    n: "03",
    category: "web and hosting ",
    name: "AcademiaX",
    description: "AcademiaX is a web application that provides a platform for students and parents to watch sports events and esports competitions.",
    technologies: "HTML, CSS, JavaScript, php, MySQL",
    image: projectCybersecurity,
    link: "https://streamingacademia.netlify.app/",
  },
  {
    n: "04",
    category: "Web",
    name: "Krish Portfolio",
    description: "A personal portfolio website that showcases my skills, projects, and experience as a web developer and cybersecurity enthusiast.",
    technologies: "React, TypeScript, Tailwind CSS,framer-motion",
    image: projectCybersecuritys,
    link: "https://sthakrish.com.np/",
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
  const targetScale = 1 - (total - 1 - index) * 0.03;

  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, targetScale]
  );

  return (
    <div
      className="sticky top-24 md:top-32"
      style={{ top: `${index * 28 + 96}px` }}
    >
      <motion.div
        style={{ scale }}
        className="
          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border border-white/10
          bg-[#151A1F]/95
          backdrop-blur-xl
          p-4 sm:p-6 md:p-8
          shadow-[0_0_60px_rgba(255,255,255,0.03)]
          transition-all duration-300
          hover:border-white/20
        "
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 md:mb-8 px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
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
              <span className="text-white/50 uppercase tracking-[0.25em] text-xs sm:text-sm">
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

          <LiveProjectButton href={project.link} />
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Left */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="
                w-full object-cover
                rounded-[30px]
                border border-white/10
                hover:scale-[1.02]
                transition-all duration-300
              "
              style={{
                height: "clamp(140px,18vw,240px)",
              }}
            />

            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="
                w-full object-cover
                rounded-[30px]
                border border-white/10
                hover:scale-[1.02]
                transition-all duration-300
              "
              style={{
                height: "clamp(180px,24vw,320px)",
              }}
            />
          </div>

          {/* Main Image */}
          <div className="md:col-span-3">
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="
                w-full h-full object-cover
                rounded-[35px] md:rounded-[45px]
                border border-white/10
                hover:scale-[1.01]
                transition-all duration-300
              "
              style={{
                minHeight: "100%",
              }}
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
    <section id="projects"
      ref={containerRef}
      className="
        px-5 sm:px-8 md:px-10
        py-20 sm:py-24 md:py-32
        bg-[#151A1F]
      "
    >
      <FadeIn
        y={40}
        className="text-center mb-16 sm:mb-20 md:mb-28"
      >
        <h2
          className="
            hero-heading
            font-black
            uppercase
            leading-none
            tracking-tight
            text-white
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <div
            key={project.n}
            className="h-[85vh]"
          >
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