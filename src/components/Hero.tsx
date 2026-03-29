import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Hero.css';

/**
 * Hero component with brand-colored icons and profile photo.
 * Uses Framer Motion for entry animations.
 */
const Hero: React.FC = () => {
  const { t } = useTranslation();

  const stackIcons = [
    { icon: 'java-plain', color: '#007396', title: 'Java' },
    { icon: 'spring-original', color: '#6DB33F', title: 'Spring Boot' },
    { icon: 'react-original', color: '#61DAFB', title: 'React' },
    { icon: 'typescript-plain', color: '#3178C6', title: 'TypeScript' },
    { icon: 'javascript-plain', color: '#F7DF1E', title: 'JavaScript' },
    { icon: 'postgresql-plain', color: '#336791', title: 'PostgreSQL' },
    { icon: 'docker-plain', color: '#2496ED', title: 'Docker' },
    { icon: 'amazonwebservices-plain-wordmark', color: '#FF9900', title: 'AWS' },
  ];

  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="home-subtitle">{t('hero.subtitle')}</span>
          <h1 className="home-title">
            <span>{t('hero.title')}</span> <br />
            {t('hero.role')} <br />
            <span className="home-stack-text">{t('hero.stack')}</span>
          </h1>

          <div className="home-social-stack">
            {stackIcons.map((item, index) => (
              <motion.div
                key={item.icon}
                className="stack-icon-wrapper"
                whileHover={{ scale: 1.2, rotate: 5 }}
                title={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <i className={`devicon-${item.icon}`} style={{ color: item.color }}></i>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="home-img-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="home-blob">
            <img src="/images/profilephoto.webp" alt="Alberto Zompantzi" className="profile-photo" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
