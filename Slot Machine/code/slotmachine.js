var images = [
    '../assets/slot1.png', 
    '../assets/slot2.png', 
    '../assets/slot3.png',
    '../assets/slot4.png', 
    '../assets/slot5.png',
    '../assets/slot6.png'
];

var balance = 100;

var startButton = document.getElementById('start');

if(startButton.addEventListener){
    startButton.addEventListener('click', slotMachine(), false);
}

function slotMachine() {


    fetch("https://reqres.in/api/users", {
        // Request Einstellungen
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // Reqeust Body für POST, braucht stringified da body kein JSON
        body: JSON.stringify({
            name: "Julian"
        })
    })
    // Liefert das resultat im JSON Format
    .then(res => res.json())
    // promise dieser res.json methode, zeigt die daten in der Konsole an
    .then(data => console.log(data))


    var xhttp = new XMLHttpRequest();

    if(xhttp.readyState < 4) {
        document.getElementById("ausgabeajax").innerHTML = "Request Pending" 
        + " Ready State:" + xhttp.readyState;
    } else if(readyState == 4) { 
        if(xhttp.status == 200) {
            document.getElementById("ausgabeajax").innerHTML = xhttp.responseText;
        }
    } else {
        document.getElementById("ausgabeajax").innerHTML = "File not found";
    }
    // Aufbau des requests
    xhttp.open("GET", "testfile.txt", true);
    xhttp.send();
    
    if(balance <= 0) {
        
    }
    balance -= 1;

    var randomOne = Math.round(Math.random() * 5);
    var randomTwo = Math.round(Math.random() * 5);
    var randomThree = Math.round(Math.random() * 5);

    var imageOne = document.getElementById('bild1');
    imageOne.src = images[randomOne];

    var imageTwo = document.getElementById('bild2');
    imageTwo.src = images[randomTwo];

    var imageThree = document.getElementById('bild3');
    imageThree.src = images[randomThree];

    hasWon(randomOne, randomTwo, randomThree);

}

function hasWon(img1, img2, img3) {
    var ausgabe = document.getElementById('ausgabe');
    var htmlBalance = document.getElementById('balance');
    
    if(img1 == img2 && img1 == img3) {
        ausgabe.innerHTML = 'Sie haben Gewonnen';
        balance += 50;
    } else {
        ausgabe.innerHTML = 'Leider nix';
    }
    htmlBalance.innerHTML = balance;

}
