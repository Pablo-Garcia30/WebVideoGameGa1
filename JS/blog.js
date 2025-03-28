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
    const images = document.querySelectorAll(".featured-img, .post-img, .popular-post-img")
  
    images.forEach((image) => {
      image.addEventListener("click", function () {
        lightbox.style.display = "flex"
        lightboxImg.src = this.src
      })
    })
  
    closeLightbox.addEventListener("click", () => {
      lightbox.style.display = "none"
    })
  
    // Formulario de suscripción
    const subscriptionForm = document.querySelector(".subscription-form")
    if (subscriptionForm) {
      subscriptionForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Simulación de envío de formulario
        const subscriberEmail = document.getElementById("subscriberEmail").value
  
        if (subscriberEmail) {
          // Aquí iría el código para enviar el formulario a un servidor
          alert("¡Gracias por suscribirte! Recibirás nuestras actualizaciones en " + subscriberEmail)
          subscriptionForm.reset()
        }
      })
    }
  
    // Formulario de nueva entrada
    const newPostForm = document.getElementById("newPostForm")
    const savePostBtn = document.getElementById("savePostBtn")
  
    if (savePostBtn) {
      savePostBtn.addEventListener("click", () => {
        const postTitle = document.getElementById("postTitle").value
        const postCategory = document.getElementById("postCategory").value
        const postContent = document.getElementById("postContent").value
  
        if (postTitle && postCategory && postContent) {
          // Aquí iría el código para enviar la nueva entrada al servidor
          alert("¡Entrada guardada con éxito!")
  
          // Cerrar el modal
          const modalElement = document.getElementById("newPostModal")
          const modal = bootstrap.Modal.getInstance(modalElement)
  
          modal.hide()
  
          // Limpiar el formulario
          newPostForm.reset()
        } else {
          alert("Por favor, completa todos los campos obligatorios.")
        }
      })
    }
  
    // Botones de acción en las entradas
    const bookmarkButtons = document.querySelectorAll(".post-actions .btn-outline-secondary")
    const likeButtons = document.querySelectorAll(".post-actions .btn-outline-danger")
  
    bookmarkButtons.forEach((button) => {
      button.addEventListener("click", function () {
        this.classList.toggle("active")
        if (this.classList.contains("active")) {
          this.innerHTML = '<i class="bi bi-bookmark-fill"></i>'
        } else {
          this.innerHTML = '<i class="bi bi-bookmark"></i>'
        }
      })
    })
  
    likeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        this.classList.toggle("active")
        if (this.classList.contains("active")) {
          this.innerHTML = '<i class="bi bi-heart-fill"></i>'
        } else {
          this.innerHTML = '<i class="bi bi-heart"></i>'
        }
      })
    })
  })
  
  