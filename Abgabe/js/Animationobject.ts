namespace dancefloor {


    export abstract class Animationobject {

        public position: Vector;
        public rotation: number; 
        public radius: number;   
        public velocity: Vector;

        constructor(_position?: Vector) {

            // console.log("Moveable");
            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);

            this.radius = 20;
            this.velocity = new Vector(0, 0);
            this.rotation = 0; 
            
        }

        public  abstract draw(_crc: CanvasRenderingContext2D): void;

        public move(_timeslice: number): void {

            let offset: Vector = this.velocity.copy();
            //offset.scale(_timeslice);
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += (crc0.canvas.width);
            if (this.position.y < 0)
                this.position.y += crc0.canvas.height;
            if (this.position.x > (crc0.canvas.width))
                this.position.x -= (crc0.canvas.width);
            if (this.position.y > crc0.canvas.height)
                this.position.y -= crc0.canvas.height;

        }

  
    }
}

