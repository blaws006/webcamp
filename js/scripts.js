console.log('javascript connected!');

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

// when the pause button is clicked, pause the carousel
const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton')

carouselButton.addEventListener('click', function() {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})

// carouselPause.addEventListener('click', function() {
//     console.log('pausing the carousel');
//     carousel.pause();
// })

// const carouselPlay = document.getElementById('carouselPlay');

// carouselPlay.addEventListener('click', function() {
//     console.log('cycle through the carousel');
//     carousel.cycle();
// })