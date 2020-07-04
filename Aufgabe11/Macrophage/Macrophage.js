var L10_Virus;
(function (L10_Virus) {
    class Macrophage extends Cell {
        constructor(_position) {
            super(_position);
        }
        draw() {
            crc2.beginPath();
            crc2.arc(this.position.x + 40, this.position.y + 40, 40, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 18, this.position.y + 12, 35, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 80, this.position.y + 52, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "#008080";
            crc2.closePath();
            crc2.fill();
            // Add a nucleus 
            crc2.beginPath();
            crc2.arc(this.position.x + 40, this.position.y + 40, 7, 0, 2 * Math.PI);
            crc2.fillStyle = "darkslategrey";
            crc2.closePath();
            crc2.fill();
        }
    }
    L10_Virus.Macrophage = Macrophage;
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=Macrophage.js.map