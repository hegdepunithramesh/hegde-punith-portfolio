import logger from '../utils/logger.js';

/**
 * Escapes HTML characters to prevent XSS / HTML injection attacks in email templates
 */
const sanitizeString = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/**
 * Validation Middleware for POST /api/contact
 */
export const validateContactInput = (req, res, next) => {
  const { name, email, subject, message } = req.body || {};

  // Validate Name
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Please provide your name.',
    });
  }

  const trimmedName = name.trim();
  if (trimmedName.length < 2 || trimmedName.length > 100) {
    return res.status(400).json({
      success: false,
      message: 'Name must be between 2 and 100 characters.',
    });
  }

  // Validate Email
  if (!email || typeof email !== 'string' || !email.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Please provide your email address.',
    });
  }

  const trimmedEmail = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 100) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
    });
  }

  // Validate Subject
  if (!subject || typeof subject !== 'string' || !subject.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a message subject.',
    });
  }

  const trimmedSubject = subject.trim();
  if (trimmedSubject.length < 2 || trimmedSubject.length > 150) {
    return res.status(400).json({
      success: false,
      message: 'Subject must be between 2 and 150 characters.',
    });
  }

  // Validate Message
  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a message body.',
    });
  }

  const trimmedMessage = message.trim();
  if (trimmedMessage.length < 10 || trimmedMessage.length > 2000) {
    return res.status(400).json({
      success: false,
      message: 'Message must be between 10 and 2000 characters long.',
    });
  }

  // Attach sanitized data to request
  req.sanitizedData = {
    name: sanitizeString(trimmedName),
    email: trimmedEmail,
    subject: sanitizeString(trimmedSubject),
    message: sanitizeString(trimmedMessage),
    rawMessage: trimmedMessage,
  };

  next();
};

export default validateContactInput;
