(function ($) {
    "use strict";
    $(document).ready(function () {


        var swiper = new Swiper('.banner-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });





    });

})(jQuery);
