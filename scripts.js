
document.addEventListener('DOMContentLoaded', () => {
    // Existing code for search box animation

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
        searchInput.classList.toggle('expanded');
        if (searchInput.classList.contains('expanded')) {
            searchInput.focus();
        }
    });

    searchInput.addEventListener('blur', () => {
        if (searchInput.value === '') {
            searchInput.classList.remove('expanded');
        }
    });

    // Slider code
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    }

    function moveSlide(step) {
        showSlide(currentSlide + step);
    }

    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));

    // Initialize the first slide
    showSlide(currentSlide);
});



