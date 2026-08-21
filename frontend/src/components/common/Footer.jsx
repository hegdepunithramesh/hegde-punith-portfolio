import Container from '../ui/Container';
import Button from '../ui/Button';
import Link from '../ui/Link';
import Badge from '../ui/Badge';
import { personalInfo } from '../../data/portfolioData';
import { ArrowUp, Github, Linkedin, Twitter, Mail, CheckCircle2 } from 'lucide-react';

/**
 * Footer Component
 * Editorial global footer foundation featuring branding, social channels,
 * back-to-top action, and system copyright.
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <Container size="6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          {/* Col 1: Branding & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 font-mono font-bold text-xs">
                HP
              </div>
              <span className="font-bold text-lg tracking-wider text-zinc-100 font-sans uppercase">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-sm text-zinc-400 font-light max-w-md leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Badge variant="amber" pulseDot>
                Open for Opportunities
              </Badge>
              <span className="text-xs font-mono text-zinc-500">{personalInfo.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">
              Navigation
            </span>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <a href="#work" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  // WORK
                </a>
              </li>
              <li>
                <a href="#experience" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  // EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#about" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  // ABOUT
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  // CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Action */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">
              Connect
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href={personalInfo.github} icon="external">
                GitHub
              </Link>
              <Link href={personalInfo.linkedin} icon="external">
                LinkedIn
              </Link>
              <Link href={`mailto:${personalInfo.email}`} icon="arrow">
                Direct Email
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-zinc-500 gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>© {new Date().getFullYear()} Hegde Punith Ramesh. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block">Bengaluru, India</span>
            <Button
              variant="outline"
              size="sm"
              magnetic
              onClick={scrollToTop}
              rightIcon={ArrowUp}
            >
              Top
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
