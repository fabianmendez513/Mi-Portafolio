document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('main .section');
    const contactSection = document.querySelector('#contact-section');
  
    function showContactOnly() {
      sections.forEach(sec => {
        if (sec.id === 'contact-section') {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });
    }
  
    // Al hacer clic en cualquier link del sidebar
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        const targetId = link.getAttribute('href').replace('#', '');
  
        if (targetId === 'contact-section') {
          e.preventDefault();
          showContactOnly();
        } else {
          // Volver a mostrar todas las secciones si no es contact
          sections.forEach(sec => sec.style.display = 'block');
        }
      });
    });
  
    // Si la URL viene con #contact-section cargado
    if (window.location.hash === '#contact-section') {
      showContactOnly();
    }
  });