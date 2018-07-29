/*global $*/
var i = 0;
var logo = "Hello!";
var myFunction = setInterval(function(){
    document.getElementById("logo").innerHTML += logo.charAt(i);
    i++;
    if(i===logo.length){
        
        clearInterval(myFunction);
        $(".container").fadeIn("slow").delay(1000);
    }
},80);
$("input").on("click",function(){
     $(this).attr("placeholder"," ");
    
});
$("input").keypress(function(event){
  var input = $(this).val();
      if(input.length===0 && event.which===13){
          $("#warningg").attr("class","warning");
          
      } else if( event.which===13) {
          
        $("#warningg").attr("class","hide").slideUp();
        $("ul").append("<li><span><i></i></span>"+input+"</li>");
        $("li").last().attr("class","listItem");
        $("i").last().attr("class","far fa-trash-alt");
        $("input").val("");
          deleteTodo();
    }
});

var deleteTodo = function(){
    $("li span").click(function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    });
    
}
deleteTodo();
    
$("li").click(function(){
    $(this).toggleClass("completed");
    
});


    







