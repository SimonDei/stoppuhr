// Speichere die HTML Elemente in Variablen ab.
const stopwatch = document.querySelector('#stopwatch');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

// Erstelle Variablen für die Stunden, Minuten und Sekunden der Stopuhr. 
let hours = 0;
let minutes = 0;
let seconds = 0;

// Erstelle eine Variable in der die ID des Intervalls gespeichert wird.
// Die ID wird benötigt um den Intervall wieder zu stopppen.
let intervalId = 0;

// Wenn der Start-Button gedrückt wird, wird die "startInterval" Funktion aufgerufen.
startButton.addEventListener('click', function() {
  startInterval();
});

// Wenn der Stop-Button gedrückt wird, wird die "stopInterval" Funktion aufgerufen.
stopButton.addEventListener('click', function() {
  stopInterval();
});

// Wenn der Reset-Button gedrückt wird, wird "stopInterval" aufgerufen und 
// Stunden, Minuten und Sekunden werden auf 0 zurückgesetzt.
// Am Ende wird "updateStopwatchText" aufgerufen, um die Anzeige zu aktualisieren.
resetButton.addEventListener('click', function() {
  stopInterval();

  hours = 0;
  minutes = 0;
  seconds = 0;

  updateStopwatchText();
});

// Die "startInterval" Funktion startet einen Intervall (https://developer.mozilla.org/ru/docs/Web/API/Window/setInterval)
// Die Funktion braucht zwei Parameter, eine Callback-Funktion und eine Zahl.
// Die Zahl gibt an, in welchem zeitlichen Abstand die Callback-Funktion aufgerufen wird.
// 1000 bedeutet hier alle 1000 Millisekunden oder umgerechnet 1 Sekunde.
function startInterval() {
  // Das Ergebnis von "setInterval" wird in der "intervalId" abgespeichert.
  // Die ID kann später benutzt werden und den Intervall wieder zu stoppen.
  intervalId = setInterval(function() {
    // Diese Funktion wird jede Sekunde ausgeführt.

    // Erhöhe den Wert von "seconds" um 1.
    seconds++;

    // Wenn der Sekundenwert größer oder gleich 60 ist werden die Sekunden wieder auf 0 gesetzt
    // und die Minuten um 1 erhöht.
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }

    // Wenn der Minutenwert größer oder gleich 60 ist werden die Minuten wieder auf 0 gesetzt
    // und die Stunden um 1 erhöht.
    if (minutes >= 60) {
      hours++;
      minutes = 0;
    }

    // Am Ende der Callback-Funktion wird die Antzeige aktualisiert.
    updateStopwatchText();
  }, 1000);
}

// Die Funktion "stopInterval" ruft "clearInterval" auf um den Intervall zu stoppen.
function stopInterval() {
  clearInterval(intervalId);
}

// Die Funktion "updateStopwatchText" baut den Text zusammen, der in der Überschrift angezeigt werden soll.
// Die Anzeige halt folgendes Format "00:00:00".
// Die ersten beiden Nullen sind die Stunden, die zweiten beiden die Minuten und die dritten beiden die Sekunden.
function updateStopwatchText() {
  // Erstelle eine Variable "text", die ein leerer String ist.
  let text = '';

  // Wenn die Stunden einstellig sind (weniger als 10), füge vor dem Wert der Stunden eine 0 hinzu.
  if (hours < 10) {
    text += '0';
  }
  // Füge an den String "text" den Wert der Stunden hinzu.
  text += hours;
  // Nach den Stunden kommt ein Doppelpunkt.
  text += ':';

  // Mache das gleiche für die Minuten.
  if (minutes < 10) {
    text += '0';
  }
  text += minutes;
  text += ':';

  // Mache das Gleiche für die Sekunden.
  if (seconds < 10) {
    text += '0';
  }
  text += seconds;

  // Setzte den Text der Anzeige auf den zusammengebauten Wert von "text".
  stopwatch.textContent = text;
}
