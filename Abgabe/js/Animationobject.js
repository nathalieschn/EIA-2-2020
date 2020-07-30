var dancefloor;
(function (dancefloor) {
    class Animationobject {
        constructor(_position) {
            this.expendable = false;
            this.position = _position;
            this.radius = new dancefloor.Vector(0, 0);
        }
        draw() {
        }
        move(_timeslice) {
            let offset = new dancefloor.Vector(this.velocity.x, this.velocity.y);
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
        rotate(_factor) {
            this.rotation = _factor;
        }
    }
    dancefloor.Animationobject = Animationobject;
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=Animationobject.js.map