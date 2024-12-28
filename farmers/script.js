// Simple Scroll Animation (can be expanded with more interactivity)
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (section.getBoundingClientRect().top < window.innerHeight) {
        section.classList.add('animate-on-scroll');
      }
    });
  });
  window.onscroll = function () {
    const header = document.querySelector('.unique-header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };  