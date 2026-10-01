import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block" aria-hidden="true">
      <span className="opacity-0">{char === " " ? "\u00A0" : char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({
  text,
  className,
  style,
  ariaLabel,
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  if (shouldReduceMotion) {
    return (
      <p className={className} style={style} aria-label={ariaLabel ?? text}>
        {text}
      </p>
    );
  }

  return (
    <p ref={ref} className={className} style={style} aria-label={ariaLabel ?? text}>
      <span aria-hidden="true">
        {chars.map((c, i) => {
          const start = i / chars.length;
          const end = start + 1 / chars.length;
          return (
            <Char key={i} char={c} progress={scrollYProgress} range={[start, end]} />
          );
        })}
      </span>
    </p>
  );
}
