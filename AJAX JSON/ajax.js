var myList;

function search() {
    $.getJSON('https://gibm.becknet.ch/personaldaten/personal.php?name=ju', function (data) {
      myList = data.data;
      console.log(data);
      $("#queryresults").text(data.data[0].vorname);
      buildHtmlTable();
    });
}

function inputSearch() {
  $.getJSON("https://gibm.becknet.ch/personaldaten/personal.php?name=" + document.getElementById("inputfield").value, function (data) {
    myList = data.data;
    console.log(data);
    $("#queryresults").text(data.data[0].vorname);
    buildHtmlTable();
  });
}

function buildHtmlTable() {
  var columns = addAllColumnHeaders(myList);

  for (var i = 0; i < myList.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = myList[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $("#tabledata").append(row$);
  }
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(myList) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  for (var i = 0; i < myList.length; i++) {
    var rowHash = myList[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
      }
    }
  }
  $("#tabledata").append(headerTr$);

  return columnSet;
}

