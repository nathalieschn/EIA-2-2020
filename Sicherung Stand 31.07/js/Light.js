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
            dancefloor.crc3.beginPath();
            dancefloor.crc3.arc(20, 20, 5, 1, 5 * Math.PI);
            dancefloor.crc3.closePath();
            dancefloor.crc3.moveTo(20, 30);
            dancefloor.crc3.lineTo(20, 55);
            dancefloor.crc3.moveTo(30, 30);
            dancefloor.crc3.lineTo(50, 50);
            dancefloor.crc3.moveTo(30, 20);
            dancefloor.crc3.lineTo(60, 20);
            dancefloor.crc3.strokeStyle = "white";
            dancefloor.crc3.stroke();
        }
    }
    dancefloor.Light = Light;
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=Light.js.map