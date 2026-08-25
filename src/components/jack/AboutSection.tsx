import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";

export function AboutSection() {
  return (
    <section id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 gap-10 sm:gap-14 md:gap-16"
      style={{ background: "#151A1F", overflowX: "clip" }}
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <span aria-hidden="true" className="text-6xl opacity-20">*</span>
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <span aria-hidden="true" className="text-6xl opacity-20">+</span>
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <span aria-hidden="true" className="text-6xl opacity-20">*</span>
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <span aria-hidden="true" className="text-6xl opacity-20">+</span>
      </FadeIn>

      <FadeIn delay={0} y={40} className="text-center relative z-10">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </h2>
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <AnimatedText
          text="I’m Krish Shrestha, a BCS CSIT student at Academia International College, Nepal, with a strong interest in web development, cybersecurity, and emerging technologies. I enjoy building projects that solve practical problems, experimenting with new technologies, and continuously improving my development skills. My current focus is creating modern web applications while developing a stronger foundation in cybersecurity. I believe the best way to learn technology is by building, breaking, improving, and building again.I am passionate about learning and exploring different AI technologies, and I am always looking for opportunities to collaborate on exciting projects. I am eager to contribute my skills and enthusiasm to a team that values innovation, creativity, and continuous learning."
          className="text-[#B8C2CC] font-medium text-center leading-relaxed max-w-[560px] cursor-default select-none"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />
        <ContactButton />
      </div>
    </section>
  );
}
