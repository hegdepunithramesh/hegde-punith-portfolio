import React from 'react';

/**
 * Container Component
 * Central layout wrapper enforcing responsive padding and grid boundaries
 */
export default function Container({
  children,
  size = '6xl', // '7xl' | '6xl' | '5xl' | '4xl' | '3xl' | 'narrow' | 'full'
  className = '',
  cleanPadding = false,
  as: Component = 'div',
  ...props
}) {
  const sizeClasses = {
    '7xl': 'max-w-7xl',
    '6xl': 'max-w-6xl',
    '5xl': 'max-w-5xl',
    '4xl': 'max-w-4xl',
    '3xl': 'max-w-3xl',
    narrow: 'max-w-2xl',
    full: 'max-w-full',
  };

  const paddingClass = cleanPadding ? '' : 'px-4 sm:px-6 lg:px-8';
  const selectedSize = sizeClasses[size] || sizeClasses['6xl'];

  return (
    <Component
      className={`w-full mx-auto ${selectedSize} ${paddingClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
