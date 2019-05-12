$(document).ready(function () {

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("menu").style.top = "0";
    } else {
      document.getElementById("menu").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };

    $('#toggle').click(function() {
       $(this).toggleClass('active');
       $('#overlay').toggleClass('open');
      });

});
