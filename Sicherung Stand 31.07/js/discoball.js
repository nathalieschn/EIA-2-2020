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
            dancefloor.crc5.beginPath();
            dancefloor.crc5.arc(35, 35, 20, 1, 5 * Math.PI);
            dancefloor.crc5.closePath();
            dancefloor.crc5.moveTo(20, 25);
            dancefloor.crc5.lineTo(50, 25);
            dancefloor.crc5.moveTo(15, 35);
            dancefloor.crc5.lineTo(55, 35);
            dancefloor.crc5.moveTo(20, 45);
            dancefloor.crc5.lineTo(50, 45);
            dancefloor.crc5.moveTo(25, 20);
            dancefloor.crc5.lineTo(25, 50);
            dancefloor.crc5.moveTo(35, 15);
            dancefloor.crc5.lineTo(35, 55);
            dancefloor.crc5.moveTo(45, 20);
            dancefloor.crc5.lineTo(45, 50);
            dancefloor.crc5.strokeStyle = "black";
            dancefloor.crc5.fillStyle = "silver";
            dancefloor.crc5.fill();
            dancefloor.crc5.stroke();
        }
    }
    dancefloor.Ball = Ball;
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=discoball.js.map