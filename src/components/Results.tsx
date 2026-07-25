import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/motion";

function CountUp({
  to,
  suffix = "",
  prefix = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

const stats = [
  { to: 420, suffix: "+", label: "真实接触客户" },
  { to: 180, suffix: "万+", label: "年度累计销售额" },
  { to: 85, suffix: "%", label: "老客户复购率" },
  { to: 500, suffix: "+", label: "银行资料整理归档" },
];

export function Results() {
  return (
    <section
      id="成果"
      className="border-t border-border/30 px-6 py-32 md:px-16 lg:px-28 md:py-44"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          {...fadeUp(0)}
          className="text-xs uppercase tracking-[3px] text-muted-foreground"
        >
          Key Results
        </motion.p>
        <motion.h2
          {...fadeUp(0.1)}
          className="mt-4 text-4xl font-medium tracking-[-1px] text-foreground md:text-5xl"
        >
          数据驱动的 <span className="font-serif italic">成果</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(0.15 + i * 0.08)}
              className="border-l border-border/50 pl-6"
            >
              <div className="text-5xl font-medium tracking-[-1px] text-foreground md:text-6xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
