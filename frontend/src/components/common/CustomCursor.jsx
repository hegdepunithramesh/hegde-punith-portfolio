import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useCursor } from '../../utils/motion.jsx';

/**
 * CustomCursor Component — Phase 12
 * Desktop-only custom cursor with state transitions ('default', 'project', 'link', 'button').
 * Strictly disabled on touch devices and for prefers-reduced-motion users.
 */
export default function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const { cursorState, cursorText } = useCursor();
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth physics springs
  const springConfig = { stiffness: 450, damping: 28, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Capability check: Fine pointer device (desktop mouse/trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    if (mediaQuery.matches && !shouldReduceMotion) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, shouldReduceMotion]);

  if (!isFinePointer || shouldReduceMotion || !isVisible) {
    return null;
  }

  const isProject = cursorState === 'project';
  const isLink = cursorState === 'link';
  const isButton = cursorState === 'button';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      {/* Outer Cursor Ring / Capsule */}
      <motion.div
        animate={{
          width: isProject ? 90 : isLink ? 80 : isButton ? 44 : 28,
          height: isProject || isLink ? 36 : isButton ? 44 : 28,
          backgroundColor: isProject
            ? 'rgba(9, 9, 11, 0.95)'
            : isLink
            ? 'rgba(217, 119, 6, 0.9)'
            : 'rgba(217, 119, 6, 0.08)',
          borderColor: isProject
            ? 'rgba(217, 119, 6, 0.6)'
            : isLink
            ? 'rgba(251, 191, 36, 0.8)'
            : 'rgba(217, 119, 6, 0.3)',
          scale: 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="rounded-full border flex items-center justify-center backdrop-blur-md shadow-lg overflow-hidden px-3"
      >
        {isProject && (
          <span className="text-[11px] font-mono font-bold text-amber-400 tracking-wider whitespace-nowrap">
            {cursorText || 'VIEW →'}
          </span>
        )}

        {isLink && (
          <span className="text-[11px] font-mono font-bold text-zinc-950 tracking-wider whitespace-nowrap">
            {cursorText || 'OPEN'}
          </span>
        )}

        {!isProject && !isLink && (
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        )}
      </motion.div>
    </motion.div>
  );
}
