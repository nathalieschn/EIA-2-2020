namespace A02 {

    /* Ich habe kurz vor Abgabe gemerkt, dass ich die Aufgabe falsch verstanden habe. Ich hab versucht ein normales
    Memory Spiel zu programmieren. Ich hoffe das könnt ihr trotzdem zählen lassen :/...*/

    /*Ergänzung zum Kommentar: Evtl. war ich auf der Seite einer anderen Aufgabe. Vielleicht die vom letzten Semester? 
     Ich bin mir nämlich ziemlich sicher, dass ich mir die Anforderungen, die in meinem Konzept stehen in der Aufgabe
     gelesen hatte.) */
    
    let cards: string[] = [];
    
    let allCards: string[] = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"]
    let y: number;
    let z: number;
    let x: number;

let anzahlc: string
function anzCards () : void {
    anzahlc = prompt ("Anzahl der Kartenpaare eingeben 5-25");
    y = parseInt(anzahlc); 
}
anzCards();

let anzahlp: string
function anzPlayer () : void {
    anzahlp = prompt ("Anzahl der Spieler eingeben 1-4");
    z = parseInt(anzahlp); 
}
anzPlayer();

function shuffleCards () {

    for (let x: number = 0; x < (y*2); x++) {
        let randomCard = Math.floor((Math.random()*allCards.length));
        cards.push(allCards[randomCard]);
        let prodElement = document.createElement('div');
            let card: string= `<div class="memory-card" id="front">${allCards[randomCard]}</div>
            <img class="memory-card" id="back" src="back.jpg" onclick="flipCard" />`
            prodElement.innerHTML = card;
            document.getElementById("memory-game").appendChild(prodElement);            
            allCards.splice(randomCard, 1);
    }
}

function setPlayer () {

    for (let i: number = 0; i < z; i++) {

        let prodElementPlayer = document.createElement('div');
            let player: string= `<div class="player">Spieler</div>`
            prodElementPlayer.innerHTML = player;
            document.getElementById("player").appendChild(prodElementPlayer);
    }
}



shuffleCards();
setPlayer ();

function flipCard() {
    document.getElementById('front').style.cssText = 'visibility: visible';
    document.getElementById('back').setAttribute("front","visiblecard");
    
}


}
