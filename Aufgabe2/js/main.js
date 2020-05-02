var A02;
(function (A02) {
    let allCards = [];
    let cards = [];
    let values = ["hello", "Hallo", "goodbye", "Tschüss", "see", "sehen", "Corona", "Corona", "München", "Munich", "bed", "Bett", "bowl", "Schüssel", "card", "Karte", "flower", "Blume", "country", "Land", "dog", "Hund", "love", "Liebe", "blind", "Blind", "light", "Licht", "food", "Essen", "air", "Luft", "mood", "Stimmung", "despair", "EIA2", "cat", "Katze", "bird", "Vogel", "cup", "Tasse", "bottle", "Flasche", "dream", "Traum", "ear", "Ohr", "space", "Weltall", "tiger", "Tiger"];
    let y;
    let anzahlc;
    function anzCards() {
        anzahlc = prompt("Anzahl der Kartenpaare eingeben 5-25");
        y = parseInt(anzahlc);
    }
    anzCards();
    let anzahlp;
    function anzPlayer() {
        anzahlp = prompt("Anzahl der Spieler eingeben");
        y = parseInt(anzahlp);
    }
    anzPlayer();
})(A02 || (A02 = {}));
//# sourceMappingURL=main.js.map