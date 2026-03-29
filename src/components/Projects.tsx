import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

/**
 * Projects section with dynamic translation and Framer Motion hover effects.
 * Displays highlighted projects with their tech stack and links.
 */
const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'portfolio',
      img: '/images/portfolio.webp',
      link: 'https://albertozompantzi-portfolio.pages.dev/',
    },
    {
      id: 'divertikids',
      img: '/images/divert.webp',
      link: 'https://divertikids.pages.dev/',
    },
    {
      id: 'casazompantzi',
      img: '/images/casa.webp',
      link: 'https://casazompantzi.pages.dev/',
    },
    {
      id: 'sunnyside',
      img: '/images/Sunnyside.webp',
      link: 'https://sunnysideboutique.pages.dev/',
    },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section-title">{t('portfolio.title')}</h2>
      <p className="section-description">{t('portfolio.subtitle')}</p>

      <div className="portfolio-container container grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="portfolio-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <a href={project.link} target="_blank" rel="noreferrer" className="portfolio-link">
              <div className="portfolio-img-wrapper">
                <img src={project.img} alt={t(`portfolio.items.${project.id}.title`)} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <ExternalLink size={30} />
                </div>
              </div>

              <div className="portfolio-data">
                <h3 className="portfolio-title">{t(`portfolio.items.${project.id}.title`)}</h3>
                <p className="portfolio-subtitle">{t(`portfolio.items.${project.id}.subtitle`)}</p>
                <p className="portfolio-description">{t(`portfolio.items.${project.id}.desc`)}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      <div className="portfolio-footer">
        <a href="https://github.com/Alberto-zompantzi" target="_blank" rel="noreferrer" className="btn btn-github">
          <Github size={20} />
          <span>{t('portfolio.viewMore')}</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
