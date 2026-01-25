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

/* Contact Form Integration with EmailJS */
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactSubject = document.getElementById("contact-subject"),
  contactMessage = document.getElementById("contact-message"),
  errorMessage = document.getElementById("error-message"),
  contactBtn = document.getElementById("contact-submit-btn");

const sendEmail = (e) => {
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

  // 3. Envío con EmailJS
  // serviceID - templateID - #form - publickey
  emailjs
    .sendForm(
      "service_96en384",
      "template_9ry45mb",
      "#contact-form",
      "ZgvYoOJRnRWKWYs4T",
    )
    .then(
      () => {
        // ÉXITO
        errorMessage.style.color = "var(--mint)";
        errorMessage.textContent = "¡Mensaje enviado con éxito! ✔️";

        contactForm.reset();

        // Restaurar botón
        setTimeout(() => {
          errorMessage.textContent = "";
          contactBtn.disabled = false;
          contactBtn.innerHTML =
            'Enviar Mensaje <i class="fa-solid fa-paper-plane"></i>';
        }, 5000);
      },
      (error) => {
        // ERROR
        contactBtn.disabled = false;
        contactBtn.innerHTML =
          'Reintentar <i class="fa-solid fa-triangle-exclamation"></i>';
        errorMessage.style.color = "#f44336";
        errorMessage.textContent = "Error del servidor. Intenta de nuevo ❌";
        console.error("EmailJS Error:", error);
      },
    );
};

contactForm.addEventListener("submit", sendEmail);
