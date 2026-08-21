import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  allowedOrigins: process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',') 
    : ['http://localhost:3000', 'http://localhost:5173'],
  email: {
    service: process.env.EMAIL_SERVICE || 'gmail',
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASS || process.env.EMAIL_APP_PASSWORD || '',
    receiver: process.env.CONTACT_RECEIVER || process.env.CONTACT_RECEIVER_EMAIL || 'hegdepunithramesh@gmail.com',
  },
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 15, // 15 submissions per IP per window
  },
};

export default config;
