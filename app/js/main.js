(function () {
    var elem = $('.offer__check');
    var elem1 = $('#desc');
    var elem2 = $('#descr');
    var onClickHadler = function (element){
        $(element).on('click', function(){
            var element = $(document).find('.main__description');
            var posY = element.eq(0).offset().top - 100;
            console.log(posY);
            $('html, body').animate({
                scrollTop: posY
            }, 500);
        });
    };
    onClickHadler(elem);
    onClickHadler(elem1);
    onClickHadler(elem2);
})();

(function () {
    var img1 = './images/bars-solid.svg';
    var img2 = './images/times-solid.svg';
    var element = $('.mobile-menu img');
    var mobileMenu = $('.mobile-menu__list');
    $(element).on('click',function () {
        if (element.attr("src") === img1){
            element.attr("src", img2);
            mobileMenu.slideToggle();
            $('.mobile-menu').bind('clickoutside', function () {
                mobileMenu.slideToggle();
            })
        } else {
            element.attr("src", img1);
            mobileMenu.slideToggle();
        }
        $(document).mouseup(function (e){
            var div = $(".mobile-menu__list");
            if (!div.is(e.target)
            && !element.is(e.target)) {
                div.hide();
                element.attr("src", img1);
            }
        });
    });

})();

(function () {
    var width = window.innerWidth || document.body.clientWidth;

    if(768 > width ) {
        var elementNeedDelete = document.querySelectorAll('.vertical-blue-line');
        elementNeedDelete.forEach(function (it) {
            it.remove();
        });
        $('.statistic-block').slick({
            infinite:false,
            autoplay:true,
            autoplaySpeed: 5000,
            prevArrow: $('.prev-arrow-statistic'),
            nextArrow: $('.next-arrow-statistic'),
        });
    }

    if(768 > width){
        $('.reviews-block').slick({
            infinite:false,
            prevArrow: $('.prev-arrow-review'),
            nextArrow: $('.next-arrow-review'),
        });
    }

})();



