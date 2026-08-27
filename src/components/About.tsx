import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const steps = ["选题", "脚本", "拍摄剪辑", "发布", "数据复盘"];

export function About() {
  return (
    <section id="关于" className="px-6 py-32 md:px-16 lg:px-28 md:py-44">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-5 md:gap-16">
        <div className="md:col-span-3">
          <motion.p
            {...fadeUp(0)}
            className="text-xs uppercase tracking-[3px] text-muted-foreground"
          >
            关于我
          </motion.p>

          <motion.h2
            {...fadeUp(0.1)}
            className="mt-4 text-4xl font-medium tracking-[-1px] text-foreground md:text-5xl"
          >
            把刷到的人，
            <br />
            变成 <span className="font-serif italic">下单</span> 的人。
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-8 font-serif text-2xl font-normal italic leading-snug text-foreground/90 md:text-3xl"
          >
            让每一条内容，都为转化负责。
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            互联网金融本科出身，却一头扎进内容运营。1 年内容 + 团队管理经验，操盘小红书女装账号
            0→1，3 个月涨粉 1 万+、月销售额 150 万。熟悉小红书 /
            抖音平台调性与内容节奏，日常用 Coze / WorkBuddy / Codex / Trae 等 AI
            工具提效，把内容生产与复盘做得更快。
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-10">
            <div className="text-xs uppercase tracking-[2px] text-muted-foreground">
              内容全链路
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-y-3">
              {steps.map((s, i) => (
                <span key={s} className="flex items-center">
                  <span className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground/90">
                    <span className="text-xs text-muted-foreground">
                      0{i + 1}
                    </span>
                    {s}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="mx-2 shrink-0 text-muted-foreground/60"
                    />
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.4)}
          className="liquid-glass h-fit rounded-2xl p-8 md:col-span-2"
        >
          <div className="space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[2px] text-muted-foreground">
                教育
              </div>
              <div className="mt-1 text-foreground">广东理工学院</div>
              <div className="text-sm text-muted-foreground">
                互联网金融 · 本科（2021–2025）
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[2px] text-muted-foreground">
                常用工具
              </div>
              <div className="mt-1 space-y-1 text-sm text-foreground/90">
                <div>剪映 · Canva · 美图设计室</div>
                <div>Coze · WorkBuddy · Codex · Trae</div>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[2px] text-muted-foreground">
                求职意向
              </div>
              <div className="mt-1 text-sm leading-relaxed text-foreground/90">
                新媒体运营 / 内容运营
                <br />
                社招 · 深圳 · 期望 7-9k
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
