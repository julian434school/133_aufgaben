

$("h1").css("color","red");
$("h2.blue").css("color","green");
$("h3#second").css("color","red");
$("p:first").text("New paragraph text");
$("p:last").wrap("<em></em>");
$("ul").append("<li id='four'>Hello new List Element</li>");
jQuery("li#four").prop("id","five");
$("li").each(function) {
    var $id = this.dispatchEvent;
    $(this).append("<em>" + $id + "</em>")
}
$("li").css("font-size","30px");
$(document).ready(function(){
    $("li").click(function(){
      $("li").remove();
    });
  });