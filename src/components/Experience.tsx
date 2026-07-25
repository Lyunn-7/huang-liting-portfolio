import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type Item = {
  stage: string;
  period: string;
  org: string;
  role: string;
  points: string[];
  growth: string;
};

const items: Item[] = [
  {
    stage: "Stage 03 · 商业一线",
    period: "2025.3 — 2026.2",
    org: "徐闻县万顺种植专业合作社",
    role: "销售主管",
    points: [
      "带领 5 人销售团队，负责本地及周边地区产品渠道销售与订单管理",
      "管理客户 20+ 家（批发收购 / 社区团购 / 餐饮采购），老客户复购率约 85%",
      "月均订单 100+ 单，年度累计销售额约 180+ 万",
    ],
    growth: "理解客户与成交——知道真实的生意是怎么跑起来的。",
  },
  {
    stage: "Stage 02 · 金融一线",
    period: "2024.10 — 2025.1",
    org: "中国邮政储蓄银行",
    role: "客户部实习生",
    points: [
      "客户档案整理、台账更新与归档材料打码排序，累计整理资料 500+ 份",
      "系统观察不同客户类型（储蓄 / 定期 / 基金）的资料结构与产品选择差异",
      "沉淀进 FirstBucket 三桶模型需求",
    ],
    growth: "看懂不同客户的产品选择差异——沉淀出三桶模型的最初需求。",
  },
  {
    stage: "Stage 01 · 组织协作",
    period: "2021.10 — 2022.6",
    org: "广东理工学院",
    role: "副部长",
    points: [
      "带团队 8 人，负责部门年度文娱工作规划与落地执行",
      "联合策划 3 场校级大型活动：校园音乐节（1500+）、迎新舞蹈晚会（800+）、院级主题晚会（500+）",
      "组织内部培训 6 次，部门活动交付效率提升约 30%",
    ],
    growth: "带团队、做活动——学会把一件模糊的事落地做成。",
  },
];

export function Experience() {
  return (
    <section
      id="经历"
      className="border-t border-border/30 px-6 py-32 md:px-16 lg:px-28 md:py-44"
    >
      <div className="mx-auto max-w-3xl">
        <motion.p
          {...fadeUp(0)}
          className="text-xs uppercase tracking-[3px] text-muted-foreground"
        >
          经历
        </motion.p>
        <motion.h2
          {...fadeUp(0.1)}
          className="mt-4 text-4xl font-medium tracking-[-1px] text-foreground md:text-5xl"
        >
          从 <span className="font-serif italic">一线</span> 到产品，
          <br />
          是一条持续向上的成长曲线
        </motion.h2>

        <div className="mt-12 space-y-10 border-l border-border pl-6 md:pl-8">
          {items.map((it, i) => (
            <motion.div
              key={it.org}
              {...fadeUp(0.2 + i * 0.1)}
              className="relative"
            >
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-foreground/60 bg-background md:-left-[39px]" />
              <div className="text-xs uppercase tracking-[2px] text-muted-foreground">
                {it.stage}
              </div>
              <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {it.org}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {it.period}
                </span>
              </div>
              <div className="text-sm text-foreground/80">{it.role}</div>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                {it.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
              <p className="mt-3 border-l-2 border-foreground/30 pl-3 text-sm italic text-foreground/80">
                {it.growth}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.5)}
          className="mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground"
        >
          校园让我学会<span className="text-foreground">组织</span>，
          银行让我理解<span className="text-foreground">金融</span>，
          一线销售让我理解<span className="text-foreground">客户</span>
          ——而现在，我想把这些，做成被更多人用到的产品。
        </motion.p>
      </div>
    </section>
  );
}
