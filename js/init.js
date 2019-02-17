(function($) {
  $(function() {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener("DOMContentLoaded", function() {
  var options = {
    scrollOffset: 50
  };
  var elems = document.querySelectorAll(".scrollspy");
  var instances = M.ScrollSpy.init(elems, options);
});
