var dancefloor;
(function (dancefloor) {
    class Ball extends dancefloor.Animationobject {
        constructor(_position, _velocity, _radius, _rotation) {
            super(_position, _velocity, _radius, _rotation);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new dancefloor.Vector(0, 0);
            this.radius = 10;
            this.velocity = new dancefloor.Vector(1, 1);
            this.velocity = dancefloor.Vector.getRandom(1, 1);
        }
        move(_timeslice) {
            let offset = new dancefloor.Vector(0, 0);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (dancefloor.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += dancefloor.crc2.canvas.height;
            if (this.position.x > (dancefloor.crc2.canvas.width))
                this.position.x -= (dancefloor.crc2.canvas.width);
            if (this.position.y > dancefloor.crc2.canvas.height)
                this.position.y -= dancefloor.crc2.canvas.height;
        }
        draw(_crc) {
            dancefloor.crc2.beginPath();
            dancefloor.crc2.arc(35, 35, 20, 1, 5 * Math.PI);
            dancefloor.crc2.closePath();
            dancefloor.crc2.moveTo(20, 25);
            dancefloor.crc2.lineTo(50, 25);
            dancefloor.crc2.moveTo(15, 35);
            dancefloor.crc2.lineTo(55, 35);
            dancefloor.crc2.moveTo(20, 45);
            dancefloor.crc2.lineTo(50, 45);
            dancefloor.crc2.moveTo(25, 20);
            dancefloor.crc2.lineTo(25, 50);
            dancefloor.crc2.moveTo(35, 15);
            dancefloor.crc2.lineTo(35, 55);
            dancefloor.crc2.moveTo(45, 20);
            dancefloor.crc2.lineTo(45, 50);
            dancefloor.crc2.strokeStyle = "black";
            dancefloor.crc2.fillStyle = "silver";
            dancefloor.crc2.fill();
            dancefloor.crc2.stroke();
        }
    }
    dancefloor.Ball = Ball;
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=discoball.js.map