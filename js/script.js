$(function() {

    var offset1 = $('.section1').offset().top;
    var offset2 = $('.section2').offset().top;
    var offset3 = $('.section3').offset().top;
    var offset4 = $('.section4').offset().top;
    var offset5 = $('.section5').offset().top;
    // var offsetsectionartwork = $ ('#section-artwork').offset().top;




    function updateOffsetTops() {
        offset1 = $('.section1').offset().top;
        offset2 = $('.section2').offset().top;
        offset3 = $('.section3').offset().top;
        offset4 = $('.section4').offset().top;
        offset5 = $('.section5').offset().top;
        // offsetsectionartwork = $('#section-artwork').offset().top;

        console.log(offset1);
        console.log(offset2);
        console.log(offset3);
        console.log(offset4);
        console.log(offset5);
        // console.log(offsetsectionartwork);

        // console.log('---------------');

    }



    //------slide-button + menu bar-----
    var isOpen = false;
    $('#nav-icon1').on('click', function() {

        if (isOpen == false) {
            $('#slide-button').addClass('open');
            $('#slide-button').one('transitionend', function() {
                $('.menu-close-btn').addClass('show');

            });

            isOpen = true;
        } else {
            $('#slide-button').removeClass('open');
            $('#slide-button').one('transitionend', function() {
                $('.menu-close-btn').removeClass('show');

            });
            isOpen = false;

        }


    });

    $('.menu-close-btn').on('click', function() {
        $('#slide-button').removeClass('open');

    });

    //-----menu bar----

    $('#nav-icon1').click(function() {
        $(this).toggleClass('open');
    });



    //----------------------------

    var menuOffset = $('.menu-list').offset();
    // console.log(menuOffset);
    $(document).on('scroll', function() {
        var iScrollTop = $(document).scrollTop();



        if (iScrollTop > menuOffset.top) {
            $('.menu-list').addClass('fixed');

        } else {
            $('.menu-list').removeClass('fixed');

        }

    });


    //--------------------
    menuOffset = $('.main').offset(); //remove var here
    // console.log(menuOffset);
    $(document).on('scroll', function() {
        var iScrollTop = $(document).scrollTop();


        if (iScrollTop > menuOffset.top) {
            $('.main').addClass('fixed');
            $('#nav-icon1').find('span').addClass('fixed');

        } else {
            $('.main').removeClass('fixed');
            $('#nav-icon1').find('span').removeClass('fixed');

        }

    });
    //----------highlight menu-------------------

    $(document).on('scroll', function() {

        var iRealScrollTop = $(document).scrollTop();
        //console.log(iScrollTop);

        var activeLi;

        var iScrollTop = iRealScrollTop + 300;
        // original is 151 not 300, on sept 9 2019

        if ((iScrollTop >= offset1) && (iScrollTop < offset2)) {
            //looking at section 1
            activeLi = $('.menu-list>li:nth-child(1)');

        }
        if ((iScrollTop >= offset2) && (iScrollTop < offset3)) {
            //looking at section 2
            activeLi = $('.menu-list>li:nth-child(2)');

        }
        if ((iScrollTop >= offset3) && (iScrollTop < offset4)) {
            //looking at section 3
            activeLi = $('.menu-list>li:nth-child(3)');

        }
        if ((iScrollTop >= offset4) && (iScrollTop < offset5)) {
            //looking at section 4
            activeLi = $('.menu-list>li:nth-child(4)');

        }


        if (iScrollTop >= offset5) {
            // looking at section 5
            activeLi = $('.menu-list>li:nth-child(5)');


        }



        activeLi.addClass('active');
        $('.menu-list>li').not(activeLi).removeClass('active');


    });





    //------------smooth scrolling---------------------------

    $('a[data-to]').on('click', function(e) {

        e.preventDefault(); //dont want the 'a' to jump//just in case the link works 

        var sTarget = $(this).data('to'); //section1 etc
        var offsetTop = $(sTarget).offset().top;

        console.log(offsetTop);
        $('body,html').animate({
            scrollTop: offsetTop - 150 //i change this 
        }, 1000); //html,body is for jqeury to select th whole thing

    });

    // section 2 to section 5, when click #location it will go to section 5 where the map is//

    $('#location').on('click', function(e) {

        e.preventDefault(); //dont want the 'a' to jump//just in case the link works 

        //var sTarget = $(this).data('to'); //section1 etc
        var offsetTop = $('#map').offset().top;

        console.log(offsetTop);
        $('body,html').animate({
            scrollTop: offsetTop - 150 //i change this 
        }, 1000); //html,body is for jqeury to select th whole thing

    });

    // section 1 to section 4 artwork, when click #viewmore button it will go to section 4 where the artwork is//

    $('#viewmore').on('click', function(e) {

        e.preventDefault(); //dont want the 'a' to jump//just in case the link works 

        //var sTarget = $(this).data('to'); //section1 etc
        var offsetTop = $('#section-artwork').offset().top;

        console.log(offsetTop);
        $('body,html').animate({
            scrollTop: offsetTop - 150 //i change this 
        }, 1000); //html,body is for jqeury to select th whole thing

    });









    //----------text section2 center-----
    // original moveInOffset is 200
    // var moveInOffset = 200; 

    // zara changed to moveInOffset to 400 below to slow down the image to pop up
    var moveInOffset = 400;
    // 


    $('[data-move-up-speed]').each(function(i, el) {

        var iSpace = moveInOffset;
        var iSpeed = $(el).data('move-up-speed');

        $(el).css({
            'transform': 'translateY(' + (iSpace * iSpeed) + 'px)'
        });

    });



    $(document).on('scroll', function() {

        var iScrollTop = $(document).scrollTop();
        var iSpace = moveInOffset - iScrollTop;

        if (iSpace < 0) {
            iSpace = 0;
        }

        $('[data-move-up-speed]').each(function(i, el) {

            var iSpeed = $(el).data('move-up-speed');

            $(el).css({
                'transform': 'translateY(' + iSpace * iSpeed + 'px)'
            });

        });

    });


    //-----section2 ReadMore-button-left ive added this--------
    $('.ReadMore-description-left-A').hide();
    updateOffsetTops();

    var isOpenReadmoreA = false; //var removed
    $('#ReadMore-A').on('click', function() {

        if (isOpenReadmoreA == false) {
            $('.ReadMore-description-left-A').slideDown('slow');

            isOpenReadmoreA = true;

        } else {
            $('.ReadMore-description-left-A').slideUp('slow');

            isOpenReadmoreA = false;

        }

    });


    //-----section2 ReadMore-B-button-left ive added this--------
    $('.ReadMore-description-left-B').hide();
    updateOffsetTops();

    var isOpenReadmoreB = false; //var removed
    $('#ReadMore-B').on('click', function() {

        if (isOpenReadmoreB == false) {
            $('.ReadMore-description-left-B').slideDown('slow');

            isOpenReadmoreB = true;

        } else {
            $('.ReadMore-description-left-B').slideUp('slow');

            isOpenReadmoreB = false;

        }

    });

    //-----section2 ReadMore-C-button-left ive added this--------
    $('.ReadMore-description-left-C').hide();
    updateOffsetTops();

    var isOpenReadmoreC = false; //var removed
    $('#ReadMore-C').on('click', function() {

        if (isOpenReadmoreC == false) {
            $('.ReadMore-description-left-C').slideDown('slow');

            isOpenReadmoreC = true;

        } else {
            $('.ReadMore-description-left-C').slideUp('slow');

            isOpenReadmoreC = false;

        }

    });

    //-----section2 ReadMore-D-button-left ive added this--------
    $('.ReadMore-description-left-D').hide();
    updateOffsetTops();

    var isOpenReadmoreD = false; //var removed
    $('#ReadMore-D').on('click', function() {

        if (isOpenReadmoreD == false) {
            $('.ReadMore-description-left-D').slideDown('slow');

            isOpenReadmoreD = true;

        } else {
            $('.ReadMore-description-left-D').slideUp('slow');

            isOpenReadmoreD = false;

        }

    });




    //---location icon section when click will go to section 5 contact to see map-----


    //------------img1 moved in and other images to move in on section 2 container ive added this------------

    $(document).on('scroll', function() {

        $('img').each(function(i, el) {

            var iScrollTop = $(document).scrollTop();

            var offsetTop = $(this).offset().top;
            // i change it to 600, original is 300
            if (iScrollTop > offsetTop - 800) {
                $(this).addClass('moved-in');

            } else {
                $(this).removeClass('moved-in');


            }


        });
    });


    $(document).on('scroll', function() {

        $('.title').each(function(i, el) {

            var iScrollTop = $(document).scrollTop();

            var offsetTop = $(this).offset().top;
            // i change it to 600, original is 300
            if (iScrollTop > offsetTop - 800) {
                $(this).addClass('moved-in');
            } else {
                $(this).removeClass('moved-in');


            }


        });
    });



    //-----section3 read-more-button-right-fiordland-----
    // $('.read-description-right-fiordland').hide();
    // updateOffsetTops();

    // var isOpenFiordland = false; //var removed
    // $('#read-more-btn-right-fiordland').on('click', function() {

    //     if (isOpenFiordland == false) {
    //         $('.read-description-right-fiordland').slideDown('slow');

    //         isOpenFiordland = true;
    //     } else {
    //         $('.read-description-right-fiordland').slideUp('slow');

    //         isOpenFiordland = false;

    //     }

    // });




    //------section3 read-more-btn-right-mtcook------
    // $('.read-description-right-mtcook').hide();
    // updateOffsetTops();

    // var isOpenMtcook = false; //var removed
    // $('#read-more-btn-right-mtcook').on('click', function() {

    //     if (isOpenMtcook == false) {
    //         $('.read-description-right-mtcook').slideDown('slow');

    //         isOpenMtcook = true;
    //     } else {
    //         $('.read-description-right-mtcook').slideUp('slow');

    //         isOpenMtcook = false;

    //     }

    // });


    //-----section3 read-more-button-left-tongariro-------
    // $('.read-description-left-tongariro').hide();
    // updateOffsetTops();

    // var isOpenTongariro = false; //var removed
    // $('#read-more-btn-left-tongariro').on('click', function() {

    //     if (isOpenTongariro == false) {
    //         $('.read-description-left-tongariro').slideDown('slow');

    //         isOpenTongariro = true;

    //     } else {
    //         $('.read-description-left-tongariro').slideUp('slow');

    //         isOpenTongariro = false;

    //     }

    // });




    //-----section3 read-more-button-left-queenstown-------
    // $('.read-description-left-queenstown').hide();
    // updateOffsetTops();

    // var isOpenQueenstown = false; //var removed
    // $('#read-more-btn-left-queenstown').on('click', function() {

    //     if (isOpenQueenstown == false) {
    //         $('.read-description-left-queenstown').slideDown('slow');

    //         isOpenQueenstown = true;

    //     } else {
    //         $('.read-description-left-queenstown').slideUp('slow');

    //         isOpenQueenstown = false;

    //     }

    // });







    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 50,
        // init: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });

    //---------swiper 2-----------------
    swiper = new Swiper('.swiper-container.s2', { //var removed
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });

    updateOffsetTops();


    // ive added this plugin for smooth scrolling image reveal effect!
    AOS.init({
        duration: 1200,
    });
    //

});