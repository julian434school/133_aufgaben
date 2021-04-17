var berufeList;
var klassenList;
var selectionBerufe;
var selectionKlassen;
var tableList = [];

// Füllt die Berufe Dropdown mit dem JSON resultat der Anfrage der URL auf
function searchBerufe() {
  $.getJSON('http://sandbox.gibm.ch/berufe.php', function (data) {
    berufeList = data;
    var sel = document.getElementById('berufsgruppe');
    for (var i = 0; i < berufeList.length; i++) {
      var opt = document.createElement('option');
      opt.innerHTML = berufeList[i].beruf_name;
      opt.value = berufeList[i].beruf_id;
      sel.appendChild(opt);
    }
  })
    // Gibt eine Nachricht zurück, falls die Anfrage fehlschlägt
    .fail(function () {
      message = "Berufe können nicht geladen werden!";
      showError(message);
    })
}

function getDropdownSelectionBerufe() {
  this.selectionBerufe = $("#berufsgruppe option:selected").val();
  console.log(this.selectionBerufe);
  searchKlassen();
}

function getDropdownSelectionKlasse() {
  this.selectionKlassen = $("#klassengruppe option:selected").val();
  console.log(this.selectionKlassen);
  searchTableData();
  $("#tabledata").empty();
  buildHtmlTable();
}

// Füllt die Klassen Dropdown mit dem JSON resultat der Anfrage der URL mit dem enstprechendem Beruf auf
function searchKlassen() {
  $.getJSON("http://sandbox.gibm.ch/klassen.php?beruf_id=" + this.selectionBerufe, function (data) {
    $(".errorBar").empty();
    $("#klassengruppe").empty();
    klassenList = data;
    if (data.length == 0) {
      $("#klassengruppe").prop("disabled", true);
    } else {
      $("#klassengruppe").prop("disabled", false);
    }
    var sel = document.getElementById('klassengruppe');
    for (var i = 0; i < klassenList.length; i++) {
      var opt = document.createElement('option');
      opt.innerHTML = klassenList[i].klasse_name;
      opt.value = klassenList[i].klasse_id;
      sel.appendChild(opt);
    }
  })
    // Gibt eine Nachricht zurück, falls die Anfrage fehlschlägt
    .fail(function () {
      message = "Klassen können nicht geladen werden!";
      showError(message);
    })

}

// Füllt die Klassen Dropdown mit dem JSON resultat der Anfrage der URL mit dem enstprechendem Beruf auf
function searchTableData() {
  $.getJSON("http://sandbox.gibm.ch/tafel.php?klasse_id=" + this.selectionKlassen, function (data) {
    tableList = data;
    if (data.length == 0) {
      $("#stundenplanrow").prop("disabled", true);
    } else {
      $("#stundenplanrow").prop("disabled", false);
    }
  })
    // Gibt eine Nachricht zurück, falls die Anfrage fehlschlägt
    .fail(function () {
      message = "Tabelle konnte nicht geladen werden!";
      showError(message);
    })

}

function showError(errorMessage) {
  // Löscht die vohrige Error Nachricht und fügt den neuen hinzu
  $(".errorBar").empty().append(errorMessage);
}


function buildHtmlTable() {
  var columns = addAllColumnHeaders(tableList);

  for (var i = 0; i < tableList.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = tableList[i][columns[colIndex]];
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

searchBerufe();
