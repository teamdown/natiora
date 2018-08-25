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
})(jQuery);
