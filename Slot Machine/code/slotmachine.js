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
    if(img1 == img2 && img1 == img3) {
        var ausgabe = document.getElementById('ausgabe');
        ausgabe.innerHTML = 'Sie haben Gewonnen';
    } else {
        var ausgabe = document.getElementById('ausgabe');
        ausgabe.innerHTML = 'Leider nix';
    }
}



