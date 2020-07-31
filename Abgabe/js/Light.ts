namespace dancefloor {

    export class Light extends Animationobject { 

       constructor(_position?: Vector) {

            super(_position); 
    
    
            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);
    
            this.radius = 20;
    
    
            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(50, 20);
        }

        public draw(_crc: CanvasRenderingContext2D): void {
            
            _crc.save(); 
            _crc.translate(this.position.x, this.position.y);
            _crc.translate(-40, -40);
            _crc.scale(1.2, 1.2); 

            console.log(this.position.x, this.position.y); 


            _crc.beginPath();

        _crc.arc(35,35,20,1,5*Math.PI);
        _crc.closePath();

        _crc.moveTo(20,25);
        _crc.lineTo(50,25);
        _crc.moveTo(15,35);
        _crc.lineTo(55,35);
        _crc.moveTo(20,45);
        _crc.lineTo(50,45);

        _crc.moveTo(25,20);
        _crc.lineTo(25,50);
        _crc.moveTo(35,15);
        _crc.lineTo(35,55);
        _crc.moveTo(45,20);
        _crc.lineTo(45,50);

        

        

        _crc.strokeStyle="white";

        _crc.fillStyle="pink";
        _crc.fill();
        _crc.stroke();

            _crc.restore(); 
        }



    }

}
