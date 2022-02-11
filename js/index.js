$(document).ready(function() {

    $(".header__burger").click(function() {
        $(".nav").toggleClass("nav--active")
        $(this).toggleClass("header__burger--active")
        $(".nav-bg").toggleClass("nav-bg--active")
        $("body").toggleClass("body-fix")
    })

    $(".nav-bg").click(function() {
        $(this).removeClass("nav-bg--active")
        $(".nav").removeClass("nav--active")
        $(".header__burger").removeClass("header__burger--active")
        $("body").removeClass("body-fix")
    })

    $(".question__btn").click(function(e) {
        e.preventDefault();
        $(".question__thanks").addClass("question__thanks--active")

        setTimeout(hideThanks, 3000);
        // setTimeout($(".question__thanks").removeClass("question__thanks--active"), 2000);
    })

    function hideThanks() {
        console.log(true)
        $(".question__thanks").removeClass("question__thanks--active")
    }

    $(".nav__item").click(function() {
        $('.nav-bg').removeClass("nav-bg--active")
        $(".nav").removeClass("nav--active")
        $(".header__burger").removeClass("header__burger--active")
        $("body").removeClass("body-fix")
    })

    $(".nav__item").click(function(event) {
        event.preventDefault();
        var idc = $(this).attr('href'),
            top = $(idc).offset().top;
        $('body,html').animate({ scrollTop: top - 55 }, 0);

    });


    $(window).scroll(function() {
        var $sections = $('section');
        $sections.each(function(i, el) {
            var top = $(el).offset().top - 135;

            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var idn = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('.nav__item.nav__item--active').removeClass('nav__item--active');
                $('.nav__item[href="#' + idn + '"]').addClass('nav__item--active');
            }
        });
    });


    // var $element = $('.how-work__item');
    // let counter = 0;
    // $(window).scroll(function() {
    //     $element.each(function(index, el) {
    //         var scroll = $(window).scrollTop() + $(window).height();
    //         var offset = $(this).offset().top
    //         if (scroll > offset && counter2 == 0) {
    //             $(this).addClass("how-work__item--active")
    //         } else {
    //             $(this).removeClass("how-work__item--active")
    //         }
    //     });
    // });


    // var $element2 = $('.main__item');
    // let counter2 = 0;

    // $(window).scroll(function() {

    //     $element2.each(function(index, el) {
    //         var scroll = $(window).scrollTop() + $(window).height();
    //         var offset = $(this).offset().top
    //         if (scroll > offset && counter2 == 0) {

    //             setTimeout(() => {
    //                 $(this).addClass("main__item--active")
    //             }, 500);
    //         } else {
    //             $(this).removeClass("main__item--active")
    //         }
    //     });
    // });
})