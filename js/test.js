$(function(){
  var menuInfo = $("#menu-info")
  var pull = $("#pull");
  var menu = $("nav ul");
  var menuHeight = menu.height();
  var abtBtn = $("#about");
  var thanksBtn = $("#thanks");
  var inspireBtn = $("#inspire");
  $(menuInfo).hide();

  $(".image h2")
    .wrapInner("<span>")

  $(".image h2 br")
    .before("<span class='spacer'>")
    .after("<span class='spacer'>");

  $(pull).on('click', function(e){
    e.preventDefault();
    menu.slideToggle();
  })

  $(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')){
      menu.removeAttr('style');
    }
  })

  $(abtBtn).hover(
    function(){
      menuInfo.html("This is a page made for Thomas Plunkett of Fast Company magazine by Matthew Billie. This version is built to (hopefully) be responsive and also uses some javascript. Uses JQuery library and normalize.css, other than that all code is written from scratch!");
      menuInfo.slideToggle(200, "swing");
    },
    function(){
      menuInfo.slideToggle(200, "swing");
    }
  )

  $(thanksBtn).hover(
    function(){
      menuInfo.html("Thanks to Fast Company, Flatiron School, Code Pen, Hongkiat, and anyone else I forgot!");
      menuInfo.slideToggle(200, "swing");
    },
    function(){
      menuInfo.slideToggle(200, "swing");
    }
  )

  $(inspireBtn).hover(
    function(){
      menuInfo.html("The layout for this page was inspired (obviously, I hope!) by the Fast Company Beta. Thanks! ");
      menuInfo.slideToggle(200, "swing");
    },
    function(){
      menuInfo.slideToggle(200, "swing");
    }
  )

})
