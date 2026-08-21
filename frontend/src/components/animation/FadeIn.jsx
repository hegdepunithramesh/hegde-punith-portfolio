import { motion, useReducedMotion } from 'framer-motion';

/**
 * Enhanced FadeIn Component
 * Supports directional slide, scale, fade, and customizable easing respecting prefers-reduced-motion
 */
export default function FadeIn({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none' | 'scale'
  delay = 0,
  duration = 0.6,
  distance = 24,
  className = '',
  viewportOnce = true,
  viewportMargin = '-40px',
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  const getInitialState = () => {
    if (shouldReduceMotion) return { opacity: 0 };

    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'scale':
        return { opacity: 0, scale: 0.95 };
      case 'none':
      default:
        return { opacity: 0 };
    }
  };

  const getAnimateState = () => {
    if (shouldReduceMotion) return { opacity: 1 };

    switch (direction) {
      case 'scale':
        return { opacity: 1, scale: 1 };
      default:
        return { opacity: 1, x: 0, y: 0 };
    }
  };

  return (
    <Component
      initial={getInitialState()}
      whileInView={getAnimateState()}
      viewport={{ once: viewportOnce, margin: viewportMargin }}
      transition={{
        duration: shouldReduceMotion ? 0.15 : duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom refined cubic-bezier
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
