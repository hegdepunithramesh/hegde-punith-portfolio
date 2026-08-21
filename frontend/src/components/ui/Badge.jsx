import React from 'react';

/**
 * Badge Component
 * Reusable metadata pill primitive for tags, tech stack badges, and status indicators
 */
export default function Badge({
  children,
  variant = 'default', // 'default' | 'accent' | 'outline' | 'glass' | 'emerald' | 'amber'
  size = 'md', // 'sm' | 'md'
  pulseDot = false,
  className = '',
  icon: Icon = null,
}) {
  const variantClasses = {
    default: 'bg-zinc-900 text-zinc-300 border border-zinc-800',
    accent: 'bg-amber-500/10 text-amber-400 border border-amber-500/25',
    outline: 'bg-transparent text-zinc-400 border border-zinc-800',
    glass: 'glass-panel text-zinc-200 border border-zinc-800/80',
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25',
    amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/25',
  };

  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5 rounded-full font-mono gap-1.5',
    md: 'text-xs px-3 py-1 rounded-full font-mono gap-2',
  };

  const selectedVariant = variantClasses[variant] || variantClasses.default;
  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <span
      className={`inline-flex items-center tracking-tight transition-colors ${selectedVariant} ${selectedSize} ${className}`}
    >
      {pulseDot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
        </span>
      )}
      {Icon && <Icon className="w-3.5 h-3.5 text-current opacity-80" />}
      <span>{children}</span>
    </span>
  );
}
