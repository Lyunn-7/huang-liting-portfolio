import math
from PIL import Image, ImageDraw, ImageFont

OUT = "/Users/macbookair/WorkBuddy/2026-07-25-14-46-02/mindloop-landing/src/assets"

GRAY_BG = (38, 38, 38, 255)
GRAY_FG = (150, 150, 150, 255)
WHITE = (235, 235, 235, 255)


def rounded_avatar(path, initials):
    s = 120
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    cx = cy = s // 2
    # base disc
    d.ellipse([cx - 58, cy - 58, cx + 58, cy + 58], fill=GRAY_BG)
    # shoulders
    d.ellipse([cx - 34, cy + 4, cx + 34, cy + 70], fill=GRAY_FG)
    # head
    d.ellipse([cx - 22, cy - 30, cx + 22, cy + 14], fill=GRAY_FG)
    img.save(path, "PNG")


def platform_icon(path, kind):
    s = 200
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    cx = cy = s // 2
    if kind == "chatgpt":
        # stylized bloom / node mark: center + 6 orbiting circles
        d.ellipse([cx - 26, cy - 26, cx + 26, cy + 26], fill=WHITE)
        for i in range(6):
            a = math.radians(i * 60)
            ox = cx + 52 * math.cos(a)
            oy = cy + 52 * math.sin(a)
            d.ellipse([ox - 16, oy - 16, ox + 16, oy + 16], fill=WHITE)
    elif kind == "perplexity":
        # sphere: outer ring + inner filled + highlight arc
        d.ellipse([cx - 60, cy - 60, cx + 60, cy + 60], outline=WHITE, width=10)
        d.ellipse([cx - 34, cy - 34, cx + 34, cy + 34], fill=WHITE)
        d.ellipse([cx - 60, cy - 60, cx + 60, cy + 60], outline=(0, 0, 0, 0), width=0)
        d.pieslice([cx - 60, cy - 60, cx + 60, cy + 60], 200, 250, fill=(0, 0, 0, 90))
    elif kind == "google":
        try:
            f = ImageFont.truetype("DejaVuSans-Bold.ttf", 150)
        except Exception:
            f = ImageFont.load_default()
        d.text((cx, cy), "G", font=f, fill=WHITE, anchor="mm")
    img.save(path, "PNG")


rounded_avatar(f"{OUT}/avatar-1.png", "A")
rounded_avatar(f"{OUT}/avatar-2.png", "B")
rounded_avatar(f"{OUT}/avatar-3.png", "C")
platform_icon(f"{OUT}/icon-chatgpt.png", "chatgpt")
platform_icon(f"{OUT}/icon-perplexity.png", "perplexity")
platform_icon(f"{OUT}/icon-google.png", "google")
print("assets generated")
