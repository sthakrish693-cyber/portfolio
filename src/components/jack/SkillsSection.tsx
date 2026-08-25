import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";

import {
  SiMysql,
  SiC,
  SiCplusplus,
  SiPhp,
  SiMongodb,
} from "react-icons/si";

const row1 = [
  { Icon: SiC, name: "C", color: "#A8B9CC" },
  { Icon: SiCplusplus, name: "C++", color: "#00599C" },
  { Icon: FaPython, name: "Python", color: "#3776AB" },
  { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiPhp, name: "PHP", color: "#777BB4" },
];

const row2 = [
  { Icon: FaHtml5, name: "HTML", color: "#E34F26" },
  { Icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
  { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
  { Icon: FaReact, name: "React", color: "#61DAFB" },
  { Icon: SiPhp, name: "PHP", color: "#777BB4" },
  { Icon: FaHtml5, name: "Responsive Web Design", color: "#E34F26" },
  { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: FaGitAlt, name: "Git", color: "#F05032" },
  { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
  { Icon: FaLinux, name: "Web Security", color: "#557C94" },
  { Icon: FaLinux, name: "OWASP Top 10", color: "#557C94" },
  { Icon: FaLinux, name: "Burp Suite", color: "#FF6633" },
  { Icon: FaLinux, name: "Vulnerability Assessment", color: "#557C94" },
  { Icon: FaLinux, name: "Penetration Testing Fundamentals", color: "#557C94" },
  { Icon: FaLinux, name: "Linux / Kali Linux", color: "#FCC624" },
  { Icon: FaLinux, name: "VS Code", color: "#007ACC" },
  { Icon: FaLinux, name: "VirtualBox", color: "#183A61" },
];

const row3 = [
  { Icon: SiMysql, name: "Database", color: "#4479A1" },
  { Icon: FaGitAlt, name: "Tools", color: "#F05032" },
];

function SkillRow({
  skills,
  reverse = false,
}: {
  skills: typeof row1;
  reverse?: boolean;
}) {
  return (
    <motion.div
      animate={{
        x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex gap-6 whitespace-nowrap"
    >
      {[...skills, ...skills].map((skill, index) => {
        const Icon = skill.Icon;

        return (
          <div
            key={index}
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

            <span className="text-white font-medium text-lg">
              {skill.name}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills"
      className="py-24 overflow-hidden"
      style={{ background: "#151A1F" }}
    >
      <FadeIn y={40}>
        <h2
          className="
            hero-heading
            font-black
            uppercase
            leading-none
            tracking-tight
            text-center
            text-white
            mb-20
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-8">
        <SkillRow skills={row1} />

        <SkillRow skills={row2} reverse />

        <SkillRow skills={row3} />
      </div>
    </section>
  );
}