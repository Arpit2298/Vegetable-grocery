// ....................................Slider JS........................................

$(document).ready(function() {
    $('.logo-slider').slick({
        slidesToShow: 1,
        sliderToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        infinite: true,
        responsive: [{
                breakpoint: 768,
                setting: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 520,
                setting: {
                    slidesToShow: 3
                }
            }
        ]

    });
});