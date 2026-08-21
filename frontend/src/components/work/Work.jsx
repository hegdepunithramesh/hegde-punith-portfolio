import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import Button from '../ui/Button';
import FadeIn from '../animation/FadeIn';
import { projects } from '../../data/portfolioData';
import ProjectPreview from './ProjectPreview';
import { navigate } from '../../utils/router';
import { ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Code2, Terminal } from 'lucide-react';

/**
 * Work / Projects Component — Phase 7, 8 & Consistency Polish
 * Premium editorial project showcase displaying technical projects with unified visual hierarchy and case study routing.
 */
export default function Work() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="work" variant="default" spacing="lg" withNoise>
      <Container size="6xl">
        <SectionHeading
          eyebrow="03 / PROJECTS"
          title="PROJECTS"
          description="Full-stack web applications and backend systems engineered for performance and real-world utility."
          accentLine
        />

        {/* Projects Stack Container */}
        <div className="space-y-24 sm:space-y-36">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isFeatured = Boolean(project.featured);

            return (
              <div
                key={project.id}
                className="group relative border-b border-zinc-900 pb-20 sm:pb-28 last:border-0 last:pb-0"
              >
                {/* Unified Ambient Background Glow for All Projects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/[0.02] group-hover:bg-amber-500/5 blur-[160px] rounded-full pointer-events-none -z-10 transition-colors duration-500" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left/Content Column (6 cols for normal, 6 cols for preview) */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <FadeIn direction="up" delay={0.1}>
                      {/* Top Metadata Row: Number & Category */}
                      <div className="flex items-center justify-between">
                        <span className="text-4xl sm:text-5xl font-extrabold font-mono text-amber-500/80 tracking-tighter">
                          {project.number}
                        </span>

                        <Badge
                          variant="amber"
                          pulseDot={isFeatured}
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.15}>
                      {/* Title & Tagline */}
                      <div>
                        <h3
                          onClick={() => navigate(`/work/${project.slug}`)}
                          className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 font-sans group-hover:text-amber-400 transition-colors duration-300 cursor-pointer"
                        >
                          {project.title}
                        </h3>
                        {project.tagline && (
                          <p className="text-xs font-mono text-amber-500/90 mt-1 uppercase tracking-widest">
                            // {project.tagline}
                          </p>
                        )}
                      </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                      {/* Description */}
                      <p className="text-base text-zinc-300 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </FadeIn>

                    {/* Exact Engineering / Usage Metrics */}
                    {project.exactMetrics && (
                      <FadeIn direction="up" delay={0.25}>
                        <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-zinc-900/90 border border-amber-500/25">
                          {project.exactMetrics.map((metric, mIdx) => (
                            <div key={mIdx} className="text-center">
                              <span className="text-xs font-mono text-zinc-500 block">{metric.label}</span>
                              <span className="text-xs font-mono font-bold text-amber-400">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </FadeIn>
                    )}

                    {/* Key Features List */}
                    <FadeIn direction="up" delay={0.3}>
                      <div className="space-y-2">
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                          Key Features & Functionality:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.keyFeatures.slice(0, 6).map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>

                    {/* Engineering Highlights */}
                    <FadeIn direction="up" delay={0.35}>
                      <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
                        <span className="text-xs font-mono text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5" />
                          <span>Engineering Highlights</span>
                        </span>
                        <ul className="space-y-1.5">
                          {project.engineeringHighlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="text-xs font-mono text-zinc-400 flex items-start gap-2">
                              <span className="text-amber-500 font-bold">›</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>

                    {/* Technology Stack Tags */}
                    <FadeIn direction="up" delay={0.4}>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </FadeIn>

                    {/* Action Links (Case Study & Live Demo) */}
                    <FadeIn direction="up" delay={0.45}>
                      <div className="pt-2 flex flex-wrap items-center gap-4">
                        <Button
                          variant="primary"
                          size="md"
                          magnetic
                          onClick={() => navigate(`/work/${project.slug}`)}
                          rightIcon={ArrowRight}
                        >
                          CASE STUDY
                        </Button>

                        {project.liveDemo && (
                          <Button
                            variant="outline"
                            size="md"
                            href={project.liveDemo}
                            rightIcon={ExternalLink}
                          >
                            LIVE APP
                          </Button>
                        )}
                      </div>
                    </FadeIn>
                  </div>

                  {/* Right/Preview Column (6 cols) */}
                  <div
                    className={`lg:col-span-6 cursor-pointer ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                    onClick={() => navigate(`/work/${project.slug}`)}
                  >
                    <FadeIn direction={isEven ? 'left' : 'right'} delay={0.2}>
                      <div className="relative group-hover:scale-[1.01] transition-transform duration-300">
                        <ProjectPreview projectId={project.id} isFeatured={project.featured} />
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
