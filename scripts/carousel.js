document.addEventListener('DOMContentLoaded', function() {
    
    const track = document.querySelector('.carousel-track');
    const slides = track ? Array.from(track.children) : [];
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    const dots = Array.from(document.querySelectorAll('[data-slide]'));
    
    if (!track || !slides.length || !nextButton || !prevButton || !dots.length) {
        return;
    }

    let currentSlide = 0;
    
    function updateCarousel(index) {
        if (index < 0 || index >= slides.length) return;
        
        currentSlide = index;
        
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        dots.forEach((dot, i) => {
            if (i === currentSlide) {
                dot.classList.remove('bg-gray-300', 'dark:bg-gray-700');
                dot.classList.add('bg-blue-600');
            } else {
                dot.classList.remove('bg-blue-600');
                dot.classList.add('bg-gray-300', 'dark:bg-gray-700');
            }
        });
        
        prevButton.classList.toggle('opacity-70', currentSlide === 0);
        prevButton.disabled = currentSlide === 0;
        
        nextButton.classList.toggle('opacity-70', currentSlide === slides.length - 1);
        nextButton.disabled = currentSlide === slides.length - 1;
    }
    

    nextButton.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            updateCarousel(currentSlide + 1);
        }
    });
    
    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            updateCarousel(currentSlide - 1);
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
    });
    
    updateCarousel(0);
});