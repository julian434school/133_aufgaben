var personObj = new Object();

function suchen() {
    fetch("https://gibm.becknet.ch/personaldaten/personal.php?name=julian")
  .then(response => response.json())
  .then(data => personObj = data);
  console.log(personObj);

  $("p#queryresults").append(personObj.success);

}



