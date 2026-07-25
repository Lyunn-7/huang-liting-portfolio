import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const steps = ["用户画像", "需求拆解", "内容落地", "数据复盘"];

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
            把专业的金融概念，
            <br />
            <span className="font-serif italic">翻译</span>
            成人话。
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-8 font-serif text-2xl font-normal italic leading-snug text-foreground/90 md:text-3xl"
          >
            把模糊的问题，变成清晰、能推演的路径。
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            互联网金融本科出身，理财规划师持证。真实接触 420+ 客户，主导 3
            款可运行桌面软件，把模糊的财富问题转译成看得懂、能推演的路径。日常使用
            Codex / workbuddy / Coze / Trae 等 AI 工具提效。
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-10">
            <div className="text-xs uppercase tracking-[2px] text-muted-foreground">
              方法论
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
                互联网金融 · 本科
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[2px] text-muted-foreground">
                持证
              </div>
              <div className="mt-1 space-y-1 text-sm text-foreground/90">
                <div>理财规划师</div>
                <div>普通话二级甲等</div>
                <div>大学英语四级</div>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[2px] text-muted-foreground">
                求职意向
              </div>
              <div className="mt-1 text-sm leading-relaxed text-foreground/90">
                产品运营 / 运营助理（社招）
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
