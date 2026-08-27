import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type Pillar = {
  no: string;
  title: string;
  desc: string;
};

const pillars: Pillar[] = [
  {
    no: "01",
    title: "内容策划",
    desc: "爆款选题挖掘、爆品筛选与内容定位，输出「脚本—拍摄—剪辑—发布」全流程内容。",
  },
  {
    no: "02",
    title: "账号操盘",
    desc: "小红书女装账号 0→1 冷启动，3 个月涨粉 1 万+，驱动月销售额 150 万。",
  },
  {
    no: "03",
    title: "数据复盘",
    desc: "跟踪曝光、互动、转化等核心数据，持续优化选题、发布节奏与投放策略。",
  },
  {
    no: "04",
    title: "AI 提效",
    desc: "用 Coze / WorkBuddy / Codex 辅助文案、脚本与出图，单条内容产出时长压缩约 40%。",
  },
];

export function Capabilities() {
  return (
    <section
      id="能力"
      className="border-t border-border/30 px-6 py-32 md:px-16 lg:px-28 md:py-44"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          {...fadeUp(0)}
          className="text-xs uppercase tracking-[3px] text-muted-foreground"
        >
          能力
        </motion.p>
        <motion.h2
          {...fadeUp(0.1)}
          className="mt-4 max-w-3xl text-4xl font-medium tracking-[-1px] text-foreground md:text-5xl"
        >
          不止做内容，
          <br />
          也把内容做成 <span className="font-serif italic">增长</span>。
        </motion.h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.no}
              {...fadeUp(0.15 + i * 0.08)}
              className="liquid-glass flex h-full flex-col rounded-2xl p-6"
            >
              <div className="text-sm text-muted-foreground">{p.no}</div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
