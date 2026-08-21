import { checkHealthService } from '../services/health.service.js';

/**
 * Controller handling health check HTTP requests
 */
export const getHealth = async (req, res, next) => {
  try {
    const healthData = await checkHealthService();
    return res.status(200).json(healthData);
  } catch (error) {
    next(error);
  }
};

export default {
  getHealth,
};
