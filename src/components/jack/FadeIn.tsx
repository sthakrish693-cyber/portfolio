import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode, ElementType, CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}

export function FadeIn({
  children,
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const Comp = motion.create(as as any);

  return (
    <Comp
      initial={shouldReduceMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      whileInView={shouldReduceMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay: shouldReduceMotion ? 0 : delay, duration: shouldReduceMotion ? 0 : duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </Comp>
  );
}
