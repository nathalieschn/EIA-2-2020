var dancefloor;
(function (dancefloor) {
    class Light extends dancefloor.Animationobject {
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
            dancefloor.crc2.arc(20, 20, 5, 1, 5 * Math.PI);
            dancefloor.crc2.closePath();
            dancefloor.crc2.moveTo(20, 30);
            dancefloor.crc2.lineTo(20, 55);
            dancefloor.crc2.moveTo(30, 30);
            dancefloor.crc2.lineTo(50, 50);
            dancefloor.crc2.moveTo(30, 20);
            dancefloor.crc2.lineTo(60, 20);
            dancefloor.crc2.strokeStyle = "white";
            dancefloor.crc2.stroke();
        }
    }
    dancefloor.Light = Light;
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=Light.js.map