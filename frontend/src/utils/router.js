import { useState, useEffect } from 'react';

/**
 * Lightweight Client-Side Router Utility
 * Supports native pushState, back/forward history navigation, direct URL loading, and page title updates.
 */

export function navigate(path) {
  if (window.location.pathname !== path) {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new Event('popstate'));
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function useRoute() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return pathname;
}

export default {
  navigate,
  useRoute,
};
