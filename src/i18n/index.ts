import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",
        downloadCV: "Download CV",
        contactMe: "Contact Me",
      },
      hero: {
        subtitle: "Software Engineer",
        title: "Alberto Zompantzi",
        role: "Fullstack Developer",
        stack: "(Spring - React)",
      },
      about: {
        title: "About Me",
        description:
          "I am Alberto Zompantzi, a Fullstack Software Engineer specializing in the Java/Spring Boot and React ecosystem. My approach combines solid software engineering with the efficiency of modern tools like Cursor and Claude. I hold official certifications in AWS Cloud Practitioner and GitHub Foundations, supporting my ability to manage the full development lifecycle: from database design in MySQL/PostgreSQL to containerization with Docker and scalable cloud deployment. I rigorously apply best practices and design patterns to deliver clean and maintainable code.",
        tabs: {
          skills: "Main Skills",
          experience: "Experience & Projects",
          education: "Education",
          certifications: "Certifications",
        },
        skills: {
          backend: {
            title: "Backend Engineering",
            desc: "Designing RESTful APIs with Java and Spring Boot, applying SOLID principles, design patterns, and robust data validation. Focus on consistent error handling, manual testing with Postman, and stable cloud deployment.",
          },
          frontend: {
            title: "Frontend Development",
            desc: "Creating reactive interfaces with React and JavaScript, efficient API consumption, and responsive layouts with CSS Grid/Flexbox. I prioritize clear and fast experiences, using AI tools like Cursor and Claude for faster refactors and documentation.",
          },
          data: {
            title: "Data Management",
            desc: "Modeling and optimization in PostgreSQL and MySQL, with experience in cloud databases like Neon and persistence with JPA/Hibernate.",
          },
          infrastructure: {
            title: "Cloud & Infrastructure",
            desc: "Knowledge in AWS and service deployment with Docker, Render, and Cloudflare Pages, following environment variable best practices and 12-factor apps.",
          },
          workflow: {
            title: "Workflow & Tools",
            desc: "Professional use of Git, GitHub, and Bash terminal for clean workflows, code reviews, and automation of recurring tasks.",
          },
        },
        experience: {
          viewProject: "View Project",
          items: {
            divertikids: {
              title: "DivertiKids",
              subtitle: "React SPA · Spring Boot API · PostgreSQL",
              desc: "Fullstack platform for children's event reservations. Built with React + Vite, Spring Boot, and PostgreSQL (Neon).",
            },
            casazompantzi: {
              title: "Casa Zompantzi",
              subtitle: "React · Technical SEO · Cloudflare",
              desc: "Corporate site optimized for Core Web Vitals and local SEO, built with React and deployed on Cloudflare Pages.",
            },
            sunnyside: {
              title: "Sunnyside Boutique",
              subtitle: "UI/UX · CSS Grid / Flexbox · Mobile First",
              desc: "Advanced implementation of responsive layouts with modern CSS methodologies and asset optimization.",
            },
          },
        },
        education: {
          title: "Bachelor of Computer Systems",
          school: "Puebla State Distance Education Institute (2025 – Present)",
          desc: "Focus on Data Structures, Algorithms, Software Engineering, and Modern Web Development.",
        },
        certifications: {
          items: {
            aws: {
              title: "AWS Cloud Practitioner (DataCamp)",
              desc: "Cloud computing concepts, AWS core services, security, and cost management.",
            },
            git: {
              title: "Git & GitHub Foundations (DataCamp)",
              desc: "Professional repository management, Pull Requests, and collaborative flows.",
            },
            docker: {
              title: "Docker & Bash for Development",
              desc: "Containerization and automation scripts for development and deployment.",
            },
          },
        },
      },
      services: {
        title: "Technical & Specialized Services",
        subtitle:
          "Services oriented towards Java/Spring Boot Backend architecture, modern Frontend development, and light DevOps flows connecting the entire software lifecycle.",
        items: {
          backend: {
            title: "Backend Architecture with Java & Spring Boot",
            desc: "Robust RESTful API design with Java 21 and Spring Boot 3, applying SOLID principles, Bean Validation, and structured error handling. Focus on maintainable code and well-defined layers.",
          },
          data: {
            title: "Data Modeling & PostgreSQL/MySQL",
            desc: "Relational schema design in PostgreSQL (Neon) and MySQL, mapped with JPA/Hibernate. Query optimization, indexing, and business-oriented persistence strategies.",
          },
          frontend: {
            title: "React Frontend & Business-Oriented UX",
            desc: "Building interfaces with React and modern JavaScript, efficient API consumption, and responsive layouts. Focus on usability, information clarity, and perceived performance.",
          },
          devops: {
            title: "Light DevOps: Docker, CI/CD & Cloud",
            desc: "Containerizing services with Docker, deployments on Render, and frontends on Cloudflare Pages. Use of environment variables and 12-factor best practices.",
          },
          productivity: {
            title: "Productivity with Shell, Git & Terminal",
            desc: "Professional workflow with Git/GitHub, clear work branches, and habitual automation from Bash terminal. Focus on traceability and secure deployments.",
          },
          ia: {
            title: "AI-Assisted Development Flows",
            desc: "Integration of Cursor, Claude, and other AIs to accelerate refactors, documentation, and testing, always maintaining human control over architecture and quality.",
          },
        },
      },
      portfolio: {
        title: "Projects",
        subtitle:
          "Fullstack solutions combining Java/Spring Boot, PostgreSQL, and modern React/JS frontends, deployed in real production environments.",
        viewMore: "View more on GitHub",
        items: {
          portfolio: {
            title: "Fullstack Portfolio",
            subtitle: "Java/Spring Boot · PostgreSQL · React + TS",
            desc: "High-performance frontend connected to a custom backend in Spring Boot and PostgreSQL (Neon) for lead and contact message management.",
          },
          divertikids: {
            title: "DivertiKids",
            subtitle: "React SPA · Spring Boot API · PostgreSQL (Neon)",
            desc: "Fullstack platform for children's event reservations: React frontend, Spring Boot REST API, and reservation persistence in PostgreSQL deployed in the cloud.",
          },
          casazompantzi: {
            title: "Casa Zompantzi",
            subtitle: "React · Technical SEO · Cloudflare",
            desc: "Corporate site optimized for Core Web Vitals and local SEO, built with React and deployed on Cloudflare Pages using a design system based on CSS variables.",
          },
          sunnyside: {
            title: "Sunnyside Boutique",
            subtitle: "UI/UX · CSS Grid / Flexbox · Mobile First",
            desc: "Advanced implementation of responsive layouts with modern CSS methodologies and asset optimization for fast loading.",
          },
        },
      },
      contact: {
        title: "Contact",
        description:
          "I am currently open to new opportunities and collaborations. If you are looking for a Fullstack Software Engineer committed to efficient code, let's talk about your next project.",
        form: {
          name: "Name",
          email: "E-mail",
          subject: "Subject",
          message: "Message",
          placeholderName: "e.g. Alberto Zompantzi",
          placeholderEmail: "your@email.com",
          placeholderSubject: "How can I help you?",
          placeholderMessage: "Briefly describe your idea or proposal...",
          send: "Send Message",
          sending: "Sending...",
          success: "Message saved and sent successfully! ✔️",
          error: "Error sending. Try again ❌",
          required: "Please fill in all fields ⚠️",
        },
      },
      footer: {
        rights: "All rights reserved.",
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Sobre mí",
        services: "Servicios",
        portfolio: "Portafolio",
        contact: "Contacto",
        downloadCV: "Descargar CV",
        contactMe: "Contáctame",
      },
      hero: {
        subtitle: "Software Engineer",
        title: "Alberto Zompantzi",
        role: "Fullstack Developer",
        stack: "(Spring - React)",
      },
      about: {
        title: "Sobre mí",
        description:
          "Soy Alberto Zompantzi, Fullstack Software Engineer especializado en el ecosistema Java/Spring Boot y React. Mi enfoque combina la ingeniería de software sólida con la eficiencia de herramientas modernas como Cursor y Claude. Cuento con certificaciones oficiales en AWS Cloud Practitioner y GitHub Foundations, lo que respalda mi capacidad para gestionar el ciclo de vida completo del desarrollo: desde el diseño de bases de datos en MySQL/PostgreSQL hasta la contenedorización con Docker y el despliegue escalable en la nube. Aplico rigurosamente buenas prácticas y patrones de diseño para entregar código limpio y mantenible.",
        tabs: {
          skills: "Habilidades principales",
          experience: "Experiencia y proyectos",
          education: "Formación académica",
          certifications: "Certificaciones",
        },
        skills: {
          backend: {
            title: "Backend Engineering",
            desc: "Diseño de APIs RESTful con Java y Spring Boot, aplicando principios SOLID, patrones de diseño y validación robusta de datos. Enfoque en manejo de errores consistente, pruebas manuales con Postman y despliegue estable en servicios cloud.",
          },
          frontend: {
            title: "Frontend Development",
            desc: "Creación de interfaces reactivas con React y JavaScript, consumo eficiente de APIs y layouts responsivos con CSS Grid/Flexbox. Priorizo experiencias claras y rápidas, apoyándome en herramientas de IA como Cursor y Claude para acelerar refactors y documentación.",
          },
          data: {
            title: "Gestión de Datos",
            desc: "Modelado y optimización en PostgreSQL y MySQL, con experiencia en bases de datos en la nube como Neon y persistencia con JPA/Hibernate.",
          },
          infrastructure: {
            title: "Cloud & Infraestructura",
            desc: "Conocimientos en AWS y despliegue de servicios con Docker, Render y Cloudflare Pages, siguiendo buenas prácticas de variables de entorno y 12-factor apps.",
          },
          workflow: {
            title: "Workflow & Herramientas",
            desc: "Uso profesional de Git, GitHub y terminal Bash para flujos de trabajo limpios, revisiones de código y automatización de tareas recurrentes.",
          },
        },
        experience: {
          viewProject: "Ver Proyecto",
          items: {
            divertikids: {
              title: "DivertiKids",
              subtitle: "React SPA · Spring Boot API · PostgreSQL",
              desc: "Plataforma Fullstack para reservas de eventos infantiles. Construida con React + Vite, Spring Boot y PostgreSQL (Neon).",
            },
            casazompantzi: {
              title: "Casa Zompantzi",
              subtitle: "React · SEO Técnico · Cloudflare",
              desc: "Sitio corporativo optimizado para Core Web Vitals y SEO local, construido con React y desplegado en Cloudflare Pages.",
            },
            sunnyside: {
              title: "Sunnyside Boutique",
              subtitle: "UI/UX · CSS Grid / Flexbox · Mobile First",
              desc: "Implementación avanzada de layouts responsivos con metodologías CSS modernas y optimización de activos.",
            },
          },
        },
        education: {
          title: "Licenciatura en Sistemas Computacionales",
          school: "Instituto De Educación A Distancia Del Estado De Puebla (2025 – Presente)",
          desc: "Enfoque en Estructuras de Datos, Algoritmos, Ingeniería de Software y Desarrollo Web Moderno.",
        },
        certifications: {
          items: {
            aws: {
              title: "AWS Cloud Practitioner (DataCamp)",
              desc: "Conceptos de computación en la nube, servicios principales de AWS, seguridad y gestión de costos.",
            },
            git: {
              title: "Git & GitHub Foundations (DataCamp)",
              desc: "Gestión profesional de repositorios, Pull Requests y flujos colaborativos.",
            },
            docker: {
              title: "Docker & Bash para Desarrollo",
              desc: "Contenerización y scripts de automatización para desarrollo y despliegue.",
            },
          },
        },
      },
      services: {
        title: "Servicios Técnicos & Especializados",
        subtitle:
          "Servicios orientados a arquitectura Backend Java/Spring Boot, desarrollo Frontend moderno y flujos DevOps ligeros que conectan todo el ciclo de vida del software.",
        items: {
          backend: {
            title: "Arquitectura Backend con Java & Spring Boot",
            desc: "Diseño de APIs RESTful robustas con Java 21 y Spring Boot 3, aplicando principios SOLID, validaciones con Bean Validation y manejo estructurado de errores. Enfoque en código mantenible y capas bien definidas.",
          },
          data: {
            title: "Modelado de Datos & PostgreSQL/MySQL",
            desc: "Diseño de esquemas relacionales en PostgreSQL (Neon) y MySQL, mapeados con JPA/Hibernate. Optimización de consultas, índices y estrategias de persistencia orientadas a aplicaciones de negocio reales.",
          },
          frontend: {
            title: "Frontend React & UX orientada a negocio",
            desc: "Construcción de interfaces con React y JavaScript moderno, consumo eficiente de APIs y layouts responsivos. Foco en usabilidad, claridad de información y rendimiento percibido.",
          },
          devops: {
            title: "DevOps Ligero: Docker, CI/CD & Cloud",
            desc: "Contenerización de servicios con Docker, despliegues en Render y frontends en Cloudflare Pages. Uso de variables de entorno y buenas prácticas 12-factor.",
          },
          productivity: {
            title: "Productividad con Shell, Git & Terminal",
            desc: "Flujo profesional con Git/GitHub, ramas de trabajo claras y automatización habitual desde terminal Bash. Enfoque en trazabilidad y despliegues seguros.",
          },
          ia: {
            title: "Flujos de Desarrollo Asistidos por IA",
            desc: "Integración de Cursor, Claude y otras IAs para acelerar refactors, documentación y pruebas, manteniendo siempre control humano sobre arquitectura y calidad.",
          },
        },
      },
      portfolio: {
        title: "Proyectos",
        subtitle:
          "Soluciones Fullstack que combinan Java/Spring Boot, PostgreSQL y frontends modernos en React y JS, desplegados en entornos productivos reales.",
        viewMore: "Ver más en GitHub",
        items: {
          portfolio: {
            title: "Portfolio Fullstack",
            subtitle: "Java/Spring Boot · PostgreSQL · React + TS",
            desc: "Frontend de alto rendimiento conectado a un backend propio en Spring Boot y PostgreSQL (Neon) para la gestión de leads y mensajes de contacto.",
          },
          divertikids: {
            title: "DivertiKids",
            subtitle: "React SPA · Spring Boot API · PostgreSQL (Neon)",
            desc: "Plataforma Fullstack para reservas de eventos infantiles: frontend en React, API REST en Spring Boot y persistencia de reservas en PostgreSQL desplegado en la nube.",
          },
          casazompantzi: {
            title: "Casa Zompantzi",
            subtitle: "React · SEO Técnico · Cloudflare",
            desc: "Sitio corporativo optimizado para Core Web Vitals y SEO local, construido con React y desplegado en Cloudflare Pages usando un sistema de diseño basado en CSS variables.",
          },
          sunnyside: {
            title: "Sunnyside Boutique",
            subtitle: "UI/UX · CSS Grid / Flexbox · Mobile First",
            desc: "Implementación avanzada de layouts responsivos con metodologías CSS modernas y optimización de activos para carga rápida.",
          },
        },
      },
      contact: {
        title: "Contacto",
        description:
          "Actualmente estoy abierto a nuevas oportunidades y colaboraciones. Si buscas un Fullstack Software Engineer comprometido con el código eficiente, hablemos de tu próximo proyecto.",
        form: {
          name: "Nombre",
          email: "E-mail",
          subject: "Asunto",
          message: "Mensaje",
          placeholderName: "Ej. Alberto Zompantzi",
          placeholderEmail: "tu@correo.com",
          placeholderSubject: "¿En qué puedo ayudarte?",
          placeholderMessage: "Describe brevemente tu idea o propuesta...",
          send: "Enviar Mensaje",
          sending: "Enviando...",
          success: "¡Mensaje guardado y enviado con éxito! ✔️",
          error: "Error al enviar. Intenta de nuevo ❌",
          required: "Por favor, completa todos los campos ⚠️",
        },
      },
      footer: {
        rights: "Todos los derechos reservados.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // Set Spanish as default
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
