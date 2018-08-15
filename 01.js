$(document).ready(function(){
  var size = $(window).width();
  if(size < 1200)
  {
  	$('.navbar-default').removeClass('affix');
  	$('.navbar-default').addClass('navbar-fixed-top');
  }
  else if(size > 1200)
  {
  	$('.navbar-default').removeClass('navbar-fixed-top');
  	$('.navbar-default').addClass('affix');
  }
});