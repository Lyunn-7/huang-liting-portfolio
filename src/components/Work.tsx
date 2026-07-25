import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const didList = [
  "定义 6 类用户画像，覆盖不同收入层级与风险偏好",
  "把 12 条主流财富法则转译为小白看得懂的语言",
  "设计「三桶模型」信息架构与 What-if 推演路径",
  "用 AI 工具协作完成界面搭建与逻辑实现",
];

const results = ["6 类用户画像", "12 条法则转译", "3 桶分桶模型", "What-if 推演"];

const process = ["用户画像", "需求拆解", "三桶建模", "内容转译", "数据复盘"];

const buckets = [
  { name: "日常开销", pct: 50, note: "随取随用" },
  { name: "应急储备", pct: 30, note: "3–6 个月" },
  { name: "长期增值", pct: 20, note: "复利滚存" },
];

const humanSplit = [
  "产品定义",
  "用户研究",
  "信息架构",
  "内容策划",
  "规则设计",
  "验收迭代",
];
const aiSplit = ["代码实现", "界面生成", "调试修复", "重构优化"];

const secondary = [
  {
    name: "多市场行情观察",
    role: "产品定位 · 散户 / 入门用户",
    desc: "面向 A股 / 港股 / 美股 / ETF / 期货的多市场桌面观察工具，把复杂行情简化为「打开电脑看一眼就知道今天怎么样」。",
    tags: ["信息架构", "降认知负担", "一句话哲学"],
  },
  {
    name: "跨境增长运营工作台",
    role: "产品定位 · DTC / 跨境品牌",
    desc: "覆盖海外 6 大社媒 + 国内 2 大平台 + 独立站，把散落 8 个平台的运营流程整合进一个中枢，支撑运营闭环。",
    tags: ["运营 SOP", "增长闭环", "数据看板"],
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
          把想法，做成能 <span className="font-serif italic">跑起来</span> 的产品
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
            个人财富分桶规划
            <span className="ml-3 align-middle font-serif text-lg italic text-muted-foreground">
              FirstBucket
            </span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            产品定位 · 0–3 年上班族的财富入门路径规划
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            {/* Narrative */}
            <div className="space-y-8">
              <div>
                <SectionLabel>背景</SectionLabel>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  0–3
                  年上班族，薪资到账后最常问的是「到底该分几份、怎么分」。市面理财内容太专业，小白看不懂、更不敢用——我把它转译成一套看得懂、能推演、能反复用的路径。
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

            {/* Product mockup (CSS representation) */}
            <div>
              <SectionLabel>产品界面 · 三桶模型</SectionLabel>
              <div className="mt-3 overflow-hidden rounded-2xl border border-border/60 bg-secondary/40">
                <div className="flex items-center gap-1.5 border-b border-border/50 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="ml-3 text-xs text-muted-foreground">
                    FirstBucket · 桌面端
                  </span>
                </div>
                <div className="space-y-5 p-6">
                  <div className="text-sm text-foreground/90">
                    月薪到账后，这样分：
                  </div>
                  {buckets.map((b) => (
                    <div key={b.name}>
                      <div className="flex items-baseline justify-between text-sm">
                        <span className="text-foreground/90">{b.name}</span>
                        <span className="text-muted-foreground">
                          {b.pct}% · {b.note}
                        </span>
                      </div>
                      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-foreground/80"
                          style={{ width: `${b.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="rounded-lg border border-border/50 bg-background/40 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                    What-if 推演：若每月多存 500 元，3 年后长期增值桶约多出
                    1.9 万。
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process path */}
          <div className="mt-12">
            <SectionLabel>流程路径</SectionLabel>
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
