import { createContext, useContext, useState, useEffect } from 'react';

/**
 * Centralized Motion Design Tokens
 */
export const MOTION_TOKENS = {
  ease: {
    cinematic: [0.16, 1, 0.3, 1], // Fluid editorial cubic-bezier
    smooth: [0.25, 0.1, 0.25, 1],
    bounce: [0.34, 1.56, 0.64, 1],
  },
  duration: {
    instant: 0.15,
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
  },
  stagger: {
    fast: 0.05,
    normal: 0.08,
    slow: 0.12,
  },
};

/**
 * Custom Cursor Context & Hooks
 */
const CursorContext = createContext({
  cursorState: 'default',
  cursorText: '',
  setCursorState: () => {},
  resetCursor: () => {},
});

export const CursorProvider = ({ children }) => {
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'project' | 'link' | 'button'
  const [cursorText, setCursorText] = useState('');

  const setCursor = (state = 'default', text = '') => {
    setCursorState(state);
    setCursorText(text);
  };

  const resetCursor = () => {
    setCursorState('default');
    setCursorText('');
  };

  return (
    <CursorContext.Provider value={{ cursorState, cursorText, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
