var personObj = new Object();

/*
function suchen() {
    fetch("https://gibm.becknet.ch/personaldaten/personal.php?name=julian")
  .then(response => response.json())
  .then(data => personObj = data);
  console.log(personObj);

  $("p#queryresults").append(personObj.success);

}
*/
/*
function search() {
  $.get("https://gibm.becknet.ch/personaldaten/personal.php?name=julian", function (data) {
    $("p#queryresults").append(data);
    alert("Load was performed.");
  });
}
*/

function search() {
    $.getJSON('https://gibm.becknet.ch/personaldaten/personal.php?name=julian', function (data) {
      $("#queryresults").text(data.data[0].vorname);
    });
}

/*
(document).ready(function () {
  $("searchButton").click(function () {
    $.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback', function (data) {
      $("p#queryresults").append(data);
    });
  });
});
*/

