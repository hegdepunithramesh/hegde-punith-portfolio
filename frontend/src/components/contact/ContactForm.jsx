import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowRight, RefreshCw } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { sendContactMessage } from '../../services/api';

const MAX_MESSAGE_LENGTH = 2000;
const MIN_MESSAGE_LENGTH = 10;

/**
 * ContactForm Component — Phase 10
 * Isolated contact form component featuring client-side validation, live character counter,
 * asynchronous API integration with POST /api/contact, and accessible state management.
 */
export default function ContactForm() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [serverMessage, setServerMessage] = useState('');

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > MAX_MESSAGE_LENGTH) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error on typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }

    // Reset success/error button state if user modifies input after submit
    if (status === 'success' || status === 'error') {
      setStatus('idle');
      setServerMessage('');
    }
  };

  // Client-Side Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be under 100 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 100) {
      newErrors.email = 'Email must be under 100 characters';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a message subject';
    } else if (formData.subject.length > 150) {
      newErrors.subject = 'Subject must be under 150 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    } else if (formData.message.trim().length < MIN_MESSAGE_LENGTH) {
      newErrors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters long`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('submitting');
    setServerMessage('');

    try {
      const response = await sendContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      setStatus('success');
      setServerMessage(response.message || 'Your message has been sent successfully.');

      // Clear form inputs only on confirmed success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    } catch (err) {
      setStatus('error');
      setServerMessage(
        err.message || 'Unable to send message right now. Please try again or email directly.'
      );
      // NOTE: Form inputs are strictly PRESERVED on error so user data is not lost!
    }
  };

  return (
    <Card variant="glass" className="p-6 sm:p-10 relative overflow-hidden">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name Input */}
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
            Your Name <span className="text-amber-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Morgan"
            disabled={status === 'submitting'}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-4 py-3 rounded-lg bg-zinc-950/80 border text-sm text-zinc-100 placeholder:text-zinc-600 font-sans transition-all duration-200 focus:outline-none ${
              errors.name
                ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500/30'
                : 'border-zinc-800 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20'
            }`}
          />
          {errors.name && (
            <p id="name-error" className="text-xs font-mono text-rose-400 flex items-center gap-1.5 pt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email Input */}
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
            Email Address <span className="text-amber-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. alex@company.com"
            disabled={status === 'submitting'}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-3 rounded-lg bg-zinc-950/80 border text-sm text-zinc-100 placeholder:text-zinc-600 font-sans transition-all duration-200 focus:outline-none ${
              errors.email
                ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500/30'
                : 'border-zinc-800 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20'
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-xs font-mono text-rose-400 flex items-center gap-1.5 pt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Subject Input */}
        <div className="space-y-1.5">
          <label htmlFor="contact-subject" className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
            Subject <span className="text-amber-500">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Engineering Role / Project Inquiry"
            disabled={status === 'submitting'}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            className={`w-full px-4 py-3 rounded-lg bg-zinc-950/80 border text-sm text-zinc-100 placeholder:text-zinc-600 font-sans transition-all duration-200 focus:outline-none ${
              errors.subject
                ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500/30'
                : 'border-zinc-800 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20'
            }`}
          />
          {errors.subject && (
            <p id="subject-error" className="text-xs font-mono text-rose-400 flex items-center gap-1.5 pt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>

        {/* Message Textarea & Character Counter */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="contact-message" className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
              Message <span className="text-amber-500">*</span>
            </label>
            <span className="text-[11px] font-mono text-zinc-500">
              {formData.message.length} / {MAX_MESSAGE_LENGTH}
            </span>
          </div>

          <textarea
            id="contact-message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, timeline, or position..."
            disabled={status === 'submitting'}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`w-full px-4 py-3 rounded-lg bg-zinc-950/80 border text-sm text-zinc-100 placeholder:text-zinc-600 font-sans transition-all duration-200 focus:outline-none resize-none ${
              errors.message
                ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500/30'
                : 'border-zinc-800 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20'
            }`}
          />
          {errors.message && (
            <p id="message-error" className="text-xs font-mono text-rose-400 flex items-center gap-1.5 pt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Server Response Feedback Message */}
        {serverMessage && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg text-xs font-mono flex items-start gap-2.5 ${
              status === 'success'
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
            }`}
          >
            {status === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
            )}
            <span>{serverMessage}</span>
          </motion.div>
        )}

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant={status === 'success' ? 'glass' : status === 'error' ? 'outline' : 'primary'}
            size="lg"
            magnetic={status === 'idle'}
            isDisabled={status === 'submitting'}
            className="w-full sm:w-auto font-mono text-xs tracking-wider uppercase"
          >
            {status === 'submitting' && (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-current mr-2" />
                <span>SENDING...</span>
              </>
            )}

            {status === 'success' && (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2" />
                <span>✓ MESSAGE SENT</span>
              </>
            )}

            {status === 'error' && (
              <>
                <RefreshCw className="w-4 h-4 text-rose-400 mr-2" />
                <span>TRY AGAIN</span>
              </>
            )}

            {status === 'idle' && (
              <>
                <span>SEND MESSAGE</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
}
