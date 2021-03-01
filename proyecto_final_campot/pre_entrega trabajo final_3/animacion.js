$(document).ready(function () {
    var mySwipper = new Swiper('.swiper-container', {
        effect: "fade",
        speed: 1500,

        navigation: {
            nextEl: '.next',
            prevEl: '.swiper-button-prev',
        },
    })

    mySwipper.on('slideChangeTransitionStart', function () {
        anime({
            targets: '.swiper-slide-active .slide-right img',
            scale: [1.2, 1],
            opacity: [0, 1],
            easing: 'easeInOutQuart'
        });
        anime({
            targets: '.swiper-slide-active .slide-left .element',
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(150, {
                start: 500
            }),
            easing: 'easeInOutQuart'
        });
    })

    anime({
        targets: 'header',
        scaleX: [0, 1],
        translateX: [-400, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuart'
    });

    anime({
        targets: '.logo img',
        rotate: 360,
        opacity: [0, 1],
        delay: 500,
        easing: 'easeInOutQuart'
    });

    anime({
        targets: '.menu li',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200, {
            start: 700
        }),
        easing: 'easeInOutQuart'
    });

    anime({
        targets: '.slide-right img',
        scale: [1.2, 1],
        opacity: [0, 1],
        delay: anime.stagger(200, {
            start: 2000,
            from: 'last',
        }),
        easing: 'easeInOutQuart',
    });

    anime({
        targets: '.swiper-slide-active .slide-left .element',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(250, {
            start: 1700
        }),
        easing: 'easeInOutQuart',
    });

    anime({
        targets: '.swiper-button-prev',
        translateY: [-100, 0],
        opacity: [0, 1],
        delay: 3000,
        easing: 'easeInOutQuart',
    });

    anime({
        targets: '.swiper-button-next',
        translateY: [100, 0],
        opacity: [0, 1],
        delay: 3000,
        easing: 'easeInOutQuart',
    });

})
