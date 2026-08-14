"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

export function LaptopScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lidRotate = useTransform(scrollYProgress, [0.08, 0.65], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.65, 1], [0.88, 1, 0.96]);
  const glowOpacity = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);

  if (reducedMotion) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-6 pb-4 pt-10">
        <LaptopFrame rotate={0} glow={1} />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[150vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden bg-white px-6">
        <motion.div style={{ scale }} className="w-full max-w-md">
          <LaptopFrame rotate={lidRotate} glow={glowOpacity} />
        </motion.div>
      </div>
    </div>
  );
}

function LaptopFrame({
  rotate,
  glow,
}: {
  rotate: number | MotionValue<number>;
  glow: number | MotionValue<number>;
}) {
  return (
    <div style={{ perspective: 1400 }} className="mx-auto w-full">
      {/* screen / lid — pivots open from the back edge of the base */}
      <motion.div
        style={{ rotateX: rotate, transformOrigin: "bottom center" }}
        className="relative mx-auto aspect-[16/10] w-full rounded-t-2xl border-[10px] border-b-0 border-gray-900 bg-gray-950 shadow-2xl"
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-sm bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
          <motion.div
            style={{ opacity: glow }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-400/40 via-transparent to-transparent"
          />
          <span className="relative text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Excelerate
          </span>
        </div>
        {/* camera notch */}
        <div className="absolute left-1/2 top-1.5 h-1 w-1 -translate-x-1/2 rounded-full bg-gray-700" />
      </motion.div>

      {/* base / keyboard deck */}
      <div className="relative mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-xl bg-gradient-to-b from-gray-300 to-gray-400 shadow-md" />
      <div className="mx-auto h-1.5 w-[86%] rounded-b-2xl bg-gray-300/80" />
    </div>
  );
}
