import { FadeIn } from "./FadeIn";
import { SecurityWorkCard, type SecurityWorkEntry } from "./SecurityWorkCard";

const securityWork: SecurityWorkEntry[] = [];

export function SecurityWorkSection() {
  return (
    <section
      id="security-work"
      className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      style={{ background: "#151A1F" }}
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn y={40} className="mb-10 text-center sm:mb-14">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Security work
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20} className="mb-10 text-center">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#D7E2EA] opacity-80 sm:text-lg">
            Write-ups from my labs and projects, with what I tested, what I found and how I&apos;d fix it.
          </p>
        </FadeIn>

        {securityWork.length === 0 ? (
          <FadeIn delay={0.2} y={16}>
            <div className="rounded-[30px] border border-dashed border-white/20 bg-white/[0.02] p-8 text-center text-base text-[#D7E2EA] opacity-80 sm:text-lg">
              No entries yet. I&apos;ll add lab notes and audit write-ups here as I complete more security work.
            </div>
          </FadeIn>
        ) : (
          <div className="grid gap-6">
            {securityWork.map((entry) => (
              <SecurityWorkCard key={entry.title} {...entry} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
