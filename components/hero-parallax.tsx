'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <div ref={ref} className="w-full h-screen overflow-hidden absolute inset-0">
      <motion.div
        className="absolute inset-0 w-full h-full bg-[url('/Hero-Background.png')] bg-cover bg-center"
        style={{ y: backgroundY }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
    </div>
  );
}
