var L10_Virus;
(function (L10_Virus) {
    class BodyCell extends Cell {
        constructor(_position, _isInfected) {
            super(_position);
            let colorIndex = Math.round(Math.random() * 3);
            this.isInfected = _isInfected;
            if (this.isInfected == true) {
                this.color = "#891911";
            }
            else {
                let colors = ["#1bd080", "#55f6a2", "#54b27d", "#00ab5f"];
                this.color = colors[colorIndex];
            }
            this.nucleusPosX = this.position.x + 2;
            this.nucleusPosY = this.position.y - 2;
            this.nucleus = "#888888";
            this.velocity.add(new Vector(0, 12));
        }
        draw() {
            crc2.save();
            let startAngle = (Math.PI / 180);
            let endAngle = (Math.PI / 180) * 360;
            // Create the Cell itself
            crc2.beginPath();
            crc2.ellipse(this.position.x, this.position.y, 40, 50, 0, startAngle, endAngle);
            crc2.closePath();
            crc2.strokeStyle = this.color;
            crc2.fillStyle = this.color;
            crc2.stroke();
            crc2.fill();
            //Draw Nucleus 
            //They are not perfect circles, to make them look more naturally
            crc2.beginPath();
            crc2.arc(this.nucleusPosX, this.nucleusPosY, 10, Math.random(), 1.95 * Math.PI);
            crc2.fillStyle = this.nucleus + "66";
            crc2.closePath();
            crc2.fill();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.position.y < 72)
                this.velocity = new Vector(0, 10);
            if (this.position.y > 87)
                this.velocity = new Vector(0, -10);
        }
    }
    L10_Virus.BodyCell = BodyCell;
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=BodyCell.js.map