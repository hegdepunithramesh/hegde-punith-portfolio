import React from 'react';

/**
 * Section Component
 * Top-level section primitive supporting vertical rhythm and visual background variants
 */
export default function Section({
  children,
  id,
  variant = 'default', // 'default' | 'subtle' | 'bordered' | 'glass' | 'grid'
  spacing = 'lg', // 'none' | 'sm' | 'md' | 'lg' | 'xl'
  withNoise = false,
  className = '',
  ...props
}) {
  const variantClasses = {
    default: 'bg-zinc-950',
    subtle: 'bg-zinc-900/40',
    bordered: 'bg-zinc-950 border-y border-zinc-900',
    glass: 'glass-panel border-y border-zinc-800/60',
    grid: 'bg-zinc-950 bg-grid-pattern',
  };

  const spacingClasses = {
    none: 'py-0',
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-24',
    lg: 'py-20 sm:py-32',
    xl: 'py-28 sm:py-40',
  };

  const selectedVariant = variantClasses[variant] || variantClasses.default;
  const selectedSpacing = spacingClasses[spacing] || spacingClasses.lg;
  const noiseClass = withNoise ? 'bg-noise' : '';

  return (
    <section
      id={id}
      className={`relative w-full ${selectedVariant} ${selectedSpacing} ${noiseClass} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
