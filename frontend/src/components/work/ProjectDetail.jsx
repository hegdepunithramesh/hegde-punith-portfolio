import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Divider from '../ui/Divider';
import FadeIn from '../animation/FadeIn';
import ProjectPreview from './ProjectPreview';
import { projects } from '../../data/portfolioData';
import { navigate } from '../../utils/router';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Terminal,
  Layers,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Database,
  Sparkles,
  QrCode,
  FileCheck,
  CreditCard,
  BarChart3,
  Mail,
  Bot,
  TestTube2,
  Workflow,
  Lock,
  Server,
  Cloud,
  Wallet,
  Receipt,
  PiggyBank,
  HandCoins,
  LineChart,
  UserCheck,
  FolderTree,
  BookOpen,
  Code2,
  FileCode,
  GitBranch,
  Lightbulb,
  Compass,
  Calendar,
  History,
  Globe2,
  Filter,
  Eye,
  Smartphone,
  Users,
  Award,
  CheckSquare,
  FileSpreadsheet,
} from 'lucide-react';

/**
 * ProjectDetail Component — EventPilot, Student Expense Tracker, Personal Blog, ChronoSphere & Dynamic Case Study Engine
 * Cinematic, factual case-study page for individual projects (/work/:slug).
 * Adheres strictly to verified source of truth without inventing links, metrics, or technologies.
 */
