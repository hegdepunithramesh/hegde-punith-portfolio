import nodemailer from 'nodemailer';
import config from '../config/index.js';
import logger from '../utils/logger.js';

/**
 * Creates Nodemailer SMTP Transporter
 * Uses port 465 SSL for cloud host compatibility (Render, AWS, DigitalOcean)
 */
const createTransporter = () => {
  if (config.email.host) {
    return nodemailer.createTransport({
      host: config.email.host,
      port: config.email.port,
      secure: config.email.secure,
      auth: {
        user: config.email.user,
        pass: config.email.pass,
      },
      tls: { rejectUnauthorized: false },
    });
  }

  // Cloud-optimized Gmail SSL Transporter (Port 465)
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: config.email.user,
      pass: config.email.pass,
    },
    tls: { rejectUnauthorized: false },
  });
};

/**
 * Formats HTML Email Template with Prominent Sender Card
 */
const formatHtmlEmail = ({ name, email, subject, message, timestamp }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #09090b; color: #f4f4f5; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background-color: #0c0c0e; border: 1px solid #27272a; border-radius: 12px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
          .header { border-bottom: 1px solid #18181b; padding-bottom: 16px; margin-bottom: 24px; }
          .title { color: #d97706; font-size: 20px; font-weight: bold; margin: 0 0 4px 0; }
          .subtitle { color: #a1a1aa; font-size: 12px; margin: 0; }
          .sender-card { background-color: #18181b; border-left: 4px solid #d97706; border-radius: 6px; padding: 16px; margin-bottom: 24px; }
          .field-group { margin-bottom: 16px; }
          .field-group:last-child { margin-bottom: 0; }
          .label { color: #71717a; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
          .value { color: #f4f4f5; font-size: 15px; font-weight: 500; }
          .email-link { color: #fbbf24; font-weight: 600; text-decoration: underline; }
          .message-box { background-color: #141417; border: 1px solid #27272a; border-radius: 8px; padding: 20px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #e4e4e7; margin-top: 8px; }
          .footer { border-top: 1px solid #18181b; padding-top: 16px; margin-top: 32px; font-size: 11px; color: #71717a; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">New Portfolio Contact Submission</h1>
            <p class="subtitle">Message received via Hegde Punith Ramesh Portfolio</p>
          </div>
          
          <div class="sender-card">
            <div class="field-group">
              <div class="label">Sender Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="field-group">
              <div class="label">Sender Email Address</div>
              <div class="value"><a href="mailto:${email}" class="email-link">${email}</a></div>
            </div>
          </div>

          <div class="field-group">
            <div class="label">Subject</div>
            <div class="value">${subject}</div>
          </div>

          <div class="field-group">
            <div class="label">Message Content</div>
            <div class="message-box">${message}</div>
          </div>

          <div class="footer">
            Received: ${timestamp} · Reply directly to this email to respond to ${name} (${email}).
          </div>
        </div>
      </body>
    </html>
  `;
};

/**
 * Service function to send contact email via Nodemailer
 */
export const sendContactEmailService = async ({ name, email, subject, message, rawMessage }) => {
  const timestamp = new Date().toISOString();

  // If no credentials configured in dev mode, simulate successful delivery
  if (!config.email.user || !config.email.pass) {
    logger.info(`[DEV MODE] SMTP credentials not set. Simulated contact email delivery for [${name} <${email}>]`);
    logger.info(`Subject: ${subject}`);
    logger.info(`Message: ${rawMessage}`);
    return { success: true, simulated: true };
  }

  const transporter = createTransporter();

  const mailOptions = {
    from: `"${name} (via Portfolio)" <${config.email.user}>`,
    to: config.email.receiver,
    replyTo: `"${name}" <${email}>`,
    subject: `[Portfolio Inquiry] From ${name}: ${subject}`,
    text: `New Portfolio Message\n\nSender Name: ${name}\nSender Email: ${email}\nSubject: ${subject}\nTimestamp: ${timestamp}\n\nMessage:\n${rawMessage}`,
    html: formatHtmlEmail({ name, email, subject, message, timestamp }),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    logger.info(`Contact email sent successfully to ${config.email.receiver}. Message ID: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    logger.error(`Nodemailer email transport failed:`, error);
    throw new Error('Email delivery transport error');
  }
};

export default {
  sendContactEmailService,
};
