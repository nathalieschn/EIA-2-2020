var A02;
(function (A02) {
    let cards = [];
    let allCards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    let y;
    let z;
    let x;
    let anzahlc;
    function anzCards() {
        anzahlc = prompt("Anzahl der Kartenpaare eingeben 5-25");
        y = parseInt(anzahlc);
    }
    anzCards();
    let anzahlp;
    function anzPlayer() {
        anzahlp = prompt("Anzahl der Spieler eingeben 1-4");
        z = parseInt(anzahlp);
    }
    anzPlayer();
    function shuffleCards() {
        for (let x = 0; x < (y * 2); x++) {
            let randomCard = Math.floor((Math.random() * allCards.length));
            cards.push(allCards[randomCard]);
            let prodElement = document.createElement('div');
            let card = `<div class="memory-card" id="front">${allCards[randomCard]}</div>
            <img class="memory-card" id="back" src="back.jpg"/>`;
            prodElement.innerHTML = card;
            document.getElementById("memory-game").appendChild(prodElement);
            allCards.splice(randomCard, 1);
        }
    }
    function setPlayer() {
        for (let i = 0; i < z; i++) {
            let prodElementPlayer = document.createElement('div');
            let player = `<div class="player">Spieler</div>`;
            prodElementPlayer.innerHTML = player;
            document.getElementById("player").appendChild(prodElementPlayer);
        }
    }
    shuffleCards();
    setPlayer();
})(A02 || (A02 = {}));
//# sourceMappingURL=main.js.map