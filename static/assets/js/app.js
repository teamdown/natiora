(function($) {

  'use strict';

  $(document).ready(function() {


    var $contact_forms = $('form.blahlab_contact_form');

    for (var i = 0; i < $contact_forms.length; i++) {

      $($contact_forms[i]).validate({
        messages: { },
        submitHandler: function(form) {
          $.ajax({
            type: 'POST',
            url: 'send.php',
            data: $(form).serialize(),
            success: function(data) {
              if(data.match(/success/)) {
                $(form).trigger('reset');
                $(form).find('p.thanks').removeClass('hide').show().fadeOut(5000);
              }
            }
          });
          return false;
        }
      });

    }



  });


  $('#menu-controller').on('click', function() {

    var wrapper = $(this).closest('#menu-wrapper');

    if ( $(wrapper).hasClass('open-menu') ) {
      $("#menu-wrapper").removeClass('open-menu').addClass('close-menu');
    } else {
      $("#menu-wrapper").removeClass('close-menu').addClass('open-menu');
    }

  });

  $(document).ready(function() {
    $('.red, .purple, .orange').each(function() {

      $(this).appear();

      $(this).on('appear', function() {
        $(this).addClass('appear');

      });

      $(this).on('disappear', function() {
        $(this).removeClass('appear');

      });

    });
  });

  new Swiper('#main', {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesOffsetAfter: 1200,
    slidesPerGroup: 2,
    speed: 700,
    mousewheel: {
      releaseOnEdges: true
    },
    on: {
      init: function() {
        jQuery(this.$el).addClass('initialized');
      },
      transitionEnd: function() {
        if ( this.isEnd ) {
          jQuery('body').addClass('swiper-end');
        }

        if ( this.isBeginning || this.isEnd ) {
          jQuery('body').removeClass('swiper-body');
        }
      },
      fromEdge: function() {
        jQuery('body').removeClass('swiper-end');
        jQuery('body').addClass('swiper-body');
      }
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
        spaceBetween: 0,
        slidesOffsetAfter: 1100
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 0,
        slidesOffsetAfter: 1000,
        slidesPerGroup: 1
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 0,
        slidesOffsetAfter: 800,
        slidesPerGroup: 1
      },

      800: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesOffsetAfter: 0,
        slidesPerGroup: 1
      }
    }
  });
  new Swiper('#services', {
    slidesPerView: 'auto',
    slidesOffsetAfter: 700,
    speed: 700,
    // freeMode: true,
    mousewheel: true,
    grabCursor: true,
    on: {
      init: function() {
        jQuery(this.$el).addClass('initialized');
      },
      transitionEnd: function() {
        if ( this.isEnd ) {
          jQuery('body').addClass('swiper-end');
        }

        if ( this.isBeginning || this.isEnd ) {
          jQuery('body').removeClass('swiper-body');
        }
      },
      fromEdge: function() {
        jQuery('body').removeClass('swiper-end');
        jQuery('body').addClass('swiper-body');
      }
    },
    breakpoints: {
      1400: {
        slidesOffsetAfter: 660,
      },
      1024: {
        slidesPerView: 2,
      },

      800: {
        slidesOffsetAfter: 0,
        slidesPerView: 1
      }
    }
  });

  

  new Swiper('#contact', {
    slidesPerView: 'auto',
    slidesOffsetAfter: 600,
    speed: 700,
    mousewheel: true,
    mousewheel: {
      releaseOnEdges: true
    },
    grabCursor: true,
    on: {
      init: function() {
        jQuery(this.$el).addClass('initialized');
      },
      transitionEnd: function() {
        if ( this.isEnd ) {
          jQuery('body').addClass('swiper-end');
        }

        if ( this.isBeginning || this.isEnd ) {
          jQuery('body').removeClass('swiper-body');
        }
      },
      fromEdge: function() {
        jQuery('body').removeClass('swiper-end');
        jQuery('body').addClass('swiper-body');
      }
    },
    breakpoints: {
      1400: {
        slidesOffsetAfter: 600
      },
      1024: {
        slidesOffsetAfter: 500
      },

      800: {
        slidesOffsetAfter: 0,
        slidesPerView: 1
      }
    }
  });


})(jQuery);
