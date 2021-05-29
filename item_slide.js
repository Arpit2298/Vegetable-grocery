$('.logo-slider1').slick({
    slidesToShow: 7,
    slidesToScroll: 7,
    dots: true,

    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                speed: 500,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 780,
            settings: {
                speed: 400,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                speed: 200,
                slidesToScroll: 1,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                speed: 200,
                slidesToScroll: 4,
                dots: true,
                autoplaySpeed: 3000

            }
        }
    ]

});