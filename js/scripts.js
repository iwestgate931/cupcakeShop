$(document).ready(function(){
  $(".faaast").slideDown(2000);
  $(".slooow").delay(2000).slideDown(8000);
  $(".review").click(function(){
    $(this).fadeToggle("slow");
  });
  $("#listen").click(function(){
    $(".review").fadeIn("slow");
  });
  $("#backgroundChanger").click(function(){
    $("body").css("background-image","url('Images/cookieBackground.jpeg')")
  });
})
