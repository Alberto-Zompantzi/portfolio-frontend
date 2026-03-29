import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Layout, Cloud, GitBranch, Cpu 
} from 'lucide-react';
import './Services.css';

/**
 * Services component showcasing specialized technical offerings.
 * Uses Lucide icons and Framer Motion for scroll animations.
 */
const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    { id: 'backend', icon: <Code2 size={40} /> },
    { id: 'data', icon: <Database size={40} /> },
    { id: 'frontend', icon: <Layout size={40} /> },
    { id: 'devops', icon: <Cloud size={40} /> },
    { id: 'productivity', icon: <GitBranch size={40} /> },
    { id: 'ia', icon: <Cpu size={40} /> },
  ];

  return (
    <section className="services section" id="services">
      <h2 className="section-title">{t('services.title')}</h2>
      <p className="section-description">{t('services.subtitle')}</p>

      <div className="services-container container grid">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="services-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="services-icon-wrapper">
              {service.icon}
            </div>
            <h3 className="services-title-card">{t(`services.items.${service.id}.title`)}</h3>
            <p className="services-description-card">{t(`services.items.${service.id}.desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