export default function ProjectDetail({ slug }) {
  const shouldReduceMotion = useReducedMotion();

  // Find project by slug
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  // Dynamic document title update
  useEffect(() => {
    if (project) {
      document.title = `${project.title} Case Study — Hegde Punith Ramesh`;
    } else {
      document.title = `Project Not Found — Hegde Punith Ramesh`;
    }
  }, [project]);

  // Invalid Project Handling
  if (!project) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center p-6 bg-noise">
        <Container size="narrow" className="text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mx-auto">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold font-sans">Project Not Found</h1>
          <p className="text-sm text-zinc-400 font-light">
            The requested project route <code className="text-amber-400 font-mono">/work/{slug}</code> does not exist.
          </p>
          <Button
            variant="primary"
            magnetic
            leftIcon={ArrowLeft}
            onClick={() => navigate('/')}
          >
            BACK TO PORTFOLIO
          </Button>
        </Container>
      </main>
    );
  }

  // Dynamic prev / next projects looping
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const isEventPilot = project.id === 'eventpilot';
  const isExpenseTracker = project.id === 'student-expense-tracker';
  const isBlog = project.id === 'personal-blog-website';
  const isChrono = project.id === 'chronosphere';

  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100 bg-noise pt-24 sm:pt-32 pb-20 select-none">
      {/* Background Ambient Glows */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-zinc-800/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Top Back Navigation Bar */}
      <Container size="6xl" className="mb-8">
        <button
          onClick={() => navigate('/')}
          className="group inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>BACK TO PORTFOLIO</span>
        </button>
      </Container>

      {/* 01 — HERO */}
      <Section variant="default" spacing="none" className="mb-12">
        <Container size="6xl">
          <FadeIn direction="up" delay={0.05}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-5xl font-extrabold font-mono text-amber-500/80 tracking-tighter">
                {project.number}
              </span>
              <Badge variant="amber" pulseDot={project.featured}>
                {project.category}
              </Badge>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 font-sans leading-[1.08] mb-4">
              {project.title}
            </h1>
          </FadeIn>

          {project.tagline && (
            <FadeIn direction="up" delay={0.15}>
              <p className="text-xs sm:text-sm font-mono text-amber-500 uppercase tracking-widest mb-6">
                // {project.tagline}
              </p>
            </FadeIn>
          )}

          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Visual Project Canvas Preview */}
      <Section variant="default" spacing="none" className="mb-12">
        <Container size="6xl">
          <FadeIn direction="up" delay={0.25}>
            <ProjectPreview projectId={project.id} isFeatured={project.featured} />
          </FadeIn>
        </Container>
      </Section>

      {/* Sticky Project Meta & Live Action Bar */}
      <Section variant="subtle" spacing="sm" className="mb-16 border-y border-zinc-800/80">
        <Container size="6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-500 uppercase mr-2">Core Stack:</span>
              {(project.caseStudyTechnologies || project.technologies).map((tech) => (
                <Badge key={tech} variant="outline" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {project.liveDemo && (
                <Button
                  variant="primary"
                  size="md"
                  magnetic
                  href={project.liveDemo}
                  rightIcon={ExternalLink}
                >
                  LIVE DEMO
                </Button>
              )}

              {project.github && (
                <Button
                  variant="outline"
                  size="md"
                  href={project.github}
                  leftIcon={Github}
                >
                  VIEW SOURCE
                </Button>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Factual Case Study Sections */}
      <Container size="6xl" className="space-y-16">
        {/* 02 — THE PROBLEM */}
        {(project.problem || project.idea || project.whyBuilt) && (
          <div className="space-y-4">
            <FadeIn direction="up">
              <h2 className="text-xl font-bold text-zinc-100 font-sans tracking-tight flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                02 / {isChrono ? 'THE IDEA (HISTORICAL TIMELINE EXPLORATION)' : isBlog ? 'WHY I BUILT IT (LEARNING OBJECTIVES)' : 'THE PROBLEM'}
              </h2>
            </FadeIn>

            <Card variant="glass" className="p-6 border-l-4 border-l-amber-500/80">
              <p className="text-base text-zinc-300 font-light leading-relaxed">
                {project.problem || project.idea || project.whyBuilt}
              </p>
            </Card>
          </div>
        )}

        {/* 03 — THE SOLUTION & PIPELINE FLOW */}
        <div className="space-y-4">
          <FadeIn direction="up">
            <h2 className="text-xl font-bold text-zinc-100 font-sans tracking-tight flex items-center gap-2">
              <Workflow className="w-5 h-5 text-amber-500" />
              03 / THE SOLUTION & PIPELINE FLOW
            </h2>
          </FadeIn>

          <Card variant="glass" className="p-6 space-y-4">
            <p className="text-base text-zinc-300 font-light leading-relaxed">
              {project.solution || project.overview}
            </p>

            {isEventPilot && (
              <div className="pt-2">
                <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-3">
                  Integrated Event Lifecycle Pipeline
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs font-mono">
                  {['Registration', 'Team Mgmt', 'Participation', 'Attendance', 'Certificates', 'Communication', 'Analytics'].map((step, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
                      <span className="text-amber-500 font-bold block text-[10px]">0{idx + 1}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {isChrono && (
              <div className="pt-2">
                <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-3">
                  Historical Timeline Request Pipeline
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 text-center text-xs font-mono">
                  {['User', 'Select Date', 'Modal Guard', 'GET /timeline', 'Express Route', 'Muffin API', 'Filter Year', 'EJS Render', 'Timeline'].map((step, idx) => (
                    <div key={idx} className="p-2 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
                      <span className="text-amber-500 font-bold block text-[10px]">0{idx + 1}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {isBlog && (
              <div className="pt-2">
                <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-3">
                  Traditional Server-Side Request/Response Lifecycle
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 text-center text-xs font-mono">
                  {['User', 'Browser', 'HTTP Req', 'Express Route', 'App Logic', 'data.json', 'EJS View', 'HTML Res', 'Browser'].map((step, idx) => (
                    <div key={idx} className="p-2 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
                      <span className="text-amber-500 font-bold block text-[10px]">0{idx + 1}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {isExpenseTracker && (
              <div className="pt-2">
                <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-3">
                  Interconnected Financial Workflow
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-xs font-mono">
                  {['User', 'Wallet', 'Transactions', 'Categories', 'Budgets', 'Savings', 'Debts', 'Analytics'].map((step, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
                      <span className="text-amber-500 font-bold block text-[10px]">0{idx + 1}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* 04 — SYSTEM ARCHITECTURE / EVENT MANAGEMENT */}
        {project.architectureNodes && (
          <div className="space-y-6">
            <FadeIn direction="up">
              <h2 className="text-xl font-bold text-zinc-100 font-sans tracking-tight flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-500" />
                04 / {isEventPilot ? 'EVENT MANAGEMENT & SYSTEM ARCHITECTURE' : isChrono || isBlog ? 'TECH STACK & ARCHITECTURE' : 'SYSTEM ARCHITECTURE'}
              </h2>
              <p className="text-xs font-mono text-zinc-500">
                Layered architectural breakdown based strictly on verified implementation data.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.architectureNodes.map((node, nIdx) => (
                <FadeIn key={nIdx} direction="up" delay={0.08 * nIdx}>
                  <Card variant="glass" className="h-full p-5 border-l-2 border-l-amber-500">
                    <span className="text-[11px] font-mono text-amber-500 uppercase tracking-widest block mb-2">
                      Layer 0{nIdx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-zinc-200 mb-3">{node.layer}</h3>
                    <ul className="space-y-1.5">
                      {node.items.map((item, iIdx) => (
                        <li key={iIdx} className="text-xs font-mono text-zinc-400 flex items-start gap-1.5">
                          <span className="text-amber-500">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {/* 05 — DYNAMIC FORM BUILDER (EventPilot) */}
        {project.formBuilderFeatures && (
          <div className="space-y-6">
            <FadeIn direction="up">
              <h2 className="text-xl font-bold text-zinc-100 font-sans tracking-tight flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-amber-500" />
                05 / DYNAMIC FORM BUILDER (14+ FIELD TYPES)
              </h2>
              <p className="text-xs font-mono text-zinc-500">
                Configurable registration forms with dynamic validation, rules, and CSV import/export capabilities.
              </p>
            </FadeIn>

            <Card variant="glass" className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {project.formBuilderFeatures.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* 06 — ATTENDANCE SCANNER FLOW (EventPilot) */}
        {project.attendanceFeatures && (
          <div className="space-y-6">
            <FadeIn direction="up">
              <h2 className="text-xl font-bold text-zinc-100 font-sans tracking-tight flex items-center gap-2">
                <QrCode className="w-5 h-5 text-amber-500" />
                06 / QR-BASED ATTENDANCE SCANNING SYSTEM
              </h2>
            </FadeIn>

            <Card variant="glass" className="p-6 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-mono mb-2">
                {['Registration', 'Participant', 'QR Code', 'Camera Scan', 'Attendance'].map((st, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-zinc-950 border border-zinc-800 text-amber-400 font-semibold">
                    <span className="text-zinc-500 text-[10px] block">Step 0{idx + 1}</span>
                    {st}
                  </div>
                ))}
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-300 pt-2">
                {project.attendanceFeatures.map((item, idx) => (
                  <li key={idx} className="p-3 rounded bg-zinc-950 border border-zinc-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {/* 07 — VERIFIABLE DIGITAL CERTIFICATES (EventPilot) */}
        {project.certificateFeatures && (
          <div className="space-y-6">
            <FadeIn direction="up">
              <h2 className="text-xl font-bold text-zinc-100 font-sans tracking-tight flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                07 / VERIFIABLE DIGITAL CERTIFICATES & RECOGNITION
              </h2>
            </FadeIn>

            <Card variant="glass" className="p-6 space-y-4 border-l-4 border-l-amber-500">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono mb-2">
                {['Event Participation', 'Attendance / Eligibility', 'Certificate Issue', 'Public Recognition'].map((st, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-300 font-semibold">
                    <span className="text-amber-500 text-[10px] block">Stage 0{idx + 1}</span>
                    {st}
                  </div>
                ))}
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-300 pt-2">
                {project.certificateFeatures.map((item, idx) => (
                  <li key={idx} className="p-3 rounded bg-zinc-950 border border-zinc-800 flex items-center gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {/* 08 & 09 — COMMUNICATION & ANALYTICS DATA (EventPilot) */}
        {(project.communicationFeatures || project.analyticsFeatures) && isEventPilot && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {project.communicationFeatures && (
              <Card variant="glass" className="p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
                  <Mail className="w-4 h-4" />
                  <span>08 / Communication Engine</span>
                </div>
                <ul className="space-y-2 text-xs font-mono text-zinc-400">
                  {project.communicationFeatures.map((item, idx) => (
                    <li key={idx}>› {item}</li>
                  ))}
                </ul>
              </Card>
            )}

            {project.analyticsFeatures && (
              <Card variant="glass" className="p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
                  <BarChart3 className="w-4 h-4" />
                  <span>09 / Analytics & Data Import/Export</span>
                </div>
                <ul className="space-y-2 text-xs font-mono text-zinc-400">
                  {project.analyticsFeatures.map((item, idx) => (
                    <li key={idx}>› {item}</li>
                  ))}
                </ul>
              </Card>
            )}
          </div>
        )}

        {/* 11 & 12 — AUTHENTICATION (JWT/RBAC) & ZOD VALIDATION (EventPilot) */}
        {project.validationExamples && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="glass" className="p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
                <Lock className="w-4 h-4" />
                <span>11 / Authentication & RBAC</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-zinc-300">
                <li>› Secure JWT authentication with 7-day expiry</li>
                <li>› Role-Based Access Control (Super Admin, Organizer, Volunteer, Participant)</li>
                <li>› Protected route middleware guards</li>
              </ul>
            </Card>

            <Card variant="glass" className="p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
                <CheckSquare className="w-4 h-4" />
                <span>12 / Centralized Zod Validation</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-zinc-300">
                {project.validationExamples.map((val, idx) => (
                  <li key={idx}>✓ {val}</li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {/* 14 & 15 — TESTING (Vitest + Supertest) & CI/CD (GitHub Actions) */}
        {project.testingDetails && (
          <div className="space-y-6">
            <FadeIn direction="up">
              <h2 className="text-xl font-bold text-zinc-100 font-sans tracking-tight flex items-center gap-2">
                <TestTube2 className="w-5 h-5 text-amber-500" />
                14 & 15 / AUTOMATED TESTING & CI/CD PIPELINE
              </h2>
            </FadeIn>

            <Card variant="glass" className="p-6 border-l-4 border-l-emerald-500 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-3 rounded bg-zinc-950 border border-zinc-800">
                  <span className="text-xs font-mono text-zinc-500 block">Test Files</span>
                  <span className="text-base font-bold font-mono text-emerald-400">16 Test Files</span>
                </div>
                <div className="p-3 rounded bg-zinc-950 border border-zinc-800">
                  <span className="text-xs font-mono text-zinc-500 block">Test Cases</span>
                  <span className="text-base font-bold font-mono text-emerald-400">43 Test Cases</span>
                </div>
                <div className="p-3 rounded bg-zinc-950 border border-zinc-800">
                  <span className="text-xs font-mono text-zinc-500 block">Pass Rate</span>
                  <span className="text-base font-bold font-mono text-emerald-400">100% Pass Rate</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-3">
                  GitHub Actions CI/CD Regression Workflow
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
                  {['Code Push / PR', 'GitHub Event', 'GitHub Actions', 'Vitest + Supertest', 'Regression Pass'].map((st, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
                      <span className="text-emerald-400 font-bold text-[10px] block">Step 0{idx + 1}</span>
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* 16 — ENGINEERING FEATURES (10 Pillars Grid) */}
        {isEventPilot && (
          <div className="space-y-6">
            <FadeIn direction="up">
              <h2 className="text-xl font-bold text-zinc-100 font-sans tracking-tight flex items-center gap-2">
                <Cpu className="w-5 h-5 text-amber-500" />
                16 / ENGINEERING CAPABILITY PILLARS
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                { title: 'Dynamic Form System', desc: '14+ question field types' },
                { title: 'Centralized Validation', desc: 'Strict Zod schema rules' },
                { title: 'Authentication', desc: 'JWT token-based auth' },
                { title: 'Authorization', desc: 'Role-Based Access Control' },
                { title: 'Attendance System', desc: 'Camera QR-code scanning' },
                { title: 'Data Management', desc: 'CSV import & export' },
                { title: 'Communication', desc: 'Announcements & emails' },
                { title: 'Digital Recognition', desc: 'Verifiable PDF certificates' },
                { title: 'Automated Testing', desc: 'Vitest & Supertest suite' },
                { title: 'CI/CD Automation', desc: 'GitHub Actions pipeline' },
              ].map((pil, idx) => (
                <Card key={idx} variant="glass" className="p-3.5 space-y-1">
                  <span className="text-xs font-mono text-amber-400 font-bold block">{pil.title}</span>
                  <span className="text-[11px] font-mono text-zinc-400 block">{pil.desc}</span>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* 18 — ENGINEERING CHALLENGES */}
        {project.challenges && (
          <div className="space-y-4">
            <FadeIn direction="up">
              <h2 className="text-xl font-bold text-zinc-100 font-sans tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                18 / ENGINEERING CHALLENGES & SOLUTIONS
              </h2>
            </FadeIn>

            <div className="space-y-3">
              {project.challenges.map((challenge, cIdx) => (
                <Card key={cIdx} variant="glass" className="p-4 border-l-2 border-l-amber-500/80">
                  <p className="text-xs sm:text-sm font-mono text-zinc-300">{challenge}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* 19 — ENGINEERING FLOW PIPELINE */}
        {isEventPilot && (
          <div className="space-y-6">
            <FadeIn direction="up">
              <h2 className="text-xl font-bold text-zinc-100 font-sans tracking-tight flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-amber-500" />
                19 / END-TO-END ENGINEERING FLOW
              </h2>
            </FadeIn>

            <Card variant="glass" className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 text-center text-xs font-mono">
                {['User', 'Event Reg', 'Dynamic Form', 'Validation', 'Teams', 'Participation', 'QR Attendance', 'Certificate', 'Analytics'].map((step, idx) => (
                  <div key={idx} className="p-2 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
                    <span className="text-amber-500 font-bold block text-[10px]">0{idx + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* 20 — OUTCOME */}
        {project.outcome && (
          <div className="space-y-4">
            <FadeIn direction="up">
              <h2 className="text-xl font-bold text-zinc-100 font-sans tracking-tight flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                20 / PROJECT OUTCOME
              </h2>
            </FadeIn>

            <Card variant="glass" className="p-6">
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                {project.outcome}
              </p>
            </Card>
          </div>
        )}

        {/* 21 — PROJECT TAKEAWAY */}
        {project.takeaway && (
          <div className="space-y-4">
            <FadeIn direction="up">
              <h2 className="text-xl font-bold text-zinc-100 font-sans tracking-tight flex items-center gap-2">
                <Terminal className="w-5 h-5 text-amber-500" />
                21 / PROJECT TAKEAWAY
              </h2>
            </FadeIn>

            <Card variant="glass" className="p-6 border-l-4 border-l-amber-500">
              <p className="text-sm text-zinc-300 font-mono italic leading-relaxed">
                "{project.takeaway}"
              </p>
            </Card>
          </div>
        )}

        {/* LIVE DEMO ACTION */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-900">
          <div>
            <span className="text-xs font-mono text-zinc-500 block mb-1">Live Application URL</span>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-amber-400 hover:underline inline-flex items-center gap-1.5"
              >
                <span>{project.liveDemo}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <Button
            variant="primary"
            magnetic
            href={project.liveDemo || '#'}
            rightIcon={ExternalLink}
          >
            LIVE DEMO
          </Button>
        </div>

        {/* Dynamic Prev / Next Project Navigation Footer */}
        <div className="pt-12 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            onClick={() => navigate(`/work/${prevProject.slug}`)}
            className="group p-6 rounded-xl glass-panel border border-zinc-800/80 text-left hover:border-zinc-700 transition-all"
          >
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              ← PREVIOUS PROJECT
            </span>
            <span className="text-lg font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
              {prevProject.title}
            </span>
          </button>

          <button
            onClick={() => navigate(`/work/${nextProject.slug}`)}
            className="group p-6 rounded-xl glass-panel border border-zinc-800/80 text-right hover:border-zinc-700 transition-all"
          >
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              NEXT PROJECT →
            </span>
            <span className="text-lg font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
              {nextProject.title}
            </span>
          </button>
        </div>
      </Container>
    </article>
  );
}
