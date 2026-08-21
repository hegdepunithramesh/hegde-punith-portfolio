import React from 'react';

/**
 * Card Component
 * Premium editorial card wrapper featuring subtle borders, hover states, and glass effects
 */
export default function Card({
  children,
  variant = 'glass', // 'glass' | 'bordered' | 'subtle' | 'gradient'
  hoverEffect = true,
  className = '',
  as: Component = 'div',
  ...props
}) {
  const variantClasses = {
    glass: 'glass-panel bg-zinc-900/60 border border-zinc-800/80',
    bordered: 'bg-zinc-950 border border-zinc-900',
    subtle: 'bg-zinc-900/40 border border-zinc-900/60',
    gradient: 'border-gradient-subtle bg-zinc-950',
  };

  const hoverClass = hoverEffect
    ? 'transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1'
    : '';

  const selectedVariant = variantClasses[variant] || variantClasses.glass;

  return (
    <Component
      className={`rounded-xl p-6 sm:p-8 ${selectedVariant} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
