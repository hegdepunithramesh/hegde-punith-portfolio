import { useState } from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Link from '../ui/Link';
import FadeIn from '../animation/FadeIn';
import ContactForm from './ContactForm';
import { personalInfo } from '../../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, MapPin, Sparkles, Send } from 'lucide-react';

/**
 * Contact Component — Phase 10
 * Final major visual section of the portfolio featuring editorial headline typography,
 * verified contact metadata, and the asynchronous ContactForm.
 */
export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" variant="subtle" spacing="lg" withNoise>
      <Container size="6xl">
        <SectionHeading
          eyebrow="07 / CONTACT"
          title="GET IN TOUCH"
          description="Open for software engineering opportunities, technical collaboration, and professional conversations."
          accentLine
        />

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial Headline & Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 font-sans leading-[1.05] uppercase">
                <span className="block text-zinc-100">LET'S BUILD</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200">
                  SOMETHING
                </span>
                <span className="block text-zinc-100">GREAT.</span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                "Have an opportunity, idea, collaboration, or just want to say hello?"
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <span className="text-xs font-mono text-amber-500 uppercase tracking-wider block">
                  Open To Engagement:
                </span>
                <ul className="space-y-1 text-xs font-mono text-zinc-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Software Engineering Roles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Technical & Full-Stack Collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Backend Platform Projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Professional Conversations</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Direct Contact Metadata List */}
            <FadeIn direction="up" delay={0.25}>
              <div className="space-y-4 pt-4 border-t border-zinc-900">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                  Direct Channels
                </span>

                {/* Email Box with Copy Action */}
                <div className="p-4 rounded-xl glass-panel border border-zinc-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] font-mono text-zinc-500 block uppercase">Email</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-amber-400 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors flex-shrink-0"
                    title="Copy Email Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Social Links Row */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl glass-panel border border-zinc-800/80 flex items-center gap-2.5 hover:border-zinc-700 transition-all text-xs font-mono text-zinc-300 hover:text-zinc-100"
                  >
                    <Github className="w-4 h-4 text-amber-500" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl glass-panel border border-zinc-800/80 flex items-center gap-2.5 hover:border-zinc-700 transition-all text-xs font-mono text-zinc-300 hover:text-zinc-100"
                  >
                    <Linkedin className="w-4 h-4 text-amber-500" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 pt-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Based in {personalInfo.location}</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Contact Form Component (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
