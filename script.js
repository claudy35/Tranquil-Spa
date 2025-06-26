// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});



  const phrases = [
    "Welcome to Tranquil Spa",
    "Relax. Recharge. Renew.",
    "Your wellness is our mission."
  ];

  const el = document.getElementById("typingText");
  let phraseIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeLoop() {
    const currentPhrase = phrases[phraseIndex];
    if (typing) {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentPhrase.length) {
        typing = false;
        setTimeout(typeLoop, 2000); // pause after full text
        return;
      }
    } else {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        typing = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(typeLoop, typing ? 100 : 50); // typing speed
  }

  typeLoop();



  

  const swiper = new Swiper('.gallerySwiper', {
  loop: true,
  loopedSlides: 6, // Set to the number of slides or more
  slidesPerView: 3,
  spaceBetween: 30,

  autoplay: {
    delay: 0, // No delay between slides
    disableOnInteraction: false,
  },

 speed: 3000, // Slower = smoother (in ms)
  freeMode: true, // Enable continuous movement
  freeModeMomentum: false, // Prevent momentum stopping
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});




const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });






