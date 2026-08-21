import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import FadeIn from '../animation/FadeIn';
import { StaggerContainer, StaggerItem } from '../animation/Stagger';
import { techStackCategorized } from '../../data/portfolioData';
import { Cpu, Terminal, Code2, Database, Cloud, Wrench, BookOpen } from 'lucide-react';

/**
 * TechStack Component — Phase 9
 * Editorial interactive technology section presenting technologies strictly from the resume categories.
 * No giant logo walls, no fake proficiency percentage bars.
 */
export default function TechStack() {
  const categoryIcons = {
    "PROGRAMMING LANGUAGES": Code2,
    "WEB DEVELOPMENT": Terminal,
    "DATABASES & BACKEND": Database,
    "DEVOPS & CLOUD": Cloud,
    "DEVELOPER TOOLS": Wrench,
    "COMPUTER SCIENCE FUNDAMENTALS": BookOpen,
  };

  return (
    <Section id="techstack" variant="default" spacing="lg" withNoise>
      <Container size="6xl">
        <SectionHeading
          eyebrow="04 / TECHNICAL CAPABILITIES"
          title="TECH STACK"
          description="Languages, frameworks, databases, developer tools, and core computer science fundamentals."
          accentLine
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStackCategorized.map((group, groupIdx) => {
            const Icon = categoryIcons[group.category] || Cpu;

            return (
              <FadeIn key={group.category} direction="up" delay={0.08 * groupIdx}>
                <Card variant="glass" className="h-full flex flex-col justify-between p-6">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest mb-6 border-b border-zinc-800 pb-3">
                      <Icon className="w-4 h-4 text-amber-500" />
                      <span>{group.category}</span>
                    </div>

                    {/* Numbered Editorial Item List */}
                    <ul className="space-y-3 font-mono">
                      {group.items.map((tech, itemIdx) => {
                        const itemNum = itemIdx < 9 ? `0${itemIdx + 1}` : `${itemIdx + 1}`;
                        return (
                          <li
                            key={tech}
                            className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-zinc-900/80 transition-all duration-200 border border-transparent hover:border-zinc-800/80 cursor-default"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-zinc-500 font-semibold group-hover/item:text-amber-500 transition-colors">
                                {itemNum}
                              </span>
                              <span className="text-sm font-semibold text-zinc-200 group-hover/item:text-zinc-100 transition-colors">
                                {tech}
                              </span>
                            </div>

                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-amber-500 transition-colors" />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
