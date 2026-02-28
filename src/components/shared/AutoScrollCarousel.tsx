import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";

interface AutoScrollCarouselProps {
  children: ReactNode;
  /**
   * Duration in seconds (smaller = faster).
   * Medium default = 30
   */
  speed?: number;
}

const AutoScrollCarousel = ({ children, speed = 30 }: AutoScrollCarouselProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [ready, setReady] = useState(false);
  const rowRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(() => React.Children.toArray(children), [children]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  // ✅ duration in seconds (clamped)
  const duration = Math.min(Math.max(speed, 55), 120);

  // ✅ Start after layout settles (reduces jerk)
  useEffect(() => {
    if (prefersReducedMotion) return;

    let raf1 = 0;
    let raf2 = 0;

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setReady(true));
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [prefersReducedMotion, items.length]);

  // ✅ Smooth animation start without forcing restart to avoid flicker
  useEffect(() => {
    if (!ready || prefersReducedMotion) return;
    const el = rowRef.current;
    if (!el) return;

    // Ensure animation duration is applied
    el.style.setProperty("--scroll-duration", `${duration}s`);
  }, [ready, prefersReducedMotion, duration]);

  if (prefersReducedMotion) {
    return (
      <div className="overflow-hidden px-2 sm:px-4">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          {items.map((child, i) => (
            <div key={i} className="flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden px-2 sm:px-4">
      <div
        ref={rowRef}
        className={[
          "flex w-max gap-3 sm:gap-6 hover:[animation-play-state:paused]",
          ready ? "animate-scroll" : "",
        ].join(" ")}
        style={{ "--scroll-duration": `${duration}s` } as React.CSSProperties}
      >
        {items.map((child, i) => (
          <div key={`a-${i}`} className="flex-shrink-0">
            {child}
          </div>
        ))}
        {items.map((child, i) => (
          <div key={`b-${i}`} className="flex-shrink-0" aria-hidden="true">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollCarousel;