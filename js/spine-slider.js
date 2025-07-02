document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.image-container img');
    let current = 0;
    
    function nextSlide() {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});