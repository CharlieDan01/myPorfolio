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
        // Navegación   
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "nav-buildpc": "Build PC",
        "nav-skills": "Skills",
        "nav-faq": "FAQ",
        //sobre mi  
        "about-title": "About Me",
        "title-description": "Welcome to my portfolio website!",
        "about-description": "I am a Computer Engineer with a passion for creating clean and functional web applications. With experience in C#, Java, and ASP.NET, I enjoy building solutions that solve real-world problems. I am always eager to learn new technologies and collaborate on exciting projects.",
        "carreer": "Computer Engineer",
        "name": "Hi, I'm Daniel",
        //proyectos
        "projects-title": "Projects",
        //contacto
        "contact-title": "Contact Me",
        "contact-description": "If you’d like to work together, feel free to reach out!",
        "contact-btn": "Send Email",
        "social-title": "Social Media",
        //referencias
        "references-title": "References",
        "rating-title": "Califications",
        "service-title": "Services Requested",
        "last-comments": "Last Comments",
        //servicio de ensamblaje de pc   
        "buildpc-title": "Computer Building Service",
        "buildpc-description": "I also offer custom PC building services tailored to your needs. Whether it's for gaming, work, or general use, I can help you assemble the perfect machine.",
        "buildpc-contact-btn": "Commit to us",
        "buildpc-gallery-title": "PC Builds Gallery",
        //preguntas y respuestas    
        "faq-title": "Question & Answer",
        "faq-instruction": "Click in the question if you want to see the answer",
        "faq-q1": "What is your availability for new projects?",
        "faq-a1": "Actually, I am open to new opportunities and projects. Feel free to reach out to discuss how we can collaborate!",
        "faq-q2": "What technologies do you specialize in?",
        "faq-a2": "My main stack includes <strong>C#, Java and web development with ASP.NET</strong>. I also have experience working with SQL Server and MySQL databases.",
        "faq-q3": "¿Do you work remotely?",
        "faq-a3": "Yes, I have experience working in distributed teams and using version control tools like GitHub to maintain an efficient workflow.",
        //habilidades
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
        // Navegación
        "nav-about": "Sobre mí",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "nav-buildpc": "Ensamblaje de PC",
        "nav-skills": "Habilidades",
        "nav-faq": "Preguntas",
        //sobre mi
        "about-title": "Sobre Mí",
        "title-description": "Bienvenido a mi portfolio web!",   
        "about-description": "Soy un Ingeniero en Computación con pasión por crear aplicaciones web limpias y funcionales. Con experiencia en C#, Java y ASP.NET, disfruto construyendo soluciones que resuelven problemas del mundo real. Siempre estoy ansioso por aprender nuevas tecnologías y colaborar en proyectos emocionantes.",
        "carreer": "Ingeniero en Informática",
        "name": "Hola, soy Daniel",
        //proyectos
        "projects-title": "Proyectos",
        //contacto  
        "contact-title": "Contáctame",
        "contact-description": "Si te gustaría trabajar conmigo, ¡no dudes en contactarme!",
        "contact-btn": "Enviar Correo",
        "social-title": "Redes Sociales",
        //servicio de ensamblaje de pc
        "buildpc-title": "Servicio de Ensamblaje de PCs",
        "buildpc-description": "También ofrezco servicios de ensamblaje de PCs personalizados según tus necesidades. Ya sea para gaming, trabajo o uso general, puedo ayudarte a armar la máquina perfecta.",
        "buildpc-contact-btn": "Cotiza con nosotros",
        //referencias
        "references-title":"Referencias",
        "rating-title": "Calificaciones",
        "service-title": "Servicios Solicitados",
        "buildpc-gallery-title": "Galería de Ensamblajes",
        "last-comments": "Últimos Comentarios",
        //preguntas y respuestas
        "faq-title": "Preguntas y Respuestas",
        "faq-instruction": "Haz clic en la pregunta si quieres ver la respuesta",
        "faq-q1": "¿Cuál es tu disponibilidad para nuevos proyectos?",
        "faq-a1": "Actualmente estoy abierto a nuevas oportunidades y proyectos. ¡Siéntete libre de contactarme para colaborar!",
        "faq-q2": "¿En qué tecnologías te especializas?",
        "faq-a2": "Mi stack principal incluye <strong>C#, Java y desarrollo web con ASP.NET</strong>. También tengo experiencia con bases de datos SQL Server y MySQL.",
        "faq-q3": "¿Trabajas de forma remota?",
        "faq-a3": "Sí, tengo experiencia trabajando en equipos distribuidos y usando herramientas como GitHub para mantener un flujo de trabajo eficiente.",
        //habilidades
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
// Función para traducir el contenido
// Escuchar el clic en el botón de traducción
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
// Lógica para cargar proyectos desde GitHub en un contenedor específico
document.addEventListener("DOMContentLoaded", () => {
    // 1. ESCRIBE AQUÍ LOS NOMBRES DE TUS REPOS EXACTAMENTE COMO ESTÁN EN GITHUB
    const myProjects = ["todolist", "WeatherWithApi"]; 
    const githubUser = "CharlieDan01";
    const container = document.getElementById("github-projects-container");

    async function fetchProjects() {
        try {
            container.innerHTML = ""; // Limpiar el spinner de carga

            for (const repoName of myProjects) {
                const response = await fetch(`https://api.github.com/repos/${githubUser}/${repoName}`);
                const repo = await response.json();

                if (response.ok) {
                    renderCard(repo);
                }
            }
        } catch (error) {
            console.error("Error al cargar repositorios:", error);
            container.innerHTML = "<p class='text-center'>Error loading projects.</p>";
        }
    }

    function renderCard(repo) {
        // Usamos una imagen por defecto si el repo no tiene "Social Preview"
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm h-100 skill-category-card" style="border: 1px solid rgba(255,255,255,0.1);">
                    <div class="card-body d-flex flex-direction-column flex-column">
                        <h5 class="card-title fw-bold text-primary">${repo.name}</h5>
                        <p class="card-text text-secondary small" style="flex: 1;">
                            ${repo.description || "No description available."}
                        </p>
                        <div class="mt-3">
                            <span class="badge bg-dark text-info border border-info mb-3">${repo.language || 'Code'}</span>
                        </div>
                        <a href="${repo.html_url}" class="btn btn-outline-success btn-sm w-100" target="_blank">
                            View Repository
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    }

    fetchProjects();
});
// Lógica para cargar datos de Google Sheets y renderizar un gráfico con Chart.js
document.addEventListener("DOMContentLoaded", () => {
    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRA4fpMr2qjo6QMyGm-tEACdHyPDMWhYAJ-mkYqNlmfijRoqIrLKVVSvB4ZIcWxZHhV6IWFN7DA0cRC/pub?gid=222894092&single=true&output=csv";
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(csvUrl + "&t=" + new Date().getTime())}`;

    // Capturamos los 3 contenedores
    const ratingCanvas = document.getElementById('ratingChart');
    const serviceCanvas = document.getElementById('serviceChart');
    const commentsList = document.getElementById('commentsList');

    if (!ratingCanvas || !serviceCanvas) return; 
    
    async function getData() {
        try {
            const response = await fetch(proxyUrl);
            if (!response.ok) throw new Error("Error de red con el proxy.");
            const data = await response.text();

            const lines = data.split(/\r?\n/).filter(line => line.trim() !== "");
            const separator = lines[0].includes(";") ? ";" : ",";
            
            // Contenedores para organizar la información
            const ratingCounts = { "5": 0, "4": 0, "3": 0, "2": 0, "1": 0 };
            const serviceCounts = {};
            const commentsArray = [];

            // Extraer datos fila por fila
            for (let i = 1; i < lines.length; i++) {
                const regex = new RegExp(`${separator}(?=(?:(?:[^"]*"){2})*[^"]*$)`);
                const cols = lines[i].split(regex);
                
                const rating = cols[2]?.replace(/"/g, "").trim();   // Columna C
                const service = cols[3]?.replace(/"/g, "").trim();  // Columna D
                const comment = cols[4]?.replace(/"/g, "").trim();  // Columna E
                
                // 1. Sumar Calificaciones
                if(rating && ratingCounts[rating] !== undefined) {
                    ratingCounts[rating]++;
                }

                // 2. Sumar Servicios
                if(service) {
                    serviceCounts[service] = (serviceCounts[service] || 0) + 1;
                }

                // 3. Guardar Comentarios (si no están vacíos)
                if(comment && comment.length > 2) {
                    commentsArray.push(comment);
                }
            }

            // --- LLAMAR A LAS GRÁFICAS ---
            
            // Gráfica de Dona (Calificaciones)
            renderDoughnutChart(
                ['1 Estrella', '2 Estrellas', '3 Estrellas', '4 Estrellas', '5 Estrellas'], 
                [ratingCounts["1"], ratingCounts["2"], ratingCounts["3"], ratingCounts["4"], ratingCounts["5"]]
            );

            // Gráfica de Barras Horizontales (Servicios)
            renderServiceChart(Object.keys(serviceCounts), Object.values(serviceCounts));

            // Dibujar los comentarios de texto
            renderComments(commentsArray);

        } catch (error) {
            console.error("Fallo al graficar:", error);
        }
    }

    // --- FUNCIONES DE DIBUJO ---

    function renderDoughnutChart(labels, chartData) {
        new Chart(ratingCanvas.getContext('2d'), {
            type: 'doughnut', // <--- ¡AQUÍ ESTÁ LA MAGIA DE LA DONA!
            data: {
                labels: labels,
                datasets: [{
                    data: chartData,
                    // Colores desde el rojo (1) hasta el morado (5)
                    backgroundColor: ['#dc3545', '#fd7e14', '#ffc107', '#20c997', '#c4a4ff'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom', labels: { color: 'white' } }
                }
            }
        });
    }

    function renderServiceChart(labels, chartData) {
        new Chart(serviceCanvas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Cantidad',
                    data: chartData,
                    backgroundColor: '#0dcaf0', // Azul claro (info)
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y', // <--- Convierte las barras verticales en horizontales
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    x: { ticks: { color: 'white', stepSize: 1 }, grid: { color: 'rgba(255,255,255,0.1)' } },
                    y: { ticks: { color: 'white' }, grid: { display: false } }
                }
            }
        });
    }

    function renderComments(comments) {
        if(!commentsList) return;
        commentsList.innerHTML = "";
        
        // Tomamos los últimos 4 comentarios más recientes
        comments.reverse().slice(0, 4).forEach(text => {
            const card = `
                <div class="card bg-black border-secondary text-white p-3 m-2 shadow-sm" style="max-width: 250px; flex: 1 1 auto; border: 1px solid #444;">
                    <p class="fst-italic mb-0 text-secondary">"${text}"</p>
                </div>
            `;
            commentsList.innerHTML += card;
        });
    }

    getData();
});