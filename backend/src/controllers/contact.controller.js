import { sendContactEmailService } from '../services/email.service.js';
import logger from '../utils/logger.js';

/**
 * Controller handling contact form submissions (POST /api/contact)
 * Returns detailed error details to facilitate live deployment debugging
 */
export const handleContactSubmission = async (req, res, next) => {
  try {
    const contactData = req.sanitizedData || req.body;

    const result = await sendContactEmailService(contactData);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
      details: result,
    });
  } catch (error) {
    logger.error('Error in handleContactSubmission controller:', error);

    return res.status(500).json({
      success: false,
      message: error.message || 'Unable to send message.',
      errorDetails: error.stack || error.toString(),
    });
  }
};

export default {
  handleContactSubmission,
};
