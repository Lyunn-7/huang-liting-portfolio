export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 px-6 py-12 md:flex-row md:px-16 lg:px-28">
      <span className="text-sm text-muted-foreground">
        © 2026 黄莉婷. All rights reserved.
      </span>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#" className="transition-colors hover:text-foreground">
          隐私
        </a>
        <a href="#" className="transition-colors hover:text-foreground">
          条款
        </a>
        <a
          href="mailto:1945807123@qq.com"
          className="transition-colors hover:text-foreground"
        >
          联系
        </a>
      </div>
    </footer>
  );
}
