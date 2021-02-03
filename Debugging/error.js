// For Debugging
console.log
// definieren der Variablen
var myfont_face = "Arial"; // Schriftfarbe
var myfont_size = "24"; // Schriftgrösse
var myfont_color = "#ffffcc"; // Schriftfarbe
var myback_color = "#000066"; // Hintergrundfarbe
var mywidth = 150; // Breite der Box
// Mistake: No Semicolon but rather :
// var my12_hour = 0: // 24 Stunden => 0; 12 Stunden mit AM/PM => 1
var my12_hour = 0; // 24 Stunden => 0; 12 Stunden mit AM/PM => 1



var dn = "";

/*
 * ins HTML Dokument schreiben:
 * Element <div> mit einer ID damit dieses Element einfach engsprochen werden kann
 * width und background-color als CSS-Attribute um die Grösse und Farbe der Box zu bestimmen
 */
document.write('<div id="LiveClock" style="width:' + mywidth + 'px; background-color:' + myback_color + '"></div>');

// Start der Funktion show_clock()
function show_clock() {

	// erstellen eines neuen Datumobjektes mit aktuellem Datum und Zeit
	var Digital = new Date();
	// ermitteln der aktuellen Stunde über die  Methode getHours() des Objektes
	var hours = Digital.getHours();
	// ermitteln der aktuellen Minuten mit der Methode getMinutes() des Objektes
	var minutes = Digital.getMinutes();
	// ermitteln der aktuellen Sekunden mit der Methode getSeconds() des Objektes
	var seconds = Digital.getSeconds();

	// wenn Vartiable my_hour wahr / true ist
	if (my12_hour) {
		// Variable dn auf AM (Ante meridiem) Vormittag
		dn = "AM";
		// wenn Variable hours grösser (>) als 12
		if (hours > 12) {
			// Variable dn auf PM (Post meridiem) Nachmittag
			dn = "PM";
			// 12 Stunden von Variable hours abziehen
			hours = hours - 12;
		}
		// wenn Variable hours gleich (==) 0, hours auf 12 setzen
		if (hours == 0) {
			hours = 12;
		}
        // sonst Variable dn leeren
        // Mistake: Missing {
	} else {
        dn = "";
    }
	// wenn Variable minutes gleiner gleich (<=) 9, führendes 0 voranstellen
	if (minutes <= 9) {
		minutes = "0" + minutes;
	}
	// wenn Variable seconds gleiner gleich (<=) 9, führendes 0 voranstellen
	if (seconds <= 9) {
		seconds = "0" + seconds;
	}

	// Variable myclock initialisieren
	var myclock = '';
	// Variable myclock mit einem String ergänen (+=);  String-Concatenation / Zusammensetzung (+)
    myclock += '<p style="color:' + myfont_color + '; font-family:' + myfont_face + '; font-size:' + myfont_size + 'pt;">';
    // Mistake: Missing + between 
	myclock += hours + ':' + minutes + ':' + seconds + ' ' + dn;
	myclock += '</p>';

	// HTML-Element mit der ID "LiveClock" (Zeile 17) in Variable el speichern 
	var el = document.getElementById("LiveClock");
	// Inhakt der Variable myclock mit der Methode innerHTML in das Element el schreiben
	el.innerHTML = myclock;

	// Warten für 1000Millisekunden, dann wieder die Funktion show_clock aufrufen.
	setTimeout("show_clock()", 1000);
}

// Wenn Browser neuer als IE 8
// Mistake: Missing ) 
if (document.addEventListener) {
    // Eventlistener wartet, bis der DOM (Document Object Model) geladen ist, ruft dann die Funktion show_clock auf
    // Mistake: C on show_clock is capitalized 
	document.addEventListener('DOMContentLoaded', show_clock, false);
	// Wenn Browser IE8 und älter
} else {
	// Eventlistener wartet, bis der DOM (Document Object Model) geladen ist, ruft dann die Funktion show_clock auf
    // Mistake: C on show_clock is capitalized
    window.attachEvent('onload', show_clock, false);
}