import React from "react";

export type MarqueeProps = {
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  applyMask?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Marquee({
  children,
  vertical = false,
  repeat = 5,
  pauseOnHover = false,
  reverse = false,
  className = "",
  applyMask = true,
  ...rest
}: MarqueeProps) {

  const items = React.Children.toArray(children);

  return (
    <div
      {...rest}
      className={`group relative flex h-full w-full p-2 overflow-hidden
      [--duration:10s] [--gap:12px] [gap:var(--gap)]
      ${vertical ? "flex-col" : "flex-row"}
      ${className}`}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={index}
          className={`flex shrink-0 [gap:var(--gap)]
          ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}
          ${
            vertical
              ? reverse
                ? "animate-marquee-vertical-reverse flex-col"
                : "animate-marquee-vertical flex-col"
              : reverse
              ? "animate-marquee-horizontal-reverse flex-row"
              : "animate-marquee-horizontal flex-row"
          }`}
        >
          {items}
        </div>
      ))}

      {applyMask && (
        <div
          className={`pointer-events-none absolute inset-0 z-10 ${
            vertical
          }`}
        />
      )}
    </div>
  );
}
