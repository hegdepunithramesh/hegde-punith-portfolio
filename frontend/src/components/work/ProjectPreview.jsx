import React from 'react';
import { useCursor } from '../../utils/motion.jsx';
import {
  QrCode,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  PieChart,
  BookOpen,
  History,
  Terminal,
  Database,
  Layers,
  Moon,
  Globe,
  Smartphone,
  Users,
  Download,
} from 'lucide-react';

/**
 * ProjectPreview Component — Phase 12 Refined & Kaashvi Updates
 * Custom visual preview canvas composition for each project showcasing actual architectural & UI motifs with custom cursor hover.
 */
export default function ProjectPreview({ projectId, isFeatured = false }) {
  const { setCursor, resetCursor } = useCursor();

  const handleMouseEnter = () => {
    setCursor('project', 'VIEW →');
  };

  const handleMouseLeave = () => {
    resetCursor();
  };

  const wrapperProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  if (projectId === 'eventpilot') {
    return (
      <div
        {...wrapperProps}
        className="w-full h-full min-h-[320px] sm:min-h-[420px] rounded-xl bg-zinc-950/90 border border-zinc-800/90 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group-hover:border-amber-500/40 transition-colors duration-300 cursor-pointer"
      >
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[90px] rounded-full pointer-events-none" />

        {/* Top Control Bar Motif */}
        <div className="flex items-center justify-between z-10 border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-zinc-500 hidden sm:inline-block">
              eventpilot.app/dashboard
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-400">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Gemini AI Integrated</span>
            </span>
          </div>
        </div>

        {/* Center UI Showcase Canvas */}
        <div className="my-6 space-y-4 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Event Management Card */}
            <div className="p-4 rounded-lg bg-zinc-900/80 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <QrCode className="w-3.5 h-3.5" />
                  <span>QR Attendance Scanner</span>
                </span>
                <span className="text-emerald-400 font-medium">LIVE</span>
              </div>
              <p className="text-sm font-semibold text-zinc-200">Tech Fest 2026 Check-In</p>
              <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full w-[85%]" />
              </div>
              <span className="text-[11px] font-mono text-zinc-500 block">
                85% Attendees Verified via QR
              </span>
            </div>

            {/* Test Suite Verification Badge Card */}
            <div className="p-4 rounded-lg bg-zinc-900/80 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Vitest & Supertest Suite</span>
                </span>
                <span className="text-xs font-mono text-emerald-400">100% PASS</span>
              </div>
              <div className="font-mono text-xs text-zinc-300 bg-zinc-950 p-2 rounded border border-zinc-800">
                <div>✓ 16 Test Files Passed</div>
                <div className="text-emerald-400">✓ 43 Test Cases Passed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Indicator Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500 z-10 pt-4 border-t border-zinc-900">
          <div className="flex items-center gap-3">
            <span className="text-zinc-400">Zod Validation</span>
            <span>·</span>
            <span className="text-zinc-400">JWT RBAC</span>
            <span>·</span>
            <span className="text-zinc-400">PostgreSQL</span>
          </div>
          <span className="text-amber-500">Node.js Express Service</span>
        </div>
      </div>
    );
  }

  if (projectId === 'kaashvi-tutorials-app') {
    return (
      <div
        {...wrapperProps}
        className="w-full h-full min-h-[320px] sm:min-h-[420px] rounded-xl bg-zinc-950/90 border border-zinc-800/90 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group-hover:border-amber-500/40 transition-colors duration-300 cursor-pointer"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="flex items-center justify-between z-10 border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-mono text-zinc-300 font-semibold">Kaashvi Learner App</span>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md">
            Google Play Store Live
          </span>
        </div>

        <div className="my-6 space-y-4 z-10">
          {/* Real Metrics Highlight Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-amber-500/25 text-center">
              <Download className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <span className="text-xs font-mono text-zinc-500 block">Downloads</span>
              <span className="text-base font-bold font-mono text-amber-400">1,000+</span>
            </div>

            <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-amber-500/25 text-center">
              <Users className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <span className="text-xs font-mono text-zinc-500 block">Active Users</span>
              <span className="text-base font-bold font-mono text-amber-400">500+</span>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-300 space-y-1">
            <span className="text-amber-500/90 block font-semibold">Target Audience Scope</span>
            <p className="text-zinc-400">Karnataka State Board & CBSE · Classes 8–10</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 z-10 pt-4 border-t border-zinc-900">
          <span>Android Studio · Node.js · Express · Firebase</span>
          <span className="text-amber-500">Admin Web Portal</span>
        </div>
      </div>
    );
  }

  if (projectId === 'student-expense-tracker') {
    return (
      <div
        {...wrapperProps}
        className="w-full h-full min-h-[260px] sm:min-h-[320px] rounded-xl bg-zinc-950/90 border border-zinc-800/90 p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-zinc-700 transition-colors duration-300 cursor-pointer"
      >
        <div className="flex items-center justify-between border-b border-zinc-900 pb-3 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <PieChart className="w-4 h-4 text-amber-500" />
            <span>Finance Dashboard</span>
          </div>
          <span className="text-zinc-500">PostgreSQL Sync</span>
        </div>

        <div className="my-4 space-y-3">
          <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-500 block">Monthly Budget</span>
              <span className="text-xl font-bold text-zinc-100 font-mono">₹12,500</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-emerald-400 block">Tracked & Balanced</span>
              <span className="text-xs font-mono text-zinc-400">Daily Logs Active</span>
            </div>
          </div>
        </div>

        <div className="text-xs font-mono text-zinc-500 flex items-center justify-between pt-3 border-t border-zinc-900">
          <span>Express.js Backend</span>
          <span className="text-zinc-400">Data Persistence</span>
        </div>
      </div>
    );
  }

  if (projectId === 'personal-blog-website') {
    return (
      <div
        {...wrapperProps}
        className="w-full h-full min-h-[260px] sm:min-h-[320px] rounded-xl bg-zinc-950/90 border border-zinc-800/90 p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-zinc-700 transition-colors duration-300 cursor-pointer"
      >
        <div className="flex items-center justify-between border-b border-zinc-900 pb-3 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>EJS Server-Rendered Blog</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px]">
            <Moon className="w-3 h-3 text-amber-400" />
            <span>Dark Mode</span>
          </div>
        </div>

        <div className="my-4 space-y-2">
          <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
            <span className="text-xs font-mono text-amber-500/90 block mb-1">
              GET /posts/:slug
            </span>
            <p className="text-sm font-semibold text-zinc-200">
              Dynamic Routing & EJS Templating Architecture
            </p>
          </div>
        </div>

        <div className="text-xs font-mono text-zinc-500 flex items-center justify-between pt-3 border-t border-zinc-900">
          <span>Server-Side Rendered</span>
          <span className="text-zinc-400">Node.js Express</span>
        </div>
      </div>
    );
  }

  // ChronoSphere
  return (
    <div
      {...wrapperProps}
      className="w-full h-full min-h-[260px] sm:min-h-[320px] rounded-xl bg-zinc-950/90 border border-zinc-800/90 p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-zinc-700 transition-colors duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-between border-b border-zinc-900 pb-3 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-amber-500" />
          <span>ChronoSphere Historical Engine</span>
        </div>
        <span className="text-xs font-mono text-amber-400">Axios Client</span>
      </div>

      <div className="my-4 space-y-2">
        <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-1">
          <span className="text-xs font-mono text-zinc-500 block">External Historical API Query</span>
          <p className="text-xs font-mono text-amber-400">Events · Births · Deaths Data Stream</p>
        </div>
      </div>

      <div className="text-xs font-mono text-zinc-500 flex items-center justify-between pt-3 border-t border-zinc-900">
        <span>Dynamic API Proxy</span>
        <span className="text-zinc-400">EJS Views</span>
      </div>
    </div>
  );
}
