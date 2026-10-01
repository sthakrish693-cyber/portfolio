import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "./FadeIn";

import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinux,
  FaPython,
  FaReact,
} from "react-icons/fa";

import { SiC, SiCplusplus, SiMongodb, SiMysql, SiPhp } from "react-icons/si";

const developmentSkills = [
  { Icon: SiC, name: "C", color: "#A8B9CC" },
  { Icon: SiCplusplus, name: "C++", color: "#00599C" },
  { Icon: FaPython, name: "Python", color: "#3776AB" },
  { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiPhp, name: "PHP", color: "#777BB4" },
  { Icon: FaHtml5, name: "HTML", color: "#E34F26" },
  { Icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
  { Icon: FaReact, name: "React", color: "#61DAFB" },
  { Icon: SiMysql, name: "SQL (MySQL)", color: "#4479A1" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: FaGitAlt, name: "Git", color: "#F05032" },
  { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
];

const systemSkills = [
  { Icon: FaLinux, name: "Linux", color: "#FCC624" },
  { Icon: FaLinux, name: "VirtualBox", color: "#183A61" },
  { Icon: FaLinux, name: "Basic networking", color: "#557C94" },
];

const learningSkills = [
  { Icon: FaPython, name: "Python for security", color: "#3776AB" },
  { Icon: FaLinux, name: "Web application security (OWASP Top 10)", color: "#557C94" },
  { Icon: FaLinux, name: "Burp Suite", color: "#FF6633" },
  { Icon: FaLinux, name: "Log analysis and SIEM", color: "#557C94" },
];

function SkillRow({
  skills,
  reverse = false,
}: {
  skills: typeof developmentSkills;
  reverse?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? { x: 0 }
          : {
              x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
            }
      }
      transition={{
        duration: shouldReduceMotion ? 0 : 30,
        repeat: shouldReduceMotion ? 0 : Infinity,
        ease: "linear",
      }}
      className="flex gap-6 whitespace-nowrap"
    >
      {[...skills, ...skills].map((skill, index) => {
        const Icon = skill.Icon;

        return (
          <div
            key={`${skill.name}-${index}`}
            className="
              flex items-center gap-4
              px-7 py-4
              rounded-full
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-md
              hover:bg-white/[0.06]
              transition-all duration-300
              shrink-0
            "
          >
            <Icon size={36} color={skill.color} />

            <span className="text-lg font-medium text-white">{skill.name}</span>
          </div>
        );
      })}
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="overflow-hidden py-24" style={{ background: "#151A1F" }}>
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-20 font-black uppercase leading-none tracking-tight text-center text-white"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-8">
        <div className="px-5 text-center text-xs font-medium uppercase tracking-[0.25em] text-white/60 sm:px-8">
          Development
        </div>
        <SkillRow skills={developmentSkills} />

        <div className="px-5 pt-4 text-center text-xs font-medium uppercase tracking-[0.25em] text-white/60 sm:px-8">
          Systems and networking
        </div>
        <SkillRow skills={systemSkills} reverse />

        <div className="px-5 pt-4 text-center text-xs font-medium uppercase tracking-[0.25em] text-white/60 sm:px-8">
          Currently learning
        </div>
        <SkillRow skills={learningSkills} />
      </div>
    </section>
  );
}