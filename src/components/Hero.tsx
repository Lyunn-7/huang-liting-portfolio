import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const COVER_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4";

const stats = [
  { value: "1万+", label: "3 个月涨粉" },
  { value: "150万", label: "月销售额" },
  { value: "40%", label: "AI 内容提效" },
];

export function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover brightness-110"
      >
        <source src={COVER_VIDEO} type="video/mp4" />
      </video>

      {/* light scrim + ambient glow to lift the dark hero (monochrome) */}
      <div className="absolute inset-0 bg-white/[0.06]" />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 30%, rgba(255,255,255,0.10), rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6 pt-28 text-center md:pt-32">
        <motion.span
          {...fadeUp(0)}
          className="rounded-full border border-border/60 px-4 py-1.5 text-xs text-muted-foreground sm:text-sm"
        >
          新媒体运营 · 内容驱动增长
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="mt-6 text-6xl font-medium tracking-[-2px] text-foreground md:text-8xl"
        >
          黄莉婷
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-3 font-serif text-2xl font-normal italic text-foreground/90 md:text-3xl"
        >
          Turning content into growth.
        </motion.p>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          互联网金融本科，1 年内容运营 + 团队管理经验。小红书女装账号 0→1
          操盘手，熟悉小红书 / 抖音内容节奏，能独立完成「选题—脚本—拍摄—剪辑—发布—数据复盘」全链路。
        </motion.p>

        <motion.p
          {...fadeUp(0.35)}
          className="mt-4 text-xs uppercase tracking-[2px] text-muted-foreground"
        >
          意向城市 深圳 · Available for 新媒体运营 / 内容运营（社招 · 期望 7-9k）
        </motion.p>

        <motion.div
          {...fadeUp(0.45)}
          className="mt-8 flex flex-wrap items-center justify-center gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-medium text-foreground md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp(0.55)}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#作品"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            查看作品
            <ArrowRight size={16} />
          </a>
          <a
            href="mailto:1945807123@qq.com"
            className="liquid-glass inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-105"
          >
            <Mail size={16} />
            联系我
          </a>
        </motion.div>
      </div>
    </section>
  );
}
