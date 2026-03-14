//Show Menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//Menu Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//Menu Hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//Remove Menu Mobile
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*change background header*/
function scrollHeader() {
  const header = document.getElementById("header");
  //when the scroll is greater than 50 viewport height, add the scroll-header class to header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*Show Scrollup*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is greater than 350 viewport height, add the show-scroll class to scroll-top class
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/*About Tabs*/

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("tab-active");
    });

    target.classList.add("tab-active");

    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
    });

    tab.classList.add("tab-active");
  });
});

// Wake up Backend (Despierto el servidor en segundo plano)
const wakeupBackend = async () => {
  try {
    const healthUrl = isLocal
        ? "http://localhost:8080/api/v1/contactos/health"
        : "https://portfolio-backend-bjsa.onrender.com/api/v1/contactos/health";

    // Uso fetch normal, si el servidor está dormido, aquí empezará a arrancar
    fetch(healthUrl);
    console.log("Señal de activación enviada al backend...");
  } catch (e) {
    // Error silencioso
  }
};

// Se ejecuta inmediatamente al cargar el script
wakeupBackend();

// Detectar si estamos en local o en producción
const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

// Configurar la URL base automáticamente
const API_BASE_URL = isLocal
    ? "http://localhost:8080"
    : "https://portfolio-backend-bjsa.onrender.com";

console.log(`Conectado a la API en: ${API_BASE_URL}`);

/* Contact Form Integration with EmailJS */
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactSubject = document.getElementById("contact-subject"),
  contactMessage = document.getElementById("contact-message"),
  errorMessage = document.getElementById("error-message"),
  contactBtn = document.getElementById("contact-submit-btn");

const sendEmail = async (e) => {
  e.preventDefault();

  // 1. Validación de campos
  if (
    contactName.value.trim() === "" ||
    contactEmail.value.trim() === "" ||
    contactSubject.value.trim() === "" ||
    contactMessage.value.trim() === ""
  ) {
    errorMessage.style.color = "var(--orange)";
    errorMessage.textContent = "Por favor, completa todos los campos ⚠️";
    return; // Detiene la ejecución
  }

  // 2. Feedback visual de "Enviando"
  contactBtn.disabled = true;
  contactBtn.innerHTML =
    'Enviando... <i class="fa-solid fa-spinner fa-spin"></i>';

  // 3. Preparar los datos para el Backend
  const dataToSave = {
    nombre: contactName.value,
    email: contactEmail.value,
    asunto: contactSubject.value,
    mensaje: contactMessage.value,
  };

  try {
    // --- PASO A: Guardar en tu Backend de Spring Boot ---
    const response = await axios.post(
        `${API_BASE_URL}/api/v1/contactos`, // <--- Ahora usa la variable
        dataToSave
    );
    console.log("Guardado en BD con ID:", response.data.id);

    // ---  Mandar el Email (EmailJS) ---
    // serviceID - templateID - #form - publickey
    await emailjs.sendForm(
      "service_96en384",
      "template_9ry45mb",
      "#contact-form",
      "ZgvYoOJRnRWKWYs4T",
    );

    // ÉXITO TOTAL
    errorMessage.style.color = "var(--mint)";
    errorMessage.textContent = "¡Mensaje guardado y enviado con éxito! ✔️";
    contactForm.reset();
  } catch (error) {
    // ERROR (Puede ser de Axios o de EmailJS)
    console.error("Error detectado:", error);

    // Si el error viene del Backend
    if (error.response && error.response.status === 400) {
      errorMessage.textContent =
        "Error: " + error.response.data.errors[0].defaultMessage;
    } else {
      errorMessage.textContent = "Error al enviar. Intenta de nuevo ❌";
    }

    errorMessage.style.color = "#f44336";
  } finally {
    // Restaurar botón después de 5 segundos
    setTimeout(() => {
      errorMessage.textContent = "";
      contactBtn.disabled = false;
      contactBtn.innerHTML =
        'Enviar Mensaje <i class="fa-solid fa-paper-plane"></i>';
    }, 5000);
  }
};

contactForm.addEventListener("submit", sendEmail);
