window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

    document.addEventListener('DOMContentLoaded', function() {
        var swiper = new Swiper('.features-slider', {
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 'auto',
            spaceBetween: 20,
        });
    });

    function redirectToWiki(url) {
        window.location.href = url;
    }
