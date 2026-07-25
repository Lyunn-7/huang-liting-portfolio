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

      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-3 text-sm md:flex">
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
    </nav>
  );
}
