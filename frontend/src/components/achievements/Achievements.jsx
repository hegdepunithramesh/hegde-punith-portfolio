import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import FadeIn from '../animation/FadeIn';
import { StaggerContainer, StaggerItem } from '../animation/Stagger';
import {
  academicAchievements,
  competitiveAchievements,
  ambassadorAchievements,
} from '../../data/portfolioData';
import { Award, GraduationCap, TrendingUp, Sparkles, Trophy } from 'lucide-react';

/**
 * Achievements Component — Phase 9
 * Editorial achievements section using large typography for verified metrics and exact resume source data.
 */
export default function Achievements() {
  return (
    <Section id="achievements" variant="subtle" spacing="lg" withNoise>
      <Container size="6xl">
        <SectionHeading
          eyebrow="05 / ACADEMIC & COMPETITIVE"
          title="ACHIEVEMENTS"
          description="Academic records, competitive rankings, and student ambassador recognitions."
          accentLine
        />

        {/* 1. Academic Achievements Grid */}
        <div className="mb-16">
          <h3 className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-6 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIC PERFORMANCE</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicAchievements.map((item, idx) => (
              <FadeIn key={item.id} direction="up" delay={0.08 * idx}>
                <Card variant="glass" className="h-full p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                      {item.type}
                    </span>
                    <h4 className="text-4xl sm:text-5xl font-extrabold font-mono text-amber-400 tracking-tight mb-3">
                      {item.stat}
                    </h4>
                    <p className="text-sm font-bold text-zinc-100 mb-1">{item.title}</p>
                  </div>
                  <p className="text-xs font-mono text-zinc-400 border-t border-zinc-900 pt-3 mt-4">
                    {item.institution}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 2. Competitive & Student Ambassador Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Competitive Achievement Card */}
          {competitiveAchievements.map((comp) => (
            <FadeIn key={comp.id} direction="up" delay={0.2}>
              <Card variant="glass" className="h-full p-8 border-l-4 border-l-amber-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
                    <Trophy className="w-4 h-4" />
                    <span>COMPETITIVE TECHNICAL EVENT</span>
                  </div>
                  <Badge variant="amber">{comp.stat}</Badge>
                </div>

                <h4 className="text-3xl font-extrabold font-mono text-amber-400 tracking-tight mb-2">
                  {comp.stat} — {comp.title}
                </h4>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {comp.description}
                </p>
              </Card>
            </FadeIn>
          ))}

          {/* Student Ambassador Card */}
          {ambassadorAchievements.map((amb) => (
            <FadeIn key={amb.id} direction="up" delay={0.3}>
              <Card variant="glass" className="h-full p-8 border-l-4 border-l-amber-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
                    <Sparkles className="w-4 h-4" />
                    <span>STUDENT AMBASSADOR</span>
                  </div>
                  <Badge variant="glass">IEEE Region 10</Badge>
                </div>

                <h4 className="text-xl font-bold text-zinc-100 mb-1">{amb.title}</h4>
                <p className="text-xs font-mono text-amber-400 mb-3">{amb.role}</p>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {amb.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
