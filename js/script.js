$( document ).ready(function() {
    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });


    //прокрутка плавная

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('.slider').slick({
        dots:false,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
        focusOnSelect:true,
        arrows:true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows:false
                }
            },
        ]
    });
    $('.partner').slick({
        dots:false,
        slidesToShow:4,
        slidesToScroll:1,
        speed:500,
        focusOnSelect:true,
        arrows:true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows:false
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  arrows:false
                }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  arrows:false
                }
            },
            
        ]
    });

    $('.tarif__link').click(function(e){
        e.preventDefault();

        $('.tarif__link').removeClass('tarif__link_active');
        $('.tarif__content').removeClass('tarif__content_active');

        $(this).addClass('tarif__link_active');
        $($(this).attr('href')).addClass('tarif__content_active');
    });
    // $('.tarif__link:first').click();

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation').fadeOut('slow');
    });

    $('[data-modal=consul]').on('click', function() {
        $('.overlay, #consul').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consul').fadeOut('slow');
    });

    $('[data-modal=social]').on('click', function() {
        $('.overlay, #social').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #social').fadeOut('slow');
    });

    $('[data-modal=tha]').on('click', function() {
        $('.overlay, #tha').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #tha').fadeOut('slow');
    });
    //valid//

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#quest');
    validateForms('#feeds');
    validateForms('#order');
	
    $('input[name=phone]').mask("+7 (999) 999-99-99");
    

    $(window).scroll(function(){
        if($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });


});

  