$("h1").css("color","red");
$("h2.blue").css("color","green");
$("h3#second").css("color","red");
$("p:first").text("New paragraph text");
$("p:last").wrap("<em></em>");
$("ul").append("<li id='four'>Hello new List Element</li>");
jQuery("li#four").prop("id","five");
