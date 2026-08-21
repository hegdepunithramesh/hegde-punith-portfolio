import config from '../config/index.js';

const startTime = Date.now();

/**
 * Service handling health status checks and diagnostic information
 */
export const checkHealthService = async () => {
  const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);
  
  return {
    status: 'success',
    message: 'Backend API service is operating normally',
    environment: config.nodeEnv,
    uptime: `${uptimeSeconds}s`,
    timestamp: new Date().toISOString(),
    system: {
      nodeVersion: process.version,
      memoryUsage: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`,
    },
  };
};

export default {
  checkHealthService,
};
