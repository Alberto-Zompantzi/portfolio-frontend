import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, MessageSquare } from 'lucide-react';
import './Footer.css';

/**
 * Footer component with brand logo, social links, and copyright information.
 */
const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container container grid">
        <a href="#home" className="footer-logo">
          A.Z.<span>Developer</span>
        </a>

        <div className="footer-socials">
          <a href="https://github.com/Alberto-zompantzi" target="_blank" rel="noreferrer" className="footer-social-link">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/alberto-zompantzi-7897ab399/" target="_blank" rel="noreferrer" className="footer-social-link">
            <Linkedin size={24} />
          </a>
          <a href="https://wa.me/2285720482?" target="_blank" rel="noreferrer" className="footer-social-link">
            <MessageSquare size={24} />
          </a>
        </div>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
