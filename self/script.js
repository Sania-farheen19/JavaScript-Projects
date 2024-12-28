// Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  function animateOnScroll() {
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition < windowHeight - 100) {
        element.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();  // Initial check
});

// Form Submission (Temporary)
document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
});
