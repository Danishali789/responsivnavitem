$(document).ready(function(){
    $("#b").click(function(){
      $(myModal).show();
    });

    $("#c").click(function(){
        $(myModal).hide();
      });
    
      $(".nav-btn").click(function(){
        $(".togle-menu").toggle()
        // if($(".menu").css("display","none")){
        //   $(".menu").css("display","flex");
        // }else{
        //   $(".menu").css("display","none")
          
        // }
      });
  });

  
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}