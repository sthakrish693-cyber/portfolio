import { useEffect, useRef, useState } from "react";

const IMAGES = ["CODE", "DEBUG", "HIKING", "SLEEP"];

const ROW1 = IMAGES.slice(0, 11);
const ROW2 = IMAGES.slice(11);

function Row({ images, direction }: { images: string[]; direction: "left" | "right" }) {
  const tripled = [...images, ...images, ...images];
  return (
    <div className="flex gap-3" style={{ willChange: "transform" }}>
      {tripled.map((src, i) => (
        <div
          key={i}
          className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-10 text-2xl font-bold tracking-[0.2em] text-white/70 shrink-0"
          style={{ width: 420, height: 180 }}
        >
          {src} •
        </div>
      ))}
    </div>
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const value = (window.scrollY - top + window.innerHeight) * 0.3;
      setOffset(value);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const x1 = offset - 200;
  const x2 = -(offset - 200);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3"
      style={{ background: "#151A1F", overflowX: "clip" }}
    >
      <div style={{ transform: `translateX(${x1}px)`, willChange: "transform" }}>
        <Row images={ROW1} direction="right" />
      </div>
      <div style={{ transform: `translateX(${x2}px)`, willChange: "transform" }}>
        <Row images={ROW2} direction="left" />
      </div>
    </section>
  );
}
