import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

/**
 * Link Component
 * Editorial text link with animated underline hover state and arrow icons
 */
export default function Link({
  children,
  href = '#',
  icon = 'none', // 'none' | 'arrow' | 'external'
  className = '',
  ...props
}) {
  const isExternal = href.startsWith('http') || href.startsWith('//');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`group editorial-link text-zinc-300 hover:text-zinc-100 font-medium transition-colors text-sm ${className}`}
      {...props}
    >
      <span>{children}</span>

      {icon === 'external' && (
        <ArrowUpRight className="w-4 h-4 ml-1 text-zinc-400 group-hover:text-amber-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}

      {icon === 'arrow' && (
        <ArrowRight className="w-4 h-4 ml-1 text-zinc-400 group-hover:text-amber-500 transition-all duration-200 group-hover:translate-x-1" />
      )}
    </a>
  );
}
