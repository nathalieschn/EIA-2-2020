namespace dancefloor {

    export class Animationobject {

        public position: Vector; 
        public velocity: Vector; 
        public radius: number;
        public rotation: number;

        constructor(_position: Vector, _velocity: Vector, _radius: number, _rotation: number) {

            this.position = _position.copy();
            this.velocity = new Vector(0,0);
            this.radius = 20;
            this.rotation = 0;


        }

        public  draw(crc2: CanvasRenderingContext2D): void {
        }

        public move(_timeslice: number): void {

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

        }

        public rotate(_factor: number): void {
            this.rotation = _factor;
        }
}}

