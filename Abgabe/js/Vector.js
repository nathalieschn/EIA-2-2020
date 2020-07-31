var dancefloor;
(function (dancefloor) {
    class Vector {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        getRandom(_minLength, _maxLength) {
            let vector = new Vector(0, 0);
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        }
        get length() {
            return Math.hypot(this.x, this.y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        scale(_scale) {
            this.x *= _scale;
            this.y *= _scale;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    dancefloor.Vector = Vector;
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=Vector.js.map