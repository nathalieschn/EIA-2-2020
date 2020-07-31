namespace dancefloor {

    export class Ball extends Animationobject {

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

            crc2.beginPath();
            crc2.arc(35,35,20,1,5*Math.PI);
            crc2.closePath();
    
            crc2.moveTo(20,25);
            crc2.lineTo(50,25);
            crc2.moveTo(15,35);
            crc2.lineTo(55,35);
            crc2.moveTo(20,45);
            crc2.lineTo(50,45);
    
            crc2.moveTo(25,20);
            crc2.lineTo(25,50);
            crc2.moveTo(35,15);
            crc2.lineTo(35,55);
            crc2.moveTo(45,20);
            crc2.lineTo(45,50);
    
            
    
            
    
            crc2.strokeStyle="black";
    
            crc2.fillStyle="silver";
            crc2.fill();
            crc2.stroke();
        }
    }
}
