import React, { lazy, Suspense } from 'react';
import ScrollProgress from './components/common/ScrollProgress';
import Navbar from './components/common/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Work from './components/work/Work';
import TechStack from './components/skills/TechStack';
import Achievements from './components/achievements/Achievements';
import Leadership from './components/leadership/Leadership';
import Contact from './components/contact/Contact';
import Footer from './components/common/Footer';
import CustomCursor from './components/common/CustomCursor';
import PageTransition from './components/animation/PageTransition';
import ErrorBoundary from './components/common/ErrorBoundary';
import { Divider, Container } from './components/ui';
import { useRoute } from './utils/router';
import { Loader2 } from 'lucide-react';

// Code Splitting: Lazy load heavy ProjectDetail case study page component
const ProjectDetail = lazy(() => import('./components/work/ProjectDetail'));

/**
 * Case Study Loading Fallback View
 */
function CaseStudyLoadingFallback() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center p-6 bg-noise pt-32">
      <Container size="narrow" className="text-center space-y-4">
        <Loader2 className="w-8 h-8 text-amber-500 animate-spin mx-auto" />
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
          Loading Case Study...
        </span>
      </Container>
    </div>
  );
}

export default function App() {
  const currentPath = useRoute();

  // Check if current route is a dedicated project case-study route (/work/:slug)
  const isProjectDetailRoute = currentPath.startsWith('/work/');
  const projectSlug = isProjectDetailRoute ? currentPath.replace('/work/', '') : null;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 bg-noise selection:bg-amber-500/20 selection:text-amber-200 flex flex-col justify-between relative">
        {/* Desktop Custom Cursor */}
        <CustomCursor />

        {/* Global Hairline Scroll Progress Bar */}
        <ScrollProgress />

        {/* Global Fixed Navbar */}
        <Navbar />

        {/* Main Content Router View with Route Motion Transitions & Code Splitting */}
        <PageTransition routeKey={currentPath}>
          {isProjectDetailRoute ? (
            <main className="flex-grow">
              <Suspense fallback={<CaseStudyLoadingFallback />}>
                <ProjectDetail slug={projectSlug} />
              </Suspense>
            </main>
          ) : (
            <main className="flex-grow">
              {/* Phase 4: Full-Screen Premium Hero Section */}
              <Hero />

              {/* Phase 5: Editorial About Section */}
              <About />

              <Divider variant="gradient" />

              {/* Phase 6: Vertical Editorial Experience Timeline */}
              <Experience />

              <Divider variant="gradient" />

              {/* Phase 7: Selected Work Showcase Section */}
              <Work />

              <Divider variant="gradient" />

              {/* Phase 9 Section 1: Tech Stack */}
              <TechStack />

              <Divider variant="gradient" />

              {/* Phase 9 Section 2: Achievements */}
              <Achievements />

              <Divider variant="gradient" />

              {/* Phase 9 Section 3: Leadership & Community */}
              <Leadership />

              <Divider variant="gradient" />

              {/* Phase 10: Premium Contact UI Section */}
              <Contact />
            </main>
          )}
        </PageTransition>

        {/* Global Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
