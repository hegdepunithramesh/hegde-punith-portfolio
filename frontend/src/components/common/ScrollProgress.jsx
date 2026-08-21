import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress Component
 * Subtle top hairline scroll progress indicator tracking page scroll position
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 z-50 transform-gpu origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
}
