document.addEventListener("DOMContentLoaded", () => {
  
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
  
    const subcategories = document.querySelectorAll("#category-list a")
    subcategories.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault()
        subcategories.forEach((subitem) => {
          subitem.classList.remove("active")
        })
        this.classList.add("active")
      })
    })
  })
  
  