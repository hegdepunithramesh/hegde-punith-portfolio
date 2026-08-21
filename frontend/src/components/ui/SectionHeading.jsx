import React from 'react';
import FadeIn from '../animation/FadeIn';

/**
 * SectionHeading Component
 * Editorial typography header featuring eyebrow tag, title, and optional description
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left', // 'left' | 'center'
  accentLine = false,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <FadeIn direction="up" delay={0.05}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-mono text-xs tracking-wider uppercase mb-4 ${isCenter ? 'justify-center' : ''}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>{eyebrow}</span>
          </div>
        </FadeIn>
      )}

      {title && (
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 font-sans leading-[1.15]">
            {title}
          </h2>
        </FadeIn>
      )}

      {accentLine && (
        <FadeIn direction="up" delay={0.15}>
          <div className={`h-0.5 w-12 bg-amber-500/60 my-4 rounded-full ${isCenter ? 'mx-auto' : ''}`} />
        </FadeIn>
      )}

      {description && (
        <FadeIn direction="up" delay={0.2}>
          <p className="text-base sm:text-lg text-zinc-400 font-light mt-4 leading-relaxed">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
