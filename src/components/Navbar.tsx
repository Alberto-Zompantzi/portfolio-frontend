import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Menu,
  X,
  Globe,
  Download,
  Github,
  Linkedin,
  MessageSquare,
} from "lucide-react";
import "./Navbar.css";

/**
 * Navbar component with internationalization, social links, and CV download.
 * Implements a responsive mobile menu and scroll-based background change.
 */
const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <header
      className={`header ${isScrolled ? "scroll-header" : ""}`}
      id="header"
    >
      <nav className="nav">
        <a href="#home" className="nav-logo">
          A.Z.<span>Developer</span>
        </a>

        <div
          className={`nav-menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav-list">
            <li>
              <a href="#home" className="nav-link" onClick={closeMenu}>
                {t("nav.home")}
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={closeMenu}>
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link" onClick={closeMenu}>
                {t("nav.services")}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link" onClick={closeMenu}>
                {t("nav.portfolio")}
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closeMenu}>
                {t("nav.contact")}
              </a>
            </li>
          </ul>

          <div className="nav-close" onClick={toggleMenu}>
            <X size={24} />
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-socials">
            <a
              href="https://github.com/Alberto-zompantzi"
              target="_blank"
              rel="noreferrer"
              className="nav-social-link"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/alberto-zompantzi-7897ab399/"
              target="_blank"
              rel="noreferrer"
              className="nav-social-link"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://wa.me/2285720482?"
              target="_blank"
              rel="noreferrer"
              className="nav-social-link"
            >
              <MessageSquare size={18} />
            </a>
          </div>

          <div className="nav-btns">
            <button
              className="lang-toggle"
              onClick={toggleLanguage}
              title="Change Language"
            >
              <Globe size={18} />
              <span>{(i18n.language || "es").toUpperCase().split("-")[0]}</span>
            </button>

            <a href="#contact" className="nav-link-btn btn contact-btn">
              {t("nav.contactMe")}
            </a>

            <a
              href="/cv-alberto-zompantzi.pdf"
              download
              className="nav-link-btn btn cv-btn"
            >
              <Download size={18} />
              <span className="btn-text">{t("nav.downloadCV")}</span>
            </a>

            <div className="nav-toggle" onClick={toggleMenu}>
              <Menu size={24} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
