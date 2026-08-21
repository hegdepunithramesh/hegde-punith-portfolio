import config from '../config/index.js';

const getTimestamp = () => new Date().toISOString();

export const logger = {
  info: (message, meta = '') => {
    console.log(`[${getTimestamp()}] [INFO] ${message}`, meta ? JSON.stringify(meta) : '');
  },
  warn: (message, meta = '') => {
    console.warn(`[${getTimestamp()}] [WARN] ${message}`, meta ? JSON.stringify(meta) : '');
  },
  error: (message, error = '') => {
    console.error(`[${getTimestamp()}] [ERROR] ${message}`, error?.stack || error || '');
  },
  debug: (message, meta = '') => {
    if (!config.isProduction) {
      console.log(`[${getTimestamp()}] [DEBUG] ${message}`, meta ? JSON.stringify(meta) : '');
    }
  },
};

export default logger;
