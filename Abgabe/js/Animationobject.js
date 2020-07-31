var dancefloor;
(function (dancefloor) {
    class Animationobject {
        constructor(_position) {
            // console.log("Moveable");
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new dancefloor.Vector(0, 0);
            this.radius = 20;
            this.velocity = new dancefloor.Vector(0, 0);
            this.rotation = 0;
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            //offset.scale(_timeslice);
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (dancefloor.crc0.canvas.width);
            if (this.position.y < 0)
                this.position.y += dancefloor.crc0.canvas.height;
            if (this.position.x > (dancefloor.crc0.canvas.width))
                this.position.x -= (dancefloor.crc0.canvas.width);
            if (this.position.y > dancefloor.crc0.canvas.height)
                this.position.y -= dancefloor.crc0.canvas.height;
        }
    }
    dancefloor.Animationobject = Animationobject;
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=Animationobject.js.map