// Información técnica para cada sección (Data de inspección)
const sectionData = {
  header: {
    title: "Header / Navbar",
    desc: "Encabezado principal para la navegación básica del sitio.",
    elements: [
      "Logotipo corporativo (conlace a Inicio)",
      "Menú de navegación principal",
      "Botón de Llamado a la Acción (CTA)"
    ],
    mobileNote: "En pantallas móviles, la navegación suele colapsarse dentro de un botón de menú hamburguesa (🍔)."
  },
  hero: {
    title: "Hero Section",
    desc: "Sección de alto impacto diseñada para captar la atención inmediata del visitante.",
    elements: [
      "Titular principal (H1) con la propuesta de valor",
      "Subtítulo explicativo breve",
      "Botones primarios y secundarios de conversión",
      "Imagen, mockup interactivo o video de muestra"
    ],
    mobileNote: "En dispositivos móviles la imagen se posiciona debajo del texto y botones para mantener la lectura fluida."
  },
  features: {
    title: "Features / Características",
    desc: "Muestra los pilares, servicios o ventajas principales del producto.",
    elements: [
      "Encabezado de sección",
      "Cuadrícula de tarjetas de características",
      "Iconos ilustrativos y descripciones sintéticas"
    ],
    mobileNote: "La cuadrícula pasa de 3 columnas en escritorio a 1 sola columna vertical en móviles."
  },
  testimonials: {
    title: "Prueba Social / Testimonios",
    desc: "Genera confianza mostrando opiniones de usuarios o clientes reales.",
    elements: [
      "Tarjetas de testimonios con citas directas",
      "Identificación del autor (Avatar, Nombre, Cargo/Empresa)"
    ],
    mobileNote: "Se convierte en un carrusel deslizable o en una lista vertical según el espacio."
  },
  footer: {
    title: "Footer / Pie de página",
    desc: "Cierre de la página con enlaces secundarios e información legal.",
    elements: [
      "Reiteración del Isotipo / Logo",
      "Enlaces a Políticas de Privacidad y Términos",
      "Derechos de autor (Copyright)"
    ],
    mobileNote: "Se apilan los enlaces de manera centralizada para facilitar la pulsación táctil."
  }
};

// Selección de Elementos del DOM
const viewport = document.getElementById('viewport');
const btnDesktop = document.getElementById('btn-desktop');
const btnMobile = document.getElementById('btn-mobile');
const btnGrid = document.getElementById('btn-grid');
const sections = document.querySelectorAll('.wf-section');

// Elementos del Panel de Inspección
const inspectTitle = document.getElementById('inspect-title');
const inspectDesc = document.getElementById('inspect-desc');
const inspectList = document.getElementById('inspect-list');
const inspectMobileNote = document.getElementById('inspect-mobile-note');

// Evento: Cambiar a Vista Escritorio
btnDesktop.addEventListener('click', () => {
  viewport.classList.remove('mobile');
  viewport.classList.add('desktop');
  btnDesktop.classList.add('active');
  btnMobile.classList.remove('active');
});

// Evento: Cambiar a Vista Móvil
btnMobile.addEventListener('click', () => {
  viewport.classList.remove('desktop');
  viewport.classList.add('mobile');
  btnMobile.classList.add('active');
  btnDesktop.classList.remove('active');
});

// Evento: Alternar Rejilla/Grid
btnGrid.addEventListener('click', () => {
  viewport.classList.toggle('show-grid');
  btnGrid.classList.toggle('active');
});

// Evento: Hacer clic en las secciones del wireframe para actualizar el Inspector
sections.forEach(section => {
  section.addEventListener('click', () => {
    // Quitar la clase 'active' de todas las secciones y aplicarla a la seleccionada
    sections.forEach(s => s.classList.remove('active'));
    section.classList.add('active');

    // Obtener la clave de la sección
    const sectionKey = section.getAttribute('data-section');
    const data = sectionData[sectionKey];

    if (data) {
      // Actualizar el panel lateral
      inspectTitle.textContent = data.title;
      inspectDesc.textContent = data.desc;
      inspectMobileNote.textContent = data.mobileNote;

      // Limpiar y actualizar lista de elementos
      inspectList.innerHTML = '';
      data.elements.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        inspectList.appendChild(li);
      });
    }
  });
});