import { useState, type FC, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Database, Layout, Cloud, GitBranch, Terminal, 
  Briefcase, GraduationCap, Award
} from 'lucide-react';
import './About.css';

/**
 * About component with tabbed content for Skills, Experience, Education, and Certifications.
 * Uses Framer Motion for smooth tab transitions.
 */
const About: FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: t('about.tabs.skills'), icon: <Code2 size={18} /> },
    { id: 'experience', label: t('about.tabs.experience'), icon: <Briefcase size={18} /> },
    { id: 'education', label: t('about.tabs.education'), icon: <GraduationCap size={18} /> },
    { id: 'certifications', label: t('about.tabs.certifications'), icon: <Award size={18} /> },
  ];

  return (
    <section className="about section" id="about">
      <div className="about-container container grid">
        <motion.div 
          className="about-img-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src="/images/aboutphoto.webp" alt="Alberto's Desk" className="about-img" />
        </motion.div>

        <div className="about-content">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="about-description">{t('about.description')}</p>

          <div className="tabs-buttons">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tabs-button ${activeTab === tab.id ? 'tab-active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="tabs-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'skills' && (
                  <div className="tabs-item skills-grid">
                    <SkillItem icon={<Code2 style={{ color: '#007396' }} />} title={t('about.skills.backend.title')} desc={t('about.skills.backend.desc')} />
                    <SkillItem icon={<Layout style={{ color: '#61DAFB' }} />} title={t('about.skills.frontend.title')} desc={t('about.skills.frontend.desc')} />
                    <SkillItem icon={<Database style={{ color: '#336791' }} />} title={t('about.skills.data.title')} desc={t('about.skills.data.desc')} />
                    <SkillItem icon={<Cloud style={{ color: '#FF9900' }} />} title={t('about.skills.infrastructure.title')} desc={t('about.skills.infrastructure.desc')} />
                    <SkillItem icon={<GitBranch style={{ color: '#F05032' }} />} title={t('about.skills.workflow.title')} desc={t('about.skills.workflow.desc')} />
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="tabs-item experience-list">
                    <ExperienceItem 
                      title={t('about.experience.items.divertikids.title')} 
                      subtitle={t('about.experience.items.divertikids.subtitle')} 
                      link="https://divertikids.pages.dev/"
                      desc={t('about.experience.items.divertikids.desc')}
                      viewProject={t('about.experience.viewProject')}
                    />
                    <ExperienceItem 
                      title={t('about.experience.items.casazompantzi.title')} 
                      subtitle={t('about.experience.items.casazompantzi.subtitle')} 
                      link="https://casazompantzi.pages.dev/"
                      desc={t('about.experience.items.casazompantzi.desc')}
                      viewProject={t('about.experience.viewProject')}
                    />
                    <ExperienceItem 
                      title={t('about.experience.items.sunnyside.title')} 
                      subtitle={t('about.experience.items.sunnyside.subtitle')} 
                      link="https://sunnysideboutique.pages.dev/"
                      desc={t('about.experience.items.sunnyside.desc')}
                      viewProject={t('about.experience.viewProject')}
                    />
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="tabs-item education-info">
                    <h3 className="edu-title">{t('about.education.title')}</h3>
                    <p className="edu-school">{t('about.education.school')}</p>
                    <p className="edu-desc">{t('about.education.desc')}</p>
                  </div>
                )}

                {activeTab === 'certifications' && (
                  <div className="tabs-item certifications-grid">
                    <CertItem icon={<Cloud />} title={t('about.certifications.items.aws.title')} desc={t('about.certifications.items.aws.desc')} />
                    <CertItem icon={<GitBranch />} title={t('about.certifications.items.git.title')} desc={t('about.certifications.items.git.desc')} />
                    <CertItem icon={<Terminal />} title={t('about.certifications.items.docker.title')} desc={t('about.certifications.items.docker.desc')} />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillItem: FC<{ icon: ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="skill-item">
    <div className="skill-header">
      {icon}
      <h4>{title}</h4>
    </div>
    <p>{desc}</p>
  </div>
);

const ExperienceItem: FC<{ title: string; subtitle: string; link: string; desc: string; viewProject: string }> = ({ title, subtitle, link, desc, viewProject }) => (
  <div className="experience-item">
    <div className="exp-header">
      <h4>{title}</h4>
      <a href={link} target="_blank" rel="noreferrer" className="exp-link">{viewProject}</a>
    </div>
    <span className="exp-subtitle">{subtitle}</span>
    <p className="exp-desc">{desc}</p>
  </div>
);

const CertItem: FC<{ icon: ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="cert-item">
    <div className="cert-header">
      {icon}
      <h4>{title}</h4>
    </div>
    <p>{desc}</p>
  </div>
);

export default About;
