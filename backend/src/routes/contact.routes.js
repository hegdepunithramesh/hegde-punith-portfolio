import { Router } from 'express';
import { contactRateLimiter } from '../middleware/rateLimiter.js';
import { validateContactInput } from '../middleware/contactValidation.js';
import { handleContactSubmission } from '../controllers/contact.controller.js';

const router = Router();

// POST /api/contact
router.post('/', contactRateLimiter, validateContactInput, handleContactSubmission);

export default router;
