$(document).ready(function () {

    $('#toggle').click(function() {
       $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
      });

    $('#toggle').click(function() {
        $('body').toggleClass('noscroll');
      });

});
