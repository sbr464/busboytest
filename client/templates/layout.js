Template.layout.rendered = function () {


  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });

  $('body').addClass('layoutBody');


 $.material.init()

}
