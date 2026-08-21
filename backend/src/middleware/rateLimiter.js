import config from '../config/index.js';
import logger from '../utils/logger.js';

const ipStore = new Map();

/**
 * Rate Limiter Middleware for POST /api/contact
 * Prevents automated request flooding and spam.
 */
export const contactRateLimiter = (req, res, next) => {
  const clientIp = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const windowMs = config.rateLimit.windowMs;
  const maxRequests = config.rateLimit.maxRequests;

  let record = ipStore.get(clientIp);

  if (!record || now - record.startTime > windowMs) {
    record = {
      startTime: now,
      count: 1,
    };
    ipStore.set(clientIp, record);
    return next();
  }

  if (record.count >= maxRequests) {
    logger.warn(`Rate limit exceeded for IP ${clientIp} on POST /api/contact`);
    return res.status(429).json({
      success: false,
      message: 'Too many contact requests from this IP. Please try again later.',
    });
  }

  record.count += 1;
  ipStore.set(clientIp, record);
  next();
};

export default contactRateLimiter;
