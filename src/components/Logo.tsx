import { cn } from "@/lib/utils";

export function Logo({
  outer = "w-7 h-7",
  inner = "w-3 h-3",
  ring = "border-foreground/60",
}: {
  outer?: string;
  inner?: string;
  ring?: string;
}) {
  return (
    <span className="relative inline-flex items-center justify-center">
      <span className={cn("rounded-full border-2", ring, outer)} />
      <span
        className={cn("absolute rounded-full border", ring, inner)}
      />
    </span>
  );
}
