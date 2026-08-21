import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import Button from '../ui/Button';
import FadeIn from '../animation/FadeIn';
import { experiences } from '../../data/portfolioData';
import { Building2, Calendar, CheckCircle2, Terminal, ArrowUpRight, Sparkles, ExternalLink, Download, Users } from 'lucide-react';

/**
 * Experience Component — Phase 6 & Kaashvi Updates
 * Premium vertical editorial timeline detailing professional internships and engineering roles.
 * Consumes structured experience data strictly based on resume source of truth.
 */
export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="experience" variant="subtle" spacing="lg" withNoise>
      <Container size="6xl">
        <SectionHeading
          eyebrow="02 / EXPERIENCE"
          title="EXPERIENCE"
          description="Enterprise platform internship and core technical engineering contributions."
          accentLine
        />

        {/* Timeline Wrapper Container */}
        <div className="relative pt-4 pb-8">
          {/* Vertical Timeline Spine Line (Desktop & Mobile) */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/40 via-zinc-800 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16 sm:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isSAP = exp.id === 'sap-labs-india';

              return (
                <div
                  key={exp.id}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Timeline Node Center Marker */}
                  <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                        isSAP
                          ? 'w-6 h-6 bg-zinc-950 border-2 border-amber-500 group-hover:scale-125 shadow-lg shadow-amber-500/20'
                          : 'w-5 h-5 bg-zinc-950 border-2 border-amber-500/60 group-hover:border-amber-400 group-hover:scale-110'
                      }`}
                    >
                      {isSAP && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-50" />
                      )}
                      <div
                        className={`rounded-full ${
                          isSAP ? 'w-2.5 h-2.5 bg-amber-500' : 'w-2 h-2 bg-amber-500/80'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Two-Column Editorial Layout (Desktop) */}
                  <div
                    className={`w-full grid grid-cols-1 md:grid-cols-12 gap-8 pl-12 sm:pl-20 md:pl-0`}
                  >
                    {/* Date / Period Column */}
                    <div
                      className={`md:col-span-4 flex flex-col justify-start ${
                        isEven
                          ? 'md:text-right md:pr-12 md:order-1'
                          : 'md:text-left md:pl-12 md:order-2'
                      }`}
                    >
                      <FadeIn direction={isEven ? 'right' : 'left'} delay={0.1}>
                        <div className="sticky top-28 pt-1">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-amber-400 mb-2">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{exp.periodLabel}</span>
                          </div>

                          <div className="text-xs font-mono text-zinc-400 mt-1 leading-relaxed">
                            {exp.duration}
                          </div>

                          {isSAP && (
                            <div className="mt-3 hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-400">
                              <Sparkles className="w-3 h-3 text-amber-500" />
                              <span>Recent Enterprise Role</span>
                            </div>
                          )}
                        </div>
                      </FadeIn>
                    </div>

                    {/* Main Experience Editorial Card Column */}
                    <div
                      className={`md:col-span-8 ${
                        isEven ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12'
                      }`}
                    >
                      <FadeIn direction={isEven ? 'left' : 'right'} delay={0.2}>
                        <Card
                          variant={isSAP ? 'gradient' : 'glass'}
                          hoverEffect
                          className={`relative transition-all duration-300 ${
                            isSAP
                              ? 'border-amber-500/30 bg-zinc-900/80 shadow-xl shadow-black/50'
                              : 'border-zinc-800 bg-zinc-900/60'
                          }`}
                        >
                          {/* Card Top Header */}
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-4 border-b border-zinc-800/80 pb-4">
                            <div>
                              <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest mb-1">
                                <Building2 className="w-3.5 h-3.5" />
                                <span>{exp.badgeText}</span>
                              </div>
                              <h3
                                className={`font-bold tracking-tight text-zinc-100 font-sans transition-colors duration-200 group-hover:text-amber-300 ${
                                  isSAP ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                                }`}
                              >
                                {exp.organization}
                              </h3>
                              <p className="text-sm font-mono text-zinc-300 font-medium mt-1">
                                {exp.role}
                              </p>
                            </div>

                            <span className="md:hidden text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                              {exp.periodLabel}
                            </span>
                          </div>

                          {/* Role Description */}
                          <p className="text-sm text-zinc-300 font-light leading-relaxed mb-4">
                            {exp.description}
                          </p>

                          {/* Exact Metrics Highlights (e.g. Kaashvi Tutorials Downloads & Users) */}
                          {exp.exactMetrics && (
                            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-zinc-900/90 border border-amber-500/25 mb-6">
                              {exp.exactMetrics.map((metric, mIdx) => (
                                <div key={mIdx} className="text-center">
                                  <span className="text-[11px] font-mono text-zinc-500 block">{metric.label}</span>
                                  <span className="text-xs font-mono font-bold text-amber-400">{metric.value}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Key Contributions List */}
                          <div className="mb-6 space-y-3">
                            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                              Key Contributions & Engineering Impact:
                            </span>

                            <ul className="space-y-2.5">
                              {exp.contributions.map((contribution, cIdx) => (
                                <li key={cIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-normal">
                                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500" />
                                  <span>{contribution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Live App Action Button if Available */}
                          {exp.appLink && (
                            <div className="mb-6 pt-2">
                              <Button
                                variant="outline"
                                size="sm"
                                href={exp.appLink}
                                rightIcon={ExternalLink}
                              >
                                PLAY STORE APP
                              </Button>
                            </div>
                          )}

                          {/* Technologies Tags — Warm Amber Accent Badges Across All Roles */}
                          <div className="pt-4 border-t border-zinc-800/80">
                            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                              Technologies & Skill Areas:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="amber"
                                  size="sm"
                                  className="transition-colors group-hover:border-amber-500/40"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </FadeIn>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
