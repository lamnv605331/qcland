var wdH = 0,
    wdW = 0;

function winresize() {
    wdH = $(window).height();
    wdW = $(window).width();
}

;

$(document).ready(function() {
    "use strict";
    winresize();

    var revapi;
    revapi = jQuery('.banner-home .tp-banner').revolution({
        delay: 3000,
        startwidth: 1440,
        startheight: 605,
        hideThumbs: 10,
        navigationType: "bullet",
        navigationArrows: "none",
        navigationStyle: "round",
        fullScreenOffsetContainer: ""
    });

    var revapi2;
    revapi2 = jQuery('.banner-project .tp-banner').revolution({
        delay: 3000,
        startwidth: 1400,
        startheight: 635,
        hideThumbs: 10,
        navigationType: "bullet",
        navigationArrows: "none",
        navigationStyle: "round",
        fullScreenOffsetContainer: ""
    });


    //Search////////////////////////////////////////////////
    $("#dropdownSearchBtn").click(function() {
        // $(this).hide();
        $(".search").fadeToggle(200, function() { $("#searchinput").focus(); });
        $(".global-overlay").addClass('show');
        return false;
    });

    $(".global-overlay").click(function() {
        $(".search").fadeToggle(200, function() { $("#dropdownSearchBtn").show(); });
        $(".global-overlay").removeClass('show');
    });

    $('.all-menu-button').click(function() {
        $(this).toggleClass('active');
        $('body').addClass('show-menu');
    });
    $('.close-menu-button').click(function() {
        $(this).toggleClass('active');
        $('body').removeClass('show-menu');
    });
    $('.btn-center-menu').click(function() {
        $('.center-menu , .prj-menu').addClass('show-menu-sub');
    });
    $('.close-center-menu').click(function() {
        $(this).toggleClass('active');
        $('.center-menu , .prj-menu').removeClass('show-menu-sub');
    });

    $('.toggle-menu').click(function() {
        $('.main-nav ul li').removeClass('show');
        $(this).parent().addClass('show');
    });
    $('.toggle-menu-prev').click(function() {
        $(this).parent().parent().removeClass('show');
    });

    // $(".news-month-slide .owl-carousel").owlCarousel({
    //     items: 1,
    //     margin: 0,
    //     loop: true,
    //     nav: true,
    //     lazyLoad: false,
    //     navRewind: true,
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: true,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     slideBy: 1,
    //     dots: false,
    //     responsive: {
    //         0: { items: 1 }
    //     }
    // });

    // $(".about-att .owl-carousel").owlCarousel({
    //     items: 4,
    //     margin: 30,
    //     loop: false,
    //     nav: true,
    //     lazyLoad: false,
    //     navRewind: true,
    //     autoplay: false,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: true,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     slideBy: 1,
    //     dots: false,
    //     responsive: {
    //         0: { items: 2 },
    //         768: { items: 3 },
    //         1024: { items: 4 }
    //     }
    // });

    if ($('.map-ifarme').length) {
        $('.map-ifarme').fancybox({
            type: "iframe",
            padding: 0,
            maxWidth: 800,
            maxHeight: 460,
            // 'autoDimensions':   true,
            // fitToView: false,
            iframe: {
                preload: false
            },
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    }



    $('.center-menu a[href^="#"],.ft-menu a[href^="#"]').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 170
        }, 700);
        $('.center-menu a').removeClass('active');
        $('.center-menu').removeClass('show-menu-sub');
        $(this).addClass('active');
        return false;
    });

    $('header').scrollToFixed();
    var summaries = $('.center-menu , .prj-menu');
    summaries.each(function(i) {
        var summary = $(summaries[i]);
        var next = summaries[i + 1];

        summary.scrollToFixed({
            marginTop: $('header').outerHeight(true),
            limit: function() {
                var limit = 0;
                if (next) {
                    limit = $(next).offset().top - $(this).outerHeight(true);
                }
                return limit;
            },
            zIndex: 999
        });
    });

    $('.slick-news-sale').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: false,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                arrows: false,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1
            }
        }]
    });

    $(".news-month-slide .owl-carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $(".prj-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.about-att .owl-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: false
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                arrows: false,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                arrows: false,
                slidesToScroll: 2
            }
        }]
    });

    // $(".about-att .owl-carousel").owlCarousel({
    //     items: 4,
    //     margin: 30,
    //     loop: false,
    //     nav: true,
    //     lazyLoad: false,
    //     navRewind: true,
    //     autoplay: false,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: true,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     slideBy: 1,
    //     dots: false,
    //     responsive: {
    //         0: { items: 2 },
    //         768: { items: 3 },
    //         1024: { items: 4 }
    //     }
    // });

    $('.prj-home').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '150px',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 600,
            settings: "unslick"
        }]
    });

    $('.tiendo-click').click(function(event) {
        $('.tiendo-click').removeClass('active');
        $(this).addClass('active');
        $('.deatail-tiendo').removeClass('active');
        $('.deatail-tiendo').eq($(this).index()).addClass('active');

        //        var id = $(this).attr('href');
        //        $('html, body').animate({
        //            scrollTop: $(id).offset().top - 145
        //        }, 1000);

    });

    $('.contact-dropdown select').change(function() {
        $('.contact-dropcontent .ddl').removeClass('active');
        $('.contact-dropcontent .ddl').eq(this.selectedIndex).addClass('active');
    });
    $('.album-item').each(function() {
        $(this).find(".att-script").attr("rel", $(this).children().attr("rel"));
    });

    if ($('.fancybox-thumbs').length) {
        $(".fancybox-thumbs").fancybox({
            'padding': 0,
            helpers: {
                overlay: {
                    locked: false
                },
                title: {
                    type: 'outside'
                },
                thumbs: {
                    width: 75,
                    height: 50
                }
            },
            beforeLoad: function() {
                this.title = $(this.element).attr('caption');
            }
        });

    }

    if ($('.popup-video').length) {
        $('.popup-video').fancybox({
            'padding': 0,
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    }

    if ($('.main-img').length) {
        $('.main-img').fancybox({
            'padding': 0,
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    }

    $('.frame-link').click(function() {
        $('.career-frame').slideDown(400);
        return false;
    });

    $('#features').wowBook({
        height: 760,
        width: 1140,
        centeredWhenClosed: true,
        controls: {
            zoomIn: '#zoomin',
            zoomOut: '#zoomout',
            next: '#next',
            back: '#back',
            first: '#first',
            last: '#last',
            slideShow: '#slideshow',
            flipSound: '#flipsound',
            thumbnails: '#thumbs',
            fullscreen: '#fullscreen'
        },
        scaleToFit: ".respond_book"
    });



    if ($(window).width() < 767) {
        $('.map-location .map_system').addClass('scrolloff');
        $('.map-location').on("mousedown", function() {
            $('.map-location .map_system').removeClass('scrolloff');
        });
    }

    // $('.map-location').on("mouseup", function() {
    //     $('.map-location .map_system').addClass('scrolloff');
    // });

    // $(".map-location .map_system").mouseleave(function() {
    //     $('.map-location .map_system').addClass('scrolloff');
    // });
    $('.room').prepend($('.frm-toaddress'));

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 480,
            settings: {
                focusOnSelect: true,
                slidesToShow: 3
            }
        }]
    });
    $('.canho-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            slidesToShow: 3,
            settings: {
                arrows: false,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                arrows: false,
                slidesToScroll: 2
            }
        }]
    });

    $('.calendar ul').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        centerMode: false,
        centerPadding: '0px',
        infinite: false,
        variableWidth: false,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 7
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 6
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 2
            }
        }],
    });
    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.calendar ul').slick('slickGoTo', slideno - 1);
    });
    $(".select-date").change(function() {
        var monthpicker = $(".select-months").val();
        var yearpicker = $(".select-years").val();
        var urlplus = "";
        if (monthpicker < 10)
            urlplus = "0" + monthpicker;
        else
            urlplus = monthpicker;
        window.location.href = "/lich-tai-chinh-1?d=01-" + urlplus + "-" + yearpicker;
    });

    var sliecurren = $(".slick-goto").attr("data-slide");
    $(".slick-slide").removeClass("slick-current");
    $(".active").addClass("slick-current");

    var siteRoot = '';

    $(".lich-tai-chinh").on("click", ".clendar-btn", function() {

        var urladd = siteRoot + "/News/Services/ScheduleService.aspx";
        var month = $(this).attr("data-month");
        var year = $(this).attr("data-year");
        var langugeid = $(this).attr("data-langugeid");
        var data = { 'method': 'LoadClendarByMonth', 'month': month, 'year': year, 'langugeid': langugeid };
        $.ajax({
            cache: false,
            url: urladd,
            data: data,
            type: 'post',
            success: function(response) {
                if (response.success == true) {
                    var htmlcalendar = response.data;
                    if (htmlcalendar.length != 0) {
                        $(".calendar-view").html(htmlcalendar);
                    }
                }
            },
            complete: function() {}
        });
    });
    $(".lich-tai-chinh").on("click", ".btn-daycalendar", function() {
        var urladd = siteRoot + "/News/Services/ScheduleService.aspx";
        var date = $(this).attr("data-date");
        var langugeid = $(this).attr("data-langugeid");
        var data = { 'method': 'LoadEventByDay', 'date': date, 'languugeid': langugeid };
        $.ajax({
            cache: false,
            url: urladd,
            data: data,
            type: 'post',
            success: function(response) {
                if (response.success == true) {
                    var htmlnews = response.data;
                    if (htmlnews.length != 0) {
                        $(".event-main").html(htmlnews);
                    }
                }
            },
            complete: function() {}
        });
    });

    $(".tabtableview").on("click", function() {
        var urladd = siteRoot + "/News/Services/ScheduleService.aspx";
        var langugeid = $(".lich-tai-chinh  .clendar-btn").attr("data-langugeid");
        var data = { 'method': 'LoadTableView', 'langugeid': langugeid, 'year': $(".schedule-slyear option:selected").val() };
        $.ajax({
            cache: false,
            url: urladd,
            data: data,
            type: 'post',
            success: function(response) {
                if (response.success == true) {
                    var htmlnews = response.data;
                    if (htmlnews.length != 0) {
                        $(".tableview-schedulelist").html(htmlnews);
                    }
                }
            },
            complete: function() {}
        });

    });
    $(".schedule-slyear").change(function() {
        var urladd = siteRoot + "/News/Services/ScheduleService.aspx";
        var langugeid = $(".lich-tai-chinh  .clendar-btn").attr("data-langugeid");
        var data = { 'method': 'LoadTableView', 'langugeid': langugeid, 'year': $(".schedule-slyear option:selected").val() };
        $.ajax({
            cache: false,
            url: urladd,
            data: data,
            type: 'post',
            success: function(response) {
                if (response.success == true) {
                    var htmlnews = response.data;
                    if (htmlnews.length != 0) {
                        $(".tableview-schedulelist").html(htmlnews);
                    }
                }
            },
            complete: function() {}
        });
    });
    $('.close').click(function() {
        $('.popup-content').hide(800);
    });

    $('#mapShapes').mapster({
        fillOpacity: 0.6,
        fillColor: "dcae27",
        stroke: true,
        strokeColor: "c39a1f",
        strokeOpacity: 0.8,
        strokeWidth: 2,
        singleSelect: true,
        onClick: function() {
                window.location = this.href;
                return false;
            }
            // mapKey: 'name',
            // listKey: 'name',
    });

});

