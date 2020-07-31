var dancefloor;
(function (dancefloor) {
    class Animationobject {
        constructor(_position, _velocity, _radius, _rotation) {
            this.position = _position.copy();
            this.velocity = new dancefloor.Vector(0, 0);
            this.radius = 20;
            this.rotation = 0;
        }
        draw(crc2) {
        }
        move(_timeslice) {
            let offset = new dancefloor.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        rotate(_factor) {
            this.rotation = _factor;
        }
    }
    dancefloor.Animationobject = Animationobject;
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=Animationobject.js.map