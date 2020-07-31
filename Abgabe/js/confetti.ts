    namespace dancefloor {

        export class Confetti extends Animationobject {
    
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
    
                crc2.rect(10,10,10,5);
                crc2.rect(40,15,10,5);
                crc2.rect(15,30,10,5);
                crc2.rect(45,40,10,5);
                crc2.rect(5,50,10,5);
        
                crc2.fillStyle="silver";
                crc2.fill();
            }
        }
    }