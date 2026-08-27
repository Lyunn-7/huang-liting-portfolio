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
    stage: "Stage 04 · 内容操盘手",
    period: "2026.3 — 至今",
    org: "小红书女装账号 · 跨境增长运营工作台",
    role: "新媒体运营与产品运营 / 多平台内容运营",
    points: [
      "小红书女装账号 0→1：3 个月涨粉 1 万+，内容驱动月销售额 150 万",
      "主导爆款选题、爆品筛选与「脚本—拍摄—剪辑—发布」全流程，跑通转化链路",
      "参与跨境多平台内容闭环，用 Coze / WorkBuddy / Codex 等 AI 工具提效约 40%",
    ],
    growth: "把过去的用户、内容、数据经验，拧成了「内容驱动增长」这一件事。",
  },
  {
    stage: "Stage 03 · 商业一线",
    period: "2025.3 — 2026.2",
    org: "徐闻县万顺种植专业合作社",
    role: "销售主管",
    points: [
      "20+ 家批发/社区团购/餐饮客户分层标签体系，老客户复购率约 85%",
      "主导朋友圈/社群营销内容，推动月均订单 100+ 单、年度累计销售额约 180 万",
      "基于订单与转化数据迭代内容策略，输出销售/售后/协作 SOP，带 5 人团队",
    ],
    growth: "学会私域运营与内容转化——知道用户为什么愿意下单。",
  },
  {
    stage: "Stage 02 · 金融一线",
    period: "2024.10 — 2025.1",
    org: "中国邮政储蓄银行",
    role: "实习生",
    points: [
      "累计整理客户档案 500+ 份，完成文书处理与材料录入，工作细致",
      "系统观察储蓄 / 定期 / 基金客户的资料结构与产品选择差异",
    ],
    growth: "沉淀用户分层与需求洞察的意识。",
  },
  {
    stage: "Stage 01 · 组织协作",
    period: "2021.10 — 2022.6",
    org: "广东理工学院 学生会",
    role: "副部长",
    points: [
      "带 8 人团队落地 3 场校级大型活动：音乐节（1500+）、迎新晚会（800+）、院级晚会（500+）",
      "负责活动预热与传播：海报、推文、社群多渠道触达，提升参与度",
      "组织内部培训 6 次，沉淀策划/宣传/场务 SOP，交付效率提升约 30%",
    ],
    growth: "第一次做「宣传运营」——海报、推文、社群，都是内容的雏形。",
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
          从 <span className="font-serif italic">宣传</span> 到内容，
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
          校园宣传让我第一次碰<span className="text-foreground">内容</span>，
          银行让我懂<span className="text-foreground">用户分层</span>，
          销售让我懂<span className="text-foreground">转化</span>
          ——而现在，我把它们都做成了「内容驱动增长」。
        </motion.p>
      </div>
    </section>
  );
}
