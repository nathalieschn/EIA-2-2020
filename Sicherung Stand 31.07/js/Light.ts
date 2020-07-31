namespace dancefloor {

    export class Light extends Animationobject {

        constructor(_position: Vector, _velocity: Vector, _radius: number, _rotation: number) {
    
        super(_position, _velocity, _radius, _rotation);
    
            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);
    
            this.radius = 10;
    
    
            this.velocity = new Vector(1, 1);
            this.velocity = Vector.getRandom(1, 1);

        }

        move(_timeslice: number): void {
            
            let offset: Vector = new Vector(0,0);
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
    
    
        
        
        public draw(_crc: CanvasRenderingContext2D): void {

        crc3.beginPath();
        crc3.arc(20,20,5,1,5*Math.PI);
        crc3.closePath();
    
        crc3.moveTo(20, 30);
        crc3.lineTo(20,55);
        crc3.moveTo(30, 30);
        crc3.lineTo(50,50);
        crc3.moveTo(30,20);
        crc3.lineTo(60, 20);
        crc3.strokeStyle="white";
        crc3.stroke();
        }
    }
}
