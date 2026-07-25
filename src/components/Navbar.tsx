import { Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

const links = ["能力", "成果", "关于", "作品", "经历", "联系"];

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-16 lg:px-28">
      <div className="flex items-center gap-2">
        <Logo />
        <span className="text-base font-bold tracking-tight text-foreground">
          黄莉婷
        </span>
      </div>

      <div className="hidden items-center gap-3 text-sm md:flex">
        {links.map((l, i) => (
          <span key={l} className="flex items-center gap-3">
            <a
              href={`#${l}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
            {i < links.length - 1 && (
              <span className="text-muted-foreground/40">•</span>
            )}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2">
        {[Mail, Github, Linkedin].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </nav>
  );
}
