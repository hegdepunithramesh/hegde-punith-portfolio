import { motion, useReducedMotion } from 'framer-motion';

/**
 * StaggerContainer Component
 * Orchestrates staggered children animations
 */
export function StaggerContainer({
  children,
  staggerChildren = 0.08,
  delayChildren = 0.1,
  className = '',
  viewportOnce = true,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: '-50px' }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * StaggerItem Component
 * Individual item inside a StaggerContainer
 */
export function StaggerItem({
  children,
  className = '',
  distance = 20,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  const itemVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: distance },
    visible: shouldReduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          },
        },
  };

  return (
    <Component variants={itemVariants} className={className} {...props}>
      {children}
    </Component>
  );
}

export default {
  Container: StaggerContainer,
  Item: StaggerItem,
};
