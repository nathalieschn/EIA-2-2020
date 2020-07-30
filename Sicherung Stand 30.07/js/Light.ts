namespace dancefloor {




    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    
    
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas#lights");
        if (!canvas)
        return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawLights();
    }

    export function drawLights() {
        
        crc2.beginPath();
        crc2.arc(20,20,5,1,5*Math.PI);
        crc2.closePath();
    
        crc2.moveTo(20, 30);
        crc2.lineTo(20,55);
        crc2.moveTo(30, 30);
        crc2.lineTo(50,50);
        crc2.moveTo(30,20);
        crc2.lineTo(60, 20);
        crc2.strokeStyle="white";
        crc2.stroke();


    }
}
