const startDate = new Date("2024-12-13T00:00:00");

function updateLoveCounter() {
  const now = new Date();
  let years   = now.getFullYear()  - startDate.getFullYear();
  let months  = now.getMonth()     - startDate.getMonth();
  let days    = now.getDate()      - startDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const diff    = now - startDate;
  const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60))      % 60);
  const seconds = Math.floor((diff / 1000)             % 60);

  document.getElementById("years").textContent   = years;
  document.getElementById("months").textContent  = months;
  document.getElementById("days").textContent    = days;
  document.getElementById("hours").textContent   = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateLoveCounter();
setInterval(updateLoveCounter, 1000);

// === tsParticles (corações) ===
tsParticles.load("tsparticles", {
  particles: {
    number: { value: 30 },
    size: { value: { min: 5, max: 10 } },
    move: {
      enable: true,
      direction: "bottom",
      speed: 0.5,
      outModes: { default: "out" }
    },
    shape: {
      type: "image",
      image: {
        src: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
        width: 50,
        height: 50
      }
    },
    opacity: { value: 0.8 }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {}
  },
  background: { color: "#000" }
});

// === SoundCloud Player (só se existir o iframe) ===
const iframeElement = document.getElementById('scPlayer');
if (iframeElement) {
  const widget = SC.Widget(iframeElement);
  widget.bind(SC.Widget.Events.READY, () => {
    document.addEventListener('click', () => widget.play(), { once: true });
  });
}

// === Slideshow da galeria ===
const slides = document.querySelectorAll('.gallery-frame .slide');
let current = 0;

function nextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

// Inicia auto-slide a cada 5 segundos
setInterval(nextSlide, 2000);

 window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 800); // espera a transição acabar
    }, 4500); // espera o texto terminar de "digitar"
  });
