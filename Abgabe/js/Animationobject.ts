namespace dancefloor {

    export class Animationobject {

        public position: Vector; 
        public velocity: Vector; 
        public expendable: boolean = false; 
        public size: number; 
        public radius: Vector; 
        public rotation: number;

        constructor(_position: Vector) {
            this.position = _position;
            this.radius = new Vector(0, 0);
        }

        public  draw() {
        }

        public move(_timeslice: number): void {

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
            this.position.x += (crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > (crc2.canvas.width))
                this.position.x -= (crc2.canvas.width);
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        public rotate(_factor: number): void {
            this.rotation = _factor;
        }
}}