document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });

    // Add scroll animations for smooth fade-in effect
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      const sectionPos = section.getBoundingClientRect().top;
      if (sectionPos < window.innerHeight - 100) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  });
  
  
    // Contact form handling
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = "Sending...";
  
      // Simulate form submission
      setTimeout(() => {
        status.textContent = "Thank you! Your message has been sent.";
        form.reset();
      }, 1000);
    });
  });
  