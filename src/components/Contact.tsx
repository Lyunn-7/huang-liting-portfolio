import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { fadeUp } from "@/lib/motion";

const COVER_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4";

export function Contact() {
  return (
    <section
      id="联系"
      className="relative overflow-hidden border-t border-border/30 px-6 py-32 md:px-16 lg:px-28 md:py-44"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src={COVER_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1] bg-background/70" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div {...fadeUp(0)} className="mb-6">
          <Logo outer="w-10 h-10" inner="w-5 h-5" />
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-serif text-5xl font-medium italic tracking-[-1px] text-foreground md:text-6xl lg:text-7xl"
        >
          Let's build.
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-4 max-w-md text-muted-foreground"
        >
          求职意向：产品运营 / 运营助理（社招）。期待一起把想法做出来。
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="mailto:1945807123@qq.com"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            <Mail size={16} />
            1945807123@qq.com
          </a>
          <a
            href="tel:18028436043"
            className="liquid-glass inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-medium text-foreground transition-transform hover:scale-105"
          >
            <Phone size={16} />
            18028436043
          </a>
        </motion.div>
      </div>
    </section>
  );
}
