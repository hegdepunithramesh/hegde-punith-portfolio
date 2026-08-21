import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import FadeIn from '../animation/FadeIn';
import { StaggerContainer, StaggerItem } from '../animation/Stagger';
import { personalInfo, education } from '../../data/portfolioData';
import {
  Compass,
  Server,
  RefreshCw,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';

/**
 * About Component — Concise Editorial & Storytelling Polish
 * Compact, authentic personal narrative reflecting Hegde Punith Ramesh's engineering mindset,
 * UVCE education, practical project experience, and IEEE leadership.
 */
export default function About() {
  const focusPillars = [
    {
      icon: Compass,
      title: 'BUILD WITH PURPOSE',
      description: '“Build software around real problems, not just features.”',
    },
    {
      icon: Server,
      title: 'UNDERSTAND THE SYSTEM',
      description: '“Go beyond the interface and understand how the pieces work together.”',
    },
    {
      icon: RefreshCw,
      title: 'KEEP IMPROVING',
      description: '“Learn through debugging, testing, refactoring, and iteration.”',
    },
    {
      icon: ShieldCheck,
      title: 'TAKE OWNERSHIP',
      description: '“Follow through, communicate clearly, and leave things better than I found them.”',
    },
  ];

  return (
    <Section id="about" variant="default" spacing="lg" withNoise>
      <Container size="6xl">
        <SectionHeading
          eyebrow="01 / IDENTITY"
          title="ABOUT"
          description="Software engineering student & developer dedicated to practical software, backend architecture, and problem solving."
          accentLine
        />

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Large Editorial Statement & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <FadeIn direction="up" delay={0.1}>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold italic tracking-tight text-zinc-100 font-sans leading-[1.28] border-l-2 border-amber-500 pl-6 py-2">
                “I enjoy turning ideas into working software, and every project is an opportunity to understand, improve, and build better.”
              </blockquote>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                <p>
                  I am <strong className="text-zinc-100 font-semibold">Hegde Punith Ramesh</strong>, a B.Tech Information Science and Engineering student at the <strong className="text-zinc-100 font-semibold">University Visvesvaraya College of Engineering (UVCE)</strong>. I enjoy building practical software and understanding what happens behind the interface - APIs, backend logic, databases, and application workflows.
                </p>

                <p>
                  I enjoy turning ideas into working software, focusing on clean structure, reliable data flow, validation, maintainability, testing, and debugging. I don't just want software to work - I want to understand how it works and continuously improve it.
                </p>

                <p>
                  Beyond writing code, my involvement in <strong className="text-zinc-100 font-medium">IEEE UVCE</strong> and serving as a <strong className="text-zinc-100 font-medium">TechX Ambassador 2026</strong> for IEEE Computer Society Region 10 has helped me develop strong skills in communication, teamwork, leadership, ownership, and technical collaboration.
                </p>

                {/* Closing Personal Signature */}
                <div className="pt-2">
                  <p className="text-xs font-mono text-amber-400 font-medium tracking-wider">
                    // “Still learning. Still building. Always looking for the next problem worth solving.”
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Core Engineering Domains Badges */}
            <FadeIn direction="up" delay={0.3}>
              <div className="pt-4 border-t border-zinc-900">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-3">
                  Core Engineering Domains
                </span>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="amber">Software Engineering</Badge>
                  <Badge variant="glass">Backend Development</Badge>
                  <Badge variant="glass">Full-Stack Development</Badge>
                  <Badge variant="glass">APIs & Databases</Badge>
                  <Badge variant="glass">Problem Solving</Badge>
                  <Badge variant="outline">Testing & Reliability</Badge>
                  <Badge variant="outline">System Design</Badge>
                  <Badge variant="outline">Technical Leadership</Badge>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Descriptive Metadata Cards & Education (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="up" delay={0.2}>
              <Card variant="glass" className="border-l-4 border-l-amber-500">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>EDUCATION & CAMPUS</span>
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-1">{education.institution}</h3>
                <p className="text-sm font-mono text-zinc-300 mb-2">{education.degree}</p>
                <p className="text-xs text-zinc-500 font-mono">// Status: {education.status}</p>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <Card variant="glass">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-4">
                  <Compass className="w-4 h-4" />
                  <span>DESCRIPTIVE OVERVIEW</span>
                </div>

                <div className="space-y-4 divide-y divide-zinc-900">
                  <div className="pt-2 first:pt-0">
                    <span className="text-xs font-mono text-zinc-500 block mb-0.5">Primary Role</span>
                    <span className="text-sm font-semibold text-zinc-200">Software Engineer / Developer</span>
                  </div>

                  <div className="pt-3">
                    <span className="text-xs font-mono text-zinc-500 block mb-0.5">Engineering Focus</span>
                    <span className="text-sm font-semibold text-zinc-200">Backend & Full-Stack Development</span>
                  </div>

                  <div className="pt-3">
                    <span className="text-xs font-mono text-zinc-500 block mb-0.5">What I Enjoy Building</span>
                    <span className="text-sm font-semibold text-zinc-200">Practical Software & Reliable Systems</span>
                  </div>

                  <div className="pt-3">
                    <span className="text-xs font-mono text-zinc-500 block mb-0.5">Community</span>
                    <span className="text-sm font-semibold text-zinc-200">IEEE UVCE · IEEE Computer Society Region 10</span>
                  </div>

                  <div className="pt-3">
                    <span className="text-xs font-mono text-zinc-500 block mb-0.5">Based In</span>
                    <span className="text-sm font-semibold text-zinc-200">Bengaluru, India</span>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>

        {/* Engineering Philosophy Grid */}
        <div className="pt-8 border-t border-zinc-900">
          <SectionHeading
            eyebrow="ENGINEERING PHILOSOPHY"
            title="Core Pillars of Work"
            description="How I approach software development, system design, and technical responsibilities."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={idx}>
                  <Card variant="glass" className="h-full flex flex-col justify-between p-6">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-500 mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-mono font-bold text-amber-400 mb-2 uppercase tracking-wider">{pillar.title}</h4>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  );
}
