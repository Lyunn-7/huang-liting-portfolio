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
    title: "用户研究",
    desc: "420+ 真实客户接触沉淀画像，把模糊诉求拆成可定义、可验证的问题。",
  },
  {
    no: "02",
    title: "内容策划",
    desc: "把专业的金融概念翻译成小白语言，覆盖从创意、脚本到落地的内容生产。",
  },
  {
    no: "03",
    title: "AI 产品化",
    desc: "用 Codex / workbuddy / Coze / Trae 把运营 SOP 做成可运行的桌面软件。",
  },
  {
    no: "04",
    title: "数据复盘",
    desc: "以数据驱动迭代：老客户复购率约 85%，用复盘闭环持续优化路径。",
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
          不止做运营，
          <br />
          也把 <span className="font-serif italic">方法</span> 变成系统。
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
