document.addEventListener("DOMContentLoaded", function() {
  let progressBar = document.getElementById("progress-bar");
  let loaderContainer = document.getElementById("loader-container");
  let width = 0;

  setTimeout(function () {
    document.getElementById("loader-container").style.display = "none";
}, 3000); // Simula una carga de 3 segundos
    // Modo Oscuro
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
    
    const animatedElements = document.querySelectorAll(".animate");
    function revealOnScroll() {
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
          element.classList.add("visible");
        }
      });
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.querySelector(".close-lightbox");
    const images = document.querySelectorAll(".lightbox-trigger");
    
    images.forEach(image => {
      image.addEventListener("click", function() {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
      });
    });
    
    closeLightbox.addEventListener("click", function() {
      lightbox.style.display = "none";
    });

    const audio = document.getElementById("audio");
        const playPauseBtn = document.getElementById("playPauseBtn");
        const volumeControl = document.getElementById("volumeControl");

        // Establecer el volumen inicial al 10%
        audio.volume = 0.1;

        playPauseBtn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                playPauseBtn.textContent = "⏸";
            } else {
                audio.pause();
                playPauseBtn.textContent = "▶️";
            }
        });

        volumeControl.addEventListener("input", () => {
            audio.volume = volumeControl.value;
        });
  });


  