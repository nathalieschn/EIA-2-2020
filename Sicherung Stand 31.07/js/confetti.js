var dancefloor;
(function (dancefloor) {
    class Confetti extends dancefloor.Animationobject {
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
            dancefloor.crc4.rect(10, 10, 10, 5);
            dancefloor.crc4.rect(40, 15, 10, 5);
            dancefloor.crc4.rect(15, 30, 10, 5);
            dancefloor.crc4.rect(45, 40, 10, 5);
            dancefloor.crc4.rect(5, 50, 10, 5);
            dancefloor.crc4.fillStyle = "silver";
            dancefloor.crc4.fill();
        }
    }
    dancefloor.Confetti = Confetti;
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=confetti.js.map