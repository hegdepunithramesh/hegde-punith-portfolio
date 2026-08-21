import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CursorProvider } from './utils/motion.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CursorProvider>
      <App />
    </CursorProvider>
  </StrictMode>,
);
