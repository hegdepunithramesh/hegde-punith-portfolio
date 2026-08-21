import { sendContactEmailService } from '../services/email.service.js';
import logger from '../utils/logger.js';

/**
 * Controller handling contact form submissions (POST /api/contact)
 * Responds instantly (<100ms) to browser so UI never hangs, then processes email in background.
 */
export const handleContactSubmission = async (req, res, next) => {
  try {
    const contactData = req.sanitizedData || req.body;

    // Send instant HTTP 200 response to browser to prevent UI button hanging
    res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    });

    // Dispatch email transmission asynchronously in background
    sendContactEmailService(contactData).catch((err) => {
      logger.error('Background email transport execution error:', err);
    });

  } catch (error) {
    logger.error('Error in handleContactSubmission controller:', error);
    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: 'Unable to send your message right now. Please try again.',
      });
    }
  }
};

export default {
  handleContactSubmission,
};
