document.addEventListener("DOMContentLoaded", () => {
  
    // Animación para los elementos al hacer scroll
    const animatedElements = document.querySelectorAll(".animate")
    function revealOnScroll() {
      animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        if (elementTop < window.innerHeight - 100) {
          element.classList.add("visible")
        }
      })
    }
    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll()
  
    // Lightbox para imágenes
    const lightbox = document.getElementById("lightbox")
    const lightboxImg = document.getElementById("lightbox-img")
    const closeLightbox = document.querySelector(".close-lightbox")
    const images = document.querySelectorAll(".article-img, .category-image-container img")
  
    images.forEach((image) => {
      image.addEventListener("click", function () {
        lightbox.style.display = "flex"
        lightboxImg.src = this.src
      })
    })
  
    closeLightbox.addEventListener("click", () => {
      lightbox.style.display = "none"
    })
  
    // Cambiar subcategorías al hacer clic
    const subcategories = document.querySelectorAll("#category-list a")
    subcategories.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault()
        // Remover clase active de todos los elementos
        subcategories.forEach((subitem) => {
          subitem.classList.remove("active")
        })
        // Agregar clase active al elemento clickeado
        this.classList.add("active")
      })
    })
  })
  
  