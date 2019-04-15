$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#crush').fadeOut();
     }
    else
     {
      $('#crush').fadeIn();
     }
 });