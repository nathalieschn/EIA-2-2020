namespace dancefloor {

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc3: CanvasRenderingContext2D;
    let center: number = 0.62;
    
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas#confetti");
        if (!canvas)
        return;

        crc3 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawConfetti({x: 30, y: 20});
    }

    function drawConfetti(_position: Vector) {
        
        crc3.rect(10,10,10,5);
        crc3.rect(40,15,10,5);
        crc3.rect(15,30,10,5);
        crc3.rect(45,40,10,5);
        crc3.rect(5,50,10,5);

        crc3.fillStyle="silver";
        crc3.fill();
    }

    }