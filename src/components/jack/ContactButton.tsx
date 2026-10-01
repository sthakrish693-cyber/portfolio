export function ContactButton({
  href = "#contact",
  label = "Contact me",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      className="
        inline-flex items-center justify-center
        rounded-full
        px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base
        font-semibold uppercase tracking-[0.25em]
        text-white
        transition-all duration-300
        hover:scale-105 hover:-translate-y-1
        active:scale-95
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151A1F]
      "
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: `
          0 0 20px rgba(66, 214, 197, 0.35),
          0 0 40px rgba(101, 184, 255, 0.20),
          inset 0 1px 1px rgba(255,255,255,0.12)
        `,
      }}
    >
      {label}
    </a>
  );
}