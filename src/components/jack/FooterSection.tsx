import { FadeIn } from "./FadeIn";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

export function FooterSection() {
  return (
    <footer className="bg-[#151A1F] px-5 pb-10 pt-24 sm:px-8 md:px-10" id="contact">
      <div className="mx-auto max-w-7xl">
        <FadeIn y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight text-white"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            Get in touch
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <div className="mt-12 flex justify-center">
            <a
              href="mailto:sthakrish693@gmail.com"
              className="rounded-full border border-white/10 bg-white/[0.03] px-10 py-5 font-medium uppercase tracking-[0.25em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151A1F]"
            >
              Contact me
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <div className="mt-14 flex justify-center">
            <div className="text-center text-lg text-white/70">
              <p>I&apos;m looking for a cybersecurity internship. If you have an opening or want to talk about my projects, I&apos;d be glad to hear from you.</p>
              <p className="mt-3 text-base text-white/50">Kathmandu, Nepal | sthakrish693@gmail.com | GitHub | LinkedIn</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <div className="mt-12 flex justify-center gap-8">
            <a
              href="https://github.com/sthakrish693-cyber"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-white/60 transition-all duration-300 hover:scale-110 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151A1F]"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://sthakrish.com.np/"
              target="_blank"
              rel="noreferrer"
              aria-label="Website"
              className="text-white/60 transition-all duration-300 hover:scale-110 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151A1F]"
            >
              <FaGlobe size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/krish-shrestha367/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-white/60 transition-all duration-300 hover:scale-110 hover:text-[#0A66C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151A1F]"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </FadeIn>

        <div className="mb-8 mt-16 h-px bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-sm text-white/40">© 2026 Krish Shrestha</span>
        </div>
      </div>
    </footer>
  );
}