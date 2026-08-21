import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Container from '../ui/Container';

const NAV_ITEMS = [
  { label: 'PROJECTS', href: '#work' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

/**
 * Navbar Component
 * Fixed header navigation supporting centered desktop menu pill, scroll state transformation,
 * active section indicators, keyboard accessibility, and mobile overlay menu.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Handle header scroll transformation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.substring(1));
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    setActiveSection(href);

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <Container size="6xl">
        <nav className="relative flex items-center justify-between" aria-label="Main Navigation">
          {/* Left Branding */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 font-mono font-bold text-xs group-hover:border-amber-500/40 transition-colors">
              HP
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-wider text-zinc-100 font-sans group-hover:text-amber-400 transition-colors uppercase">
                HEGDE PUNITH
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Centered Navigation Pill */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/60 glass-panel md:absolute md:left-1/2 md:-translate-x-1/2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                    isActive ? 'text-zinc-950 font-semibold' : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-amber-500 rounded-full -z-10 shadow-sm shadow-amber-500/20"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:border-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 ml-auto"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Animated Navigation Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 z-30 flex flex-col justify-between p-6 overflow-y-auto"
          >
            <div className="space-y-6 pt-4">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                Navigation Menu
              </div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } },
                  hidden: {},
                }}
                className="flex flex-col gap-4"
              >
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className={`flex items-center justify-between p-4 rounded-xl text-lg font-bold tracking-wider font-mono border transition-all ${
                        isActive
                          ? 'bg-amber-500/10 border-amber-500/40 text-amber-400'
                          : 'bg-zinc-900/40 border-zinc-800/80 text-zinc-300 hover:text-zinc-100 hover:border-zinc-700'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-5 h-5 text-zinc-500" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>

            <div className="pt-6 border-t border-zinc-900">
              <div className="text-xs font-mono text-zinc-500">
                Hegde Punith - Personal Portfolio
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
