import { motion, useReducedMotion } from 'framer-motion';

/**
 * AnimatedText Component
 * Words/Letters staggered reveal for editorial typography
 */
export default function AnimatedText({
  text,
  el: Tag = 'h2',
  className = '',
  once = true,
  mode = 'words', // 'words' | 'chars'
  delay = 0,
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[Tag] || motion.h2;

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const items = mode === 'words' ? text.split(' ') : text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: mode === 'words' ? 0.08 : 0.03,
        delayChildren: delay,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <Component
      className={`inline-block overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-[0.25em] whitespace-nowrap"
        >
          {item}
        </motion.span>
      ))}
    </Component>
  );
}
