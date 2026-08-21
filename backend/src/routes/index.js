import { Router } from 'express';
import healthRoutes from './health.routes.js';
import contactRoutes from './contact.routes.js';

const apiRouter = Router();

// Register sub-routers
apiRouter.use('/health', healthRoutes);
apiRouter.use('/contact', contactRoutes);

export default apiRouter;
