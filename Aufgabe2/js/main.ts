namespace A02 {

    let allCards: string [] = [];
    let cards: string[] = [];
    
    let values: string[] = ["hello","Hallo","goodbye","Tschüss","see","sehen","Corona","Corona","München","Munich","bed","Bett","bowl","Schüssel","card","Karte","flower","Blume","country","Land","dog","Hund","love","Liebe","blind","Blind","light","Licht","food","Essen","air","Luft","mood","Stimmung","despair","EIA2","cat","Katze","bird","Vogel","cup","Tasse","bottle","Flasche","dream","Traum","ear","Ohr","space","Weltall","tiger","Tiger"]
    let y: number;

let anzahlc: string
function anzCards () : void {
    anzahlc = prompt ("Anzahl der Kartenpaare eingeben 5-25");
    y = parseInt(anzahlc); 
}
anzCards();

let anzahlp: string
function anzPlayer () : void {
    anzahlp = prompt ("Anzahl der Spieler eingeben");
    y = parseInt(anzahlp); 
}
anzPlayer();

}
