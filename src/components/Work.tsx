import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const didList = [
  "账号操盘：小红书女装账号 0→1 内容运营，3 个月涨粉 1 万+",
  "内容策划：爆款选题挖掘、爆品筛选，输出「脚本—实景拍摄—后期剪辑—发布」全流程",
  "数据复盘：跟踪曝光、互动、转化核心数据，持续优化选题与发布策略",
  "转化承接：维护评论区与私信，参与粉丝社群促活与下单转化",
];

const results = [
  "3 个月涨粉 1 万+",
  "月销售额 150 万",
  "跑通「触达→互动→下单」",
  "沉淀内容 SOP",
];

const process = ["选爆品", "做内容", "测投放", "复盘迭代"];

const metrics = [
  { name: "笔记曝光", pct: 92 },
  { name: "互动（赞藏评）", pct: 68 },
  { name: "进店 / 转化", pct: 41 },
];

const humanSplit = ["选题策划", "脚本撰写", "实景拍摄", "数据复盘", "私信社群转化"];
const aiSplit = ["文案润色", "爆文拆解", "封面出图", "商品图精修"];

const secondary = [
  {
    name: "跨境品牌海外增长运营工作台",
    role: "多平台内容运营 · 2026.3 – 至今",
    desc: "在 mentor 指导下以 vibe coding 参与搭建覆盖海外 6 大社媒 + 国内 2 平台 + 独立站的「内容→合规→发布→复盘」闭环；负责内容日历字段设计与社媒数据看板，沉淀评论管理 SOP 与转化归因（UTM / ROAS）。",
    tags: ["多平台运营", "内容产品化", "AI 提效"],
  },
  {
    name: "农产品私域增长运营",
    role: "销售主管 · 2025.3 – 2026.2",
    desc: "为 20+ 家批发 / 社区团购 / 餐饮客户建立分层标签体系，策划朋友圈与社群营销内容，推动月均订单 100+ 单、老客户复购率约 85%、年度累计销售额约 180 万，沉淀 C 端「触达→激活→转化」链路。",
    tags: ["私域运营", "用户分层", "内容转化"],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-[2px] text-muted-foreground">
      {children}
    </div>
  );
}

export function Work() {
  return (
    <section
      id="作品"
      className="border-t border-border/30 px-6 py-32 md:px-16 lg:px-28 md:py-44"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          {...fadeUp(0)}
          className="text-xs uppercase tracking-[3px] text-muted-foreground"
        >
          作品 · Case Study
        </motion.p>
        <motion.h2
          {...fadeUp(0.1)}
          className="mt-4 max-w-3xl text-4xl font-medium tracking-[-1px] text-foreground md:text-5xl"
        >
          把账号，从 <span className="font-serif italic">0</span> 做到能带货
        </motion.h2>

        {/* Flagship case study */}
        <motion.article
          {...fadeUp(0.15)}
          className="liquid-glass mt-14 rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              Case Study 01
            </span>
            <span className="text-xs text-muted-foreground">旗舰项目</span>
          </div>
          <h3 className="mt-5 text-3xl font-medium tracking-[-1px] text-foreground md:text-4xl">
            小红书女装账号 0→1
            <span className="ml-3 align-middle font-serif text-lg italic text-muted-foreground">
              新媒体运营与产品运营
            </span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            项目周期 · 2026.3 – 至今
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            {/* Narrative */}
            <div className="space-y-8">
              <div>
                <SectionLabel>背景</SectionLabel>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  女装是小红书竞争最激烈的赛道之一，内容同质化严重。需要从零建立账号定位、内容体系与「内容
                  → 转化」链路，在没有投放预算的前提下靠内容自然起量。
                </p>
              </div>

              <div>
                <SectionLabel>我做了什么</SectionLabel>
                <ul className="mt-3 space-y-2.5">
                  {didList.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-foreground/70"
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionLabel>关键结果</SectionLabel>
                <div className="mt-3 flex flex-wrap gap-2">
                  {results.map((r) => (
                    <span
                      key={r}
                      className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Account dashboard mockup (CSS representation) */}
            <div>
              <SectionLabel>账号数据看板 · 示意</SectionLabel>
              <div className="mt-3 overflow-hidden rounded-2xl border border-border/60 bg-secondary/40">
                <div className="flex items-center gap-1.5 border-b border-border/50 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="ml-3 text-xs text-muted-foreground">
                    小红书女装账号 · 近 3 个月
                  </span>
                </div>
                <div className="space-y-5 p-6">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-lg border border-border/50 bg-background/40 px-2 py-3">
                      <div className="text-lg font-medium text-foreground">
                        1万+
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        涨粉
                      </div>
                    </div>
                    <div className="rounded-lg border border-border/50 bg-background/40 px-2 py-3">
                      <div className="text-lg font-medium text-foreground">
                        150万
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        月销售额
                      </div>
                    </div>
                    <div className="rounded-lg border border-border/50 bg-background/40 px-2 py-3">
                      <div className="text-lg font-medium text-foreground">
                        0→1
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        冷启动
                      </div>
                    </div>
                  </div>
                  {metrics.map((m) => (
                    <div key={m.name}>
                      <div className="flex items-baseline justify-between text-sm">
                        <span className="text-foreground/90">{m.name}</span>
                        <span className="text-muted-foreground">{m.pct}%</span>
                      </div>
                      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-foreground/80"
                          style={{ width: `${m.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="rounded-lg border border-border/50 bg-background/40 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                    转化链路：内容触达 → 用户互动 → 下单转化。
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process path */}
          <div className="mt-12">
            <SectionLabel>标准化工作逻辑</SectionLabel>
            <div className="mt-4 flex flex-wrap items-center gap-y-3">
              {process.map((p, i) => (
                <span key={p} className="flex items-center">
                  <span className="rounded-full border border-border px-4 py-2 text-sm text-foreground/90">
                    {p}
                  </span>
                  {i < process.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="mx-2 shrink-0 text-muted-foreground/60"
                    />
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Human × AI split */}
          <div className="mt-12 grid gap-8 border-t border-border/40 pt-10 md:grid-cols-2">
            <div>
              <SectionLabel>我负责</SectionLabel>
              <div className="mt-3 flex flex-wrap gap-2">
                {humanSplit.map((h) => (
                  <span
                    key={h}
                    className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel>AI 工具协作</SectionLabel>
              <div className="mt-3 flex flex-wrap gap-2">
                {aiSplit.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        {/* Secondary projects */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {secondary.map((p, i) => (
            <motion.div
              key={p.name}
              {...fadeUp(0.2 + i * 0.1)}
              className="liquid-glass flex h-full flex-col rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {p.name}
              </h3>
              <div className="mt-1 text-xs text-muted-foreground">{p.role}</div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
