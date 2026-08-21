import logger from '../utils/logger.js';
import config from '../config/index.js';

export const errorHandler = (err, req, res, next) => {
  logger.error(`Error processing request ${req.method} ${req.originalUrl}:`, err);

  const statusCode = err.statusCode || 500;
  const response = {
    status: 'error',
    message: err.message || 'Internal Server Error',
    ...(config.isProduction ? {} : { stack: err.stack }),
  };

  res.status(statusCode).json(response);
};

export default errorHandler;
