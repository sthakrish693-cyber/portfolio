import { FadeIn } from "./FadeIn";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#151A1F] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-[#151A1F] px-6 py-12 shadow-[0_0_60px_rgba(255,255,255,0.03)] sm:rounded-[50px] sm:px-8 sm:py-16 md:rounded-[60px] md:px-12 md:py-20">
        <FadeIn y={40}>
          <h2
            className="hero-heading mb-16 font-black uppercase leading-none tracking-tight text-center text-white sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            What I&apos;m working toward
          </h2>
        </FadeIn>

        <div className="mx-auto max-w-3xl">
          <FadeIn delay={0.1} y={20}>
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <p className="text-base leading-relaxed text-[#D7E2EA] sm:text-xl">
                I&apos;m building toward a SOC analyst or application security role. Right now I&apos;m focused on web application security, log analysis and detection, and security automation with Python.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                I also build small websites and graphics for local clients.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}