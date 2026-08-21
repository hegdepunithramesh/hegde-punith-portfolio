import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import FadeIn from '../animation/FadeIn';
import {
  leadershipPositions,
  communityEventContributions,
  ieeeSacVolunteer,
} from '../../data/portfolioData';
import { Users, Calendar, Award, CheckCircle2, ShieldCheck, Flag } from 'lucide-react';

/**
 * Leadership Component — Phase 9
 * Editorial leadership timeline and community contribution section.
 * Consumes exact leadership positions, dates, and event coordination text from resume source of truth.
 */
export default function Leadership() {
  return (
    <Section id="leadership" variant="default" spacing="lg" withNoise>
      <Container size="6xl">
        <SectionHeading
          eyebrow="06 / LEADERSHIP & COMMUNITY"
          title="LEADERSHIP & COMMUNITY"
          description="Organizational leadership, section-level initiatives, and major technical event coordination."
          accentLine
        />

        {/* 1. Editorial Leadership Timeline Grid */}
        <div className="mb-16">
          <h3 className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-8 flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>ORGANIZATIONAL LEADERSHIP POSITIONS</span>
          </h3>

          <div className="space-y-4">
            {leadershipPositions.map((pos, idx) => (
              <FadeIn key={pos.id} direction="up" delay={0.07 * idx}>
                <div className="group p-5 rounded-xl glass-panel border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                        {pos.number}
                      </span>
                      <div>
                        <h4 className="text-lg font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                          {pos.role}
                        </h4>
                        <p className="text-xs font-mono text-zinc-400 mt-0.5">
                          {pos.organization}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start md:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                        {pos.period}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 2. Technical Event Organization & IEEE SAC Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-zinc-900">
          {/* Event Coordination Card */}
          <FadeIn direction="up" delay={0.2}>
            <Card variant="glass" className="h-full p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest mb-3">
                  <Flag className="w-4 h-4" />
                  <span>TECHNICAL EVENT ORGANIZATION</span>
                </div>

                <h4 className="text-xl font-bold text-zinc-100 mb-3">
                  {communityEventContributions.title}
                </h4>

                <div className="flex flex-wrap gap-2 mb-4">
                  {communityEventContributions.events.map((evt) => (
                    <Badge key={evt} variant="amber">
                      {evt}
                    </Badge>
                  ))}
                </div>

                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {communityEventContributions.description}
                </p>
              </div>
            </Card>
          </FadeIn>

          {/* IEEE SAC Volunteer Card */}
          <FadeIn direction="up" delay={0.3}>
            <Card variant="glass" className="h-full p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest mb-3">
                  <Award className="w-4 h-4" />
                  <span>SECTION-LEVEL INITIATIVES</span>
                </div>

                <h4 className="text-xl font-bold text-zinc-100 mb-1">
                  {ieeeSacVolunteer.title}
                </h4>
                <p className="text-xs font-mono text-zinc-500 mb-4">
                  {ieeeSacVolunteer.organization}
                </p>

                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {ieeeSacVolunteer.description}
                </p>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
