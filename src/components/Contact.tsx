import { useState, useRef, type FC, type ChangeEvent, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Loader2, Mail, MessageCircle } from 'lucide-react';
import { saveContact } from '../services/api';
import { sendEmail } from '../services/email';
import './Contact.css';

/**
 * Contact component with backend persistence and EmailJS delivery.
 * Implements form validation and feedback during the sending process.
 */
const Contact: FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' | '' }>({ message: '', type: '' });

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // 1. Validation
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      setFeedback({ message: t('contact.form.required'), type: 'error' });
      return;
    }

    setIsSending(true);
    setFeedback({ message: '', type: '' });

    try {
      // 2. Save to Backend
      await saveContact(formData);
      console.log('Saved to backend database');

      // 3. Send via EmailJS
      if (formRef.current) {
        await sendEmail(formRef.current);
        console.log('Email sent via EmailJS');
      }

      // Success
      setFeedback({ message: t('contact.form.success'), type: 'success' });
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
      formRef.current?.reset();
    } catch (error) {
      console.error('Error sending contact message:', error);
      setFeedback({ message: t('contact.form.error'), type: 'error' });
    } finally {
      setIsSending(false);
      // Clear feedback after 5 seconds
      setTimeout(() => setFeedback({ message: '', type: '' }), 5000);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact-container container grid">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="contact-description">{t('contact.description')}</p>

          <div className="contact-methods">
            <a href="https://wa.me/2285720482?" target="_blank" rel="noreferrer" className="contact-link">
              <MessageCircle size={20} />
              <span>+52 228 572 0482</span>
            </a>
            <a href="mailto:alberto-zompantzi@outlook.com" className="contact-link">
              <Mail size={20} />
              <span>alberto-zompantzi@outlook.com</span>
            </a>
          </div>

          <form className="contact-form" id="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="contact-form-input">
              <label htmlFor="contact-name" className="contact-label">{t('contact.form.name')}</label>
              <input
                type="text"
                name="nombre"
                placeholder={t('contact.form.placeholderName')}
                className="contact-input"
                id="contact-name"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-input">
              <label htmlFor="contact-email" className="contact-label">{t('contact.form.email')}</label>
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.placeholderEmail')}
                className="contact-input"
                id="contact-email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-input">
              <label htmlFor="contact-subject" className="contact-label">{t('contact.form.subject')}</label>
              <input
                type="text"
                name="asunto"
                placeholder={t('contact.form.placeholderSubject')}
                className="contact-input"
                id="contact-subject"
                value={formData.asunto}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-input">
              <label htmlFor="contact-message" className="contact-label">{t('contact.form.message')}</label>
              <textarea
                name="mensaje"
                id="contact-message"
                className="contact-input textarea"
                placeholder={t('contact.form.placeholderMessage')}
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="contact-submit">
              <button type="submit" className="btn" disabled={isSending}>
                {isSending ? (
                  <>
                    {t('contact.form.sending')} <Loader2 className="spinner" size={18} />
                  </>
                ) : (
                  <>
                    {t('contact.form.send')} <Send size={18} />
                  </>
                )}
              </button>
              {feedback.message && (
                <p className={`feedback-message ${feedback.type}`}>
                  {feedback.message}
                </p>
              )}
            </div>
          </form>
        </motion.div>

        <motion.div 
          className="contact-img-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src="/images/Dark.webp" alt="Contact Illustration" className="contact-img" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
