import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Magnetic Animation Component — Phase 12
 * Adds a subtle magnetic pull to high-value CTA elements on desktop pointer devices.
 */
export default function Magnetic({ children, maxDistance = 12, className = '' }) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);
  }, []);

  const handleMouseMove = (e) => {
    if (!isFinePointer || shouldReduceMotion || !ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Calculate restrained pull ratio
    const pullX = (middleX / (width / 2)) * maxDistance;
    const pullY = (middleY / (height / 2)) * maxDistance;

    setPosition({ x: pullX, y: pullY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (!isFinePointer || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20, mass: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
