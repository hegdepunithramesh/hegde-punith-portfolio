import React from 'react';
import { Loader2 } from 'lucide-react';
import Magnetic from '../animation/Magnetic';
import { useCursor } from '../../utils/motion.jsx';

/**
 * Button Component — Phase 12 Refined
 * Reusable button & action link primitive with magnetic hover capabilities and custom cursor integration.
 */
export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass'
  size = 'md', // 'sm' | 'md' | 'lg'
  magnetic = false,
  magneticStrength = 0.2,
  isLoading = false,
  isDisabled = false,
  leftIcon: LeftIcon = null,
  rightIcon: RightIcon = null,
  href = null,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  const { setCursor, resetCursor } = useCursor();

  const variantClasses = {
    primary:
      'bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold shadow-lg shadow-amber-500/10 border border-amber-400/40',
    secondary:
      'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium border border-zinc-700/60',
    outline:
      'bg-transparent hover:bg-zinc-900/80 text-zinc-200 hover:text-zinc-100 border border-zinc-800 hover:border-zinc-700 font-medium',
    ghost:
      'bg-transparent hover:bg-zinc-900/60 text-zinc-300 hover:text-zinc-100 font-medium',
    glass:
      'glass-panel hover:bg-zinc-800/80 text-zinc-100 font-medium border border-zinc-800/80',
  };

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-4 py-2.5 rounded-lg gap-2',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5',
  };

  const baseClasses =
    'inline-flex items-center justify-center font-sans tracking-tight transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98]';

  const selectedVariant = variantClasses[variant] || variantClasses.primary;
  const selectedSize = sizeClasses[size] || sizeClasses.md;
  const combinedClasses = `${baseClasses} ${selectedVariant} ${selectedSize} ${className}`;

  const handleMouseEnter = () => {
    if (href && (href.startsWith('http') || href.startsWith('//'))) {
      setCursor('link', 'OPEN');
    } else {
      setCursor('button');
    }
  };

  const handleMouseLeave = () => {
    resetCursor();
  };

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        LeftIcon && <LeftIcon className="w-4 h-4 text-current transition-transform duration-200 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {!isLoading && RightIcon && (
        <RightIcon className="w-4 h-4 text-current transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  const renderButton = () => {
    if (href) {
      const isExternal = href.startsWith('http') || href.startsWith('//');
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={`group ${combinedClasses}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={isDisabled || isLoading}
        className={`group ${combinedClasses}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {content}
      </button>
    );
  };

  if (magnetic && !isDisabled) {
    return (
      <Magnetic maxDistance={14}>
        {renderButton()}
      </Magnetic>
    );
  }

  return renderButton();
}
