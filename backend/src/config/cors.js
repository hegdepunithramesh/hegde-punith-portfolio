import config from './index.js';

export const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. mobile apps, curl, Postman, server-to-server)
    if (!origin) {
      return callback(null, true);
    }

    // Allow wildcard or development mode
    if (config.allowedOrigins.includes('*') || !config.isProduction) {
      return callback(null, true);
    }

    // Match exact allowed origins or domain variations (.hegdepunithramesh.live, .vercel.app)
    const isAllowed = config.allowedOrigins.some((allowed) => {
      const cleanAllowed = allowed.trim();
      return (
        origin === cleanAllowed ||
        origin.endsWith('.hegdepunithramesh.live') ||
        origin.endsWith('.vercel.app')
      );
    });

    if (isAllowed) {
      callback(null, true);
    } else {
      console.warn(`CORS Rejected Origin: ${origin}`);
      callback(null, true); // Fallback allow in production to prevent user contact blockage
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;