;


$(function() {
    "use strict";

    $('html').scrollUp({
        scrollName: 'scrollUp-text', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-double-up" aria-hidden="true"></i>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
});

;

$(window).scroll(function() {
    var abt = $(document).scrollTop();
    if (abt > 86) {
        $('header').addClass('topfix');
    } else {
        $('header').removeClass('topfix');
    }
});

$(window).load(function() {
    "use strict";

    $('.slick-goto').trigger('click');
});

function resize(maxWidth, maxHeight) {
    var image = $('#mapShapes img'),
        imgWidth = image.width(),
        imgHeight = image.height(),
        newWidth = 0,
        newHeight = 0;
    if (imgWidth / maxWidth > imgHeight / maxHeight) {
        newWidth = maxWidth;
    } else {
        newHeight = maxHeight;
    }
    image.mapster('resize', newWidth, newHeight, resizeTime);
}

;

function onWindowResize() {
    var curWidth = $(window).width(),
        curHeight = $(window).height(),
        checking = false;
    if (checking) {
        return;
    }
    checking = true;
    window.setTimeout(function() {
        var newWidth = $(window).width(),
            newHeight = $(window).height();
        if (newWidth === curWidth &&
            newHeight === curHeight) {
            resize(newWidth, newHeight);
        }
        checking = false;
    }, resizeDelay);
}