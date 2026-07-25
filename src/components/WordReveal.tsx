import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

function Word({
  progress,
  range,
  highlight,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  highlight?: boolean;
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={highlight ? "text-foreground" : "text-hero-subtitle"}
    >
      {children}{" "}
    </motion.span>
  );
}

export function RevealParagraph({
  text,
  highlights = [],
  className,
}: {
  text: string;
  highlights?: string[];
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          highlight={highlights.includes(w)}
        >
          {w}
        </Word>
      ))}
    </p>
  );
}
