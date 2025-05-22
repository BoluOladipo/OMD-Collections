  function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
  }

  let currentSlide = 0;

  function moveSlide(direction) {
    const track = document.querySelector('.testimonial-track');
    const wrapper = document.querySelector('.testimonial-wrapper');
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialsPerPage = 3;
    const totalSlides = Math.ceil(testimonials.length / testimonialsPerPage);

    currentSlide += direction;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide > totalSlides - 1) currentSlide = totalSlides - 1;

    const slideWidth = wrapper.offsetWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }