import { FadeIn } from "./FadeIn";
import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";

export function FooterSection() {
  return (
    <footer className="bg-[#151A1F] px-5 sm:px-8 md:px-10 pt-24 pb-10" id ="contact">
      <div className="max-w-7xl mx-auto">
        {/* CTA */}
        <FadeIn y={40}>
          <h2
            className="
              hero-heading
              font-black
              uppercase
              leading-none
              tracking-tight
              text-white
              text-center
            "
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
            }}
          >
            Let&apos;s build something together.
          </h2>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.2} y={30}>
          <div className="flex justify-center mt-12">
            <a
              href="#contact"
              className="
                px-10 py-5
                rounded-full
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-md
                text-white
                uppercase
                tracking-[0.25em]
                font-medium
                transition-all duration-300
                hover:bg-white/[0.08]
                hover:border-white/20
                hover:-translate-y-1
              "
            >
              Get In Touch
            </a>
          </div>
        </FadeIn>

        {/* Contact details */}
        <FadeIn delay={0.3} y={20}>
          <div className="mt-14 flex justify-center">
            <div className="text-center text-lg text-white/70">
              <p>Have an idea, project, or opportunity? Feel free to get in touch.</p>
              <p className="mt-3 text-base text-white/50">Kathmandu, Nepal</p>
              <p className="mt-3 text-base text-white/50">Professional email: sthakrish693@gmail.com</p>
            </div>
          </div>
        </FadeIn>

        {/* Socials */}
        <FadeIn delay={0.4} y={20}>
          <div className="flex justify-center gap-8 mt-12">
            <a
              href="https://github.com/sthakrish693-cyber"
              target="_blank"
              rel="noreferrer"
              className="
                text-white/60
                hover:text-white
                hover:scale-110
                transition-all duration-300
              "
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://sthakrish.com.np/"
              target="_blank"
              rel="noreferrer"
              className="
                text-white/60
                hover:text-white
                hover:scale-110
                transition-all duration-300
              "
            >
              <FaGlobe size={30} />
            </a>

            <a
              href="https://www.instagram.com/anthrishh?igsi=a25mYXlhbXdpdzY1"
              aria-label="Instagram profile link placeholder"
              className="text-white/60 hover:text-[#E4405F] hover:scale-110 transition-all duration-300"
            >
              <FaInstagram size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/krish-shrestha367/"
              aria-label="LinkedIn profile link placeholder"
              className="text-white/60 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="h-px bg-white/10 mt-16 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/40 text-sm">
            © 2026 Krish Shrestha. All rights reserved.
          </span>

          <span className="text-white/40 text-sm uppercase tracking-[0.2em]">
            Designed &amp; built by Krish Shrestha.
          </span>
        </div>
      </div>
    </footer>
  );
}