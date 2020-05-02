var A02;
(function (A02) {
    let cards = [];
    let allCards = ["hello", "Hallo", "goodbye", "Tschüss", "see", "sehen", "Corona", "Corona", "München", "Munich", "bed", "Bett", "bowl", "Schüssel", "card", "Karte", "flower", "Blume", "country", "Land", "dog", "Hund", "love", "Liebe", "blind", "Blind", "light", "Licht", "food", "Essen", "air", "Luft", "mood", "Stimmung", "despair", "EIA2", "cat", "Katze", "bird", "Vogel", "cup", "Tasse", "bottle", "Flasche", "dream", "Traum", "ear", "Ohr", "space", "Weltall", "tiger", "Tiger"];
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
        anzahlp = prompt("Anzahl der Spieler eingeben");
        z = parseInt(anzahlp);
    }
    anzPlayer();
    function shuffleCards() {
        for (let x = 0; x < y; x++) {
            let randomCard = Math.floor((Math.random() * allCards.length));
            cards.push(allCards[randomCard]);
            let prodElement = document.createElement('div');
            let karte = `<p class="${allCards[randomCard]}">${allCards[randomCard]}</p>`;
            prodElement.innerHTML = karte;
            document.getElementById("memory-card").appendChild(prodElement);
            allCards.splice(randomCard, 1);
        }
    }
})(A02 || (A02 = {}));
//# sourceMappingURL=main.js.map