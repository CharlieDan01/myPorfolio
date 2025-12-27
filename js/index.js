// Obtener el año actual y colocarlo en el elemento del footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Diccionario de traducciones
const translations = {
    "en": {
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "nav-skills": "Skills",
        "nav-faq": "FAQ",
        "about-title": "Hi, I'm Daniel 👋",
        "about-description": "I'm a Computer engineer focused on building clean, functional web applications.",
        "projects-title": "Projects",
        "project-title-1": "To-Do List App",
        "project-description-1": "A task management app built with ASP.NET Web Forms and MySQL.",
        "btn-View-p1": "View Project",
        "contact-title": "Contact Me",
        "contact-description": "If you’d like to work together, feel free to reach out!",
        "contact-btn": "Send Email",
        "faq-title": "Question & Answer",
        "faq-q1": "What is your availability for new projects?",
        "faq-a1": "Actually, I am open to new opportunities and projects. Feel free to reach out to discuss how we can collaborate!",
        "faq-q2": "What technologies do you specialize in?",
        "faq-a2": "My main stack includes <strong>C#, Java and web development with ASP.NET</strong>. I also have experience working with SQL Server and MySQL databases.",
        "faq-q3": "¿Do you work remotely?",
        "faq-a3": "Yes, I have experience working in distributed teams and using version control tools like GitHub to maintain an efficient workflow.",
        "skills-title": "Tech Stack",
        "skills-description": "These are the languages, frameworks, and tools I use to build applications:",
        "skills-languages": "Languages",
        "skills-frameworks": "Frameworks",
        "skills-databases": "Databases",
        "skills-tools": "Tools",
        "footer1": "All rights reserved.",
        "btn-translate": "🌐 Traducir a Español"
    },
    "es": {
        "nav-about": "Sobre mí",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "nav-skills": "Habilidades",
        "nav-faq": "Preguntas",
        "about-title": "Hola, soy Daniel 👋",
        "about-description": "Soy un Ingeniero en Computación enfocado en crear aplicaciones web limpias y funcionales.",
        "projects-title": "Proyectos",
        "project-title-1": "Lista de Tareas",
        "project-description-1": "App de gestión de tareas construida con ASP.NET Web Forms y MySQL.",
        "btn-View-p1": "Ver Proyecto",
        "contact-title": "Contáctame",
        "contact-description": "Si te gustaría trabajar conmigo, ¡no dudes en contactarme!",
        "contact-btn": "Enviar Correo",
        "faq-title": "Preguntas y Respuestas",
        "faq-q1": "¿Cuál es tu disponibilidad para nuevos proyectos?",
        "faq-a1": "Actualmente estoy abierto a nuevas oportunidades y proyectos. ¡Siéntete libre de contactarme para colaborar!",
        "faq-q2": "¿En qué tecnologías te especializas?",
        "faq-a2": "Mi stack principal incluye <strong>C#, Java y desarrollo web con ASP.NET</strong>. También tengo experiencia con bases de datos SQL Server y MySQL.",
        "faq-q3": "¿Trabajas de forma remota?",
        "faq-a3": "Sí, tengo experiencia trabajando en equipos distribuidos y usando herramientas como GitHub para mantener un flujo de trabajo eficiente.",
        "skills-title": "Stack Tecnológico",
        "skills-description": "Estos son los lenguajes, frameworks y herramientas que uso:",
        "skills-languages": "Lenguajes",
        "skills-frameworks": "Frameworks",
        "skills-databases": "Bases de Datos",
        "skills-tools": "Herramientas",
        "footer1": "Todos los derechos reservados.",
        "btn-translate": "🌐 Translate to English"
    }
};

let currentLang = "en";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Lógica del año (ya la tenías)
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Lógica de Traducción
    const btnTranslate = document.getElementById("btn-translate");
    
    if (btnTranslate) {
        btnTranslate.addEventListener("click", () => {
            // Cambiar idioma
            currentLang = currentLang === "en" ? "es" : "en";
            
            // Buscar todos los elementos con data-i18n
            const elementsToTranslate = document.querySelectorAll("[data-i18n]");
            
            elementsToTranslate.forEach(element => {
                const key = element.getAttribute("data-i18n");
                
                // Usamos innerHTML para respetar etiquetas como <strong> o saltos de línea
                if (translations[currentLang][key]) {
                    element.innerHTML = translations[currentLang][key];
                }
            });

            // Actualizar el texto del botón
            btnTranslate.innerHTML = translations[currentLang]["btn-translate"];
        });
    }
});