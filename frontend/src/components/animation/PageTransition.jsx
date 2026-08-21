import { motion, useReducedMotion } from 'framer-motion';

/**
 * PageTransition Component — Phase 12
 * Fast, fluid route transition wrapper for client-side route navigation.
 */
export default function PageTransition({ children, routeKey }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={routeKey}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
