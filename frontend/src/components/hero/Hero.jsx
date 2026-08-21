import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronDown, Terminal, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { personalInfo } from '../../data/portfolioData';

/**
 * Hero Component — Phase 4 & Phase 13 Responsive Polish
 * Full-screen editorial hero featuring interactive background spotlight,
 * staggered typography entrance sequence, role metadata, and responsive mobile dynamic viewport (100dvh).
 */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle subtle interactive cursor spotlight (desktop only)
  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Smooth scroll helper
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Entrance animation sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 sm:pt-32 pb-10 bg-zinc-950 bg-noise bg-grid-pattern overflow-hidden select-none"
    >
      {/* Interactive Cursor Spotlight */}
      {!shouldReduceMotion && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-70 hidden md:block"
          style={{
            background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(217, 119, 6, 0.08), transparent 75%)`,
          }}
        />
      )}

      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-zinc-800/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <Container size="6xl" className="flex-grow flex flex-col justify-center my-auto z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Step 1: Status & Role Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap items-center gap-3">
            <Badge variant="amber" pulseDot>
              Software Engineer · Builder · Problem Solver
            </Badge>
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline-block">
              // UVCE Bengaluru
            </span>
          </motion.div>

          {/* Step 2: Primary Large Editorial Name Typography */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[92px] font-extrabold tracking-tight text-zinc-100 font-sans leading-[0.98] uppercase break-words">
              <span className="block text-zinc-400 font-light tracking-wider">HEGDE</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400">
                PUNITH RAMESH
              </span>
            </h1>
          </motion.div>

          {/* Step 3: Concise Professional Introduction */}
          <motion.div variants={itemVariants} className="mb-10 max-w-2xl">
            <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed">
              Full-stack software engineering student focused on building practical applications, robust backend platform systems, and solving complex technical problems with modular, maintainable code.
            </p>
          </motion.div>

          {/* Step 4: Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              magnetic
              magneticStrength={0.25}
              onClick={(e) => handleScrollTo(e, 'work')}
              rightIcon={ArrowRight}
              href="#work"
            >
              EXPLORE WORK
            </Button>

            <Button
              variant="glass"
              size="lg"
              onClick={(e) => handleScrollTo(e, 'contact')}
              rightIcon={ArrowUpRight}
              href="#contact"
            >
              LET'S CONNECT
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Step 5: Subtle Scroll Indicator */}
      <Container size="6xl" className="z-10 pt-8 border-t border-zinc-900/80">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-zinc-500 gap-4"
        >
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Open to Software Engineering & Backend Development roles</span>
            </span>
          </div>

          <a
            href="#work"
            onClick={(e) => handleScrollTo(e, 'work')}
            className="group inline-flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded"
          >
            <span className="uppercase tracking-widest text-[11px]">SCROLL TO EXPLORE</span>
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4 text-amber-500 group-hover:text-amber-400" />
            </motion.div>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
