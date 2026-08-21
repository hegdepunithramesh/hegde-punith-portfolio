import { sendContactEmailService } from '../services/email.service.js';
import logger from '../utils/logger.js';

/**
 * Controller handling contact form submissions (POST /api/contact)
 */
export const handleContactSubmission = async (req, res, next) => {
  try {
    const contactData = req.sanitizedData || req.body;

    await sendContactEmailService(contactData);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch (error) {
    logger.error('Error in handleContactSubmission controller:', error);

    // Return safe public error response without exposing internal stack traces
    return res.status(500).json({
      success: false,
      message: 'Unable to send your message right now. Please try again.',
    });
  }
};

export default {
  handleContactSubmission,
};
