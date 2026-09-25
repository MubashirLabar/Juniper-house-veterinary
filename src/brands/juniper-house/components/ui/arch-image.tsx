import Image from "next/image";
import { cn } from "@/lib/cn";
import { Settle } from "../motion/settle";

const grounds = {
  sand: "bg-sand",
  sage: "bg-sage",
  blush: "bg-blush",
  clay: "bg-clay-300",
  juniper: "bg-juniper-700",
} as const;

type ArchImageProps = {
  src: string;
  alt: string;
  /** Sizing and placement of the arch; it fills whatever box this creates. */
  className?: string;
  /** Color behind the photo while it loads. */
  ground?: keyof typeof grounds;
  /** `soft` for freestanding arches, `flush` when the arch sits on an edge. */
  base?: "soft" | "flush";
  /** CSS object-position, e.g. "center 30%". */
  position?: string;
  sizes: string;
  preload?: boolean;
  /** Ease the photo from a slight zoom when it scrolls into view. */
  settle?: boolean;
  /** Zoom gently when a parent `.group` is hovered. */
  zoomOnHover?: boolean;
};

/**
 * The arch — borrowed from the house's Mediterranean Revival doorways and
 * used for all photography.
 *
 * A fixed `999px` top radius would force the browser to scale every corner
 * down together (squashing the 6px base). Instead the wrapper is a size
 * container and the top corners are exactly half its width (`50cqw`), so the
 * arch stays a true semicircle at any size.
 */
export function ArchImage({
  src,
  alt,
  className,
  ground = "sand",
  base = "soft",
  position = "center",
  sizes,
  preload,
  settle = true,
  zoomOnHover,
}: ArchImageProps) {
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      preload={preload}
      className={cn(
        "object-cover",
        zoomOnHover && "transition-transform duration-700 ease-out group-hover:scale-[1.04]",
      )}
      style={{ objectPosition: position }}
    />
  );
  return (
    <div className={cn("@container", className)}>
      <div
        className={cn(
          "relative size-full overflow-hidden rounded-t-[50cqw]",
          base === "soft" ? "rounded-b-[6px]" : "rounded-b-none",
          grounds[ground],
        )}
      >
        {settle ? <Settle className="absolute inset-0">{image}</Settle> : image}
      </div>
    </div>
  );
}
