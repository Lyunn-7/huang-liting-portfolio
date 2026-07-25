import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const skills = [
  "互联网金融",
  "用户研究",
  "策划",
  "电商运营",
  "团队管理",
  "GitHub",
  "财务",
  "文案",
  "架构设计",
  "数据分析",
];

const certs = ["理财规划师", "普通话二级甲等", "大学英语四级"];

export function Skills() {
  return (
    <section
      id="技能"
      className="border-t border-border/30 px-6 py-32 md:px-16 lg:px-28 md:py-44"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <motion.div {...fadeUp(0)}>
          <p className="text-xs uppercase tracking-[3px] text-muted-foreground">
            相关技能
          </p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-1px] text-foreground md:text-5xl">
            能 <span className="font-serif italic">落地</span> 的复合能力
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                {...fadeUp(0.15 + i * 0.05)}
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground/90"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.2)}>
          <p className="text-xs uppercase tracking-[3px] text-muted-foreground">
            荣誉证书
          </p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-1px] text-foreground md:text-5xl">
            持证背书
          </h2>
          <ul className="mt-8 space-y-4">
            {certs.map((c, i) => (
              <motion.li
                key={c}
                {...fadeUp(0.3 + i * 0.1)}
                className="flex items-center gap-4 border-b border-border/50 pb-4"
              >
                <span className="text-sm text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="text-lg text-foreground">{c}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
