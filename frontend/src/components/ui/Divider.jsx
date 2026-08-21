import React from 'react';

/**
 * Divider Component
 * Subtle hairline divider with optional gradient fade or label text
 */
export default function Divider({
  variant = 'subtle', // 'subtle' | 'gradient' | 'dashed' | 'labeled'
  label = null,
  className = '',
}) {
  if (label) {
    return (
      <div className={`relative flex items-center justify-center my-8 ${className}`}>
        <div className="flex-grow border-t border-zinc-900" />
        <span className="flex-shrink mx-4 text-xs font-mono text-zinc-500 uppercase tracking-widest bg-zinc-950 px-2">
          {label}
        </span>
        <div className="flex-grow border-t border-zinc-900" />
      </div>
    );
  }

  const variantClasses = {
    subtle: 'border-t border-zinc-900',
    gradient: 'h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent border-0',
    dashed: 'border-t border-dashed border-zinc-800',
  };

  const selectedVariant = variantClasses[variant] || variantClasses.subtle;

  return <hr className={`w-full my-8 ${selectedVariant} ${className}`} />;
}
