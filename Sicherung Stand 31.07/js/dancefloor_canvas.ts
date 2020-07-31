namespace dancefloor {

    // Canvas Rendering Context
    export let crc2: CanvasRenderingContext2D;
    export let crc3: CanvasRenderingContext2D;
    export let crc4: CanvasRenderingContext2D;
    export let crc5: CanvasRenderingContext2D;
    
    // HTML Elemente Typzuweisungen
    let mainCanvas: HTMLCanvasElement;
    let deleteForm: boolean
    let deleteButton: HTMLButtonElement;

    let dragDrop: boolean = false;
    let objectDragDrop: Animationobject; 

    let lightDiv: HTMLDivElement; 
    let starDiv: HTMLDivElement; 
    let triangleDiv: HTMLDivElement;

    //Array Animationobjects

    let animationobject: Animationobject[] = [];

    // Handle Load Eventlistener
    window.addEventListener("load", handleLoad);



    function handleLoad (_event: Event): void {

        //Deklarationen
        let size: HTMLDivElement = <HTMLDivElement>document.querySelector("div#canvasSize");
        let backgroundColor: HTMLDivElement = <HTMLDivElement>document.querySelector("div#canvasStyle");

        let lightDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("lights"); 
        let confettiDiv : HTMLDivElement = <HTMLDivElement>document.getElementById("confetti"); 
        let ballDiv : HTMLDivElement = <HTMLDivElement>document.getElementById("discoball"); 

        

        let deleteButton = <HTMLButtonElement>document.getElementById("deletepic");

        //Canvas 2,3,4,5 und animationObject Canvas

        mainCanvas = <HTMLCanvasElement> document.getElementById("mainCanvasDraw"); 
        crc2 = <CanvasRenderingContext2D>mainCanvas.getContext("2d");

        let lightCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("lights");
        crc3 = <CanvasRenderingContext2D>lightCanvas.getContext("2d");

        let ConfettiCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("confetti");
        crc4 = <CanvasRenderingContext2D>ConfettiCanvas.getContext("2d");

        let BallCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("discoball");
        crc5 = <CanvasRenderingContext2D>BallCanvas.getContext("2d");


        //Eventlistener
        

        size.addEventListener("change", chooseSize); 

        deleteButton.addEventListener("click", clearCanvas);

        backgroundColor.addEventListener("change", chooseBackground);

        lightDiv.addEventListener("click", generateMainCanvas);
        confettiDiv.addEventListener("click", generateMainCanvas);
        ballDiv.addEventListener("click", generateMainCanvas);


        //Startfunktionen (Sidecanvas-Malen)
        lightSideCanvas();
        confettiSideCanvas();
        ballSideCanvas();

        
    }

    // Größe des MainCanvas auswählen
    function chooseSize(_event: Event): void {
 
        let target: HTMLElement = <HTMLElement>_event.target; 
        let id: string = target.id;
        

        switch (id) {
            
            case "format1":
                crc2.canvas.width = 700; 
                crc2.canvas.height = 350; 
                


                break;
            case "format2":
                crc2.canvas.width = 500; 
                crc2.canvas.height = 350; 
              
                
                break; 
            case "format3":
                crc2.canvas.width = 350; 
                crc2.canvas.height = 350; 
               
                
                break; 

        }
    }

    // Hintergrundfarbe auswählen
    function chooseBackground (_event: Event): void {

        let target: HTMLSelectElement = <HTMLSelectElement>_event.target; 
        let id: string = target.id;
        

        switch (id) {
            
            case "style1":

                crc2.fillStyle = "#C6D1D3"; 
                crc2.fill(); 
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); 

                crc2.strokeStyle="black"
                crc2.strokeRect(60,180,90,120);
                crc2.strokeRect(360,180,90,120);

                crc2.beginPath();
                crc2.arc(105,210,15,1,5*Math.PI);
                crc2.arc(105,270,22,1,5*Math.PI);
                crc2.closePath;

                crc2.fillStyle="black";

                crc2.fill();

                crc2.beginPath();
                crc2.arc(405,210,15,1,5*Math.PI);
                crc2.arc(405,270,22,1,5*Math.PI);
                crc2.closePath;

                crc2.fillStyle="black";

                crc2.fill();

                break;


            case "style2":
                crc2.fillStyle = "#21D4EA"; 
                crc2.fill(); 
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);   
                
                crc2.strokeStyle="black"
                crc2.strokeRect(60,180,90,120);
                crc2.strokeRect(360,180,90,120);

                crc2.beginPath();
                crc2.arc(105,210,15,1,5*Math.PI);
                crc2.arc(105,270,22,1,5*Math.PI);
                crc2.closePath;

                crc2.fillStyle="pink";

                crc2.fill();

                crc2.beginPath();
                crc2.arc(405,210,15,1,5*Math.PI);
                crc2.arc(405,270,22,1,5*Math.PI);
                crc2.closePath;

                crc2.fillStyle="yellow";

                crc2.fill();

                break; 


            case "style3":
                crc2.fillStyle = "#361351"; 
                crc2.fill(); 
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); 

                crc2.strokeStyle="black"
                crc2.strokeRect(60,180,90,120);
                crc2.strokeRect(360,180,90,120);

                crc2.beginPath();
                crc2.arc(105,210,15,1,5*Math.PI);
                crc2.arc(105,270,22,1,5*Math.PI);
                crc2.closePath;

                crc2.fillStyle="black";

                crc2.fill();

                crc2.beginPath();
                crc2.arc(405,210,15,1,5*Math.PI);
                crc2.arc(405,270,22,1,5*Math.PI);
                crc2.closePath;

                crc2.fillStyle="black";

                crc2.fill();

                        
                
                break; 

        

        }

    }

    // Kleiner Canvas: Light ? Was kommt in Klammer?
    function lightSideCanvas(): void {
        let _animationobject: number;
            
            let light: Light = new Light (?);
            light.draw(crc3);
    }

    // Kleiner Canvas: Confetti
    function confettiSideCanvas(): void {
        let _animationobject: number;
            
            let confetti: Confetti = new Confetti (?);
            confetti.draw(crc4);
    }

    //Kleiner Canvas: Discoball
    function ballSideCanvas(): void {
        let _animationobject: number;
            
            let ball: Ball = new Ball (?);
            ball.draw(crc5);
    }


    // Ganzen Canvas-Inhalt löschen
    function clearCanvas(_event:Event): void {

        crc2.clearRect(0, 0, mainCanvas.width, mainCanvas.height);   
        crc2.save(); 
 
           
    }

    //Bei Klick: Animationobjects in MainCanvas
    export function generateMainCanvas(_event: MouseEvent): void {

        
        let target: HTMLElement = <HTMLElement>_event.target; 
        let id: string = target.id; 


        let x: number = 50; 
        let y: number = 50; 
        


        switch (id) {
            case "lights":
                let canvas1: HTMLCanvasElement | null = document.querySelector("canvas#mainCanvasDraw");
                if (!canvas1)
                return;
        
                crc2 = <CanvasRenderingContext2D>canvas1.getContext("2d");

                lightsInMain();
                
                        

                break;
            case "discoball":

                let canvas2: HTMLCanvasElement | null = document.querySelector("canvas#mainCanvasDraw");
                if (!canvas2)
                return;
        
                crc4 = <CanvasRenderingContext2D>canvas2.getContext("2d");
        
                ballInMain ();


                break; 

            case "confetti":

                let canvas3: HTMLCanvasElement | null = document.querySelector("canvas#mainCanvasDraw");
                if (!canvas3)
                return;
        
                crc3 = <CanvasRenderingContext2D>canvas3.getContext("2d");
        
                confettiInMain();

               
            break;

        }
    }

    // Muss abgeändert werden! Mit .draw() Funktion aus Klassen
    function lightsInMain() {
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

    function ballInMain() {
        crc4.beginPath();
        crc4.arc(35,35,20,1,5*Math.PI);
        crc4.closePath();

        crc4.moveTo(20,25);
        crc4.lineTo(50,25);
        crc4.moveTo(15,35);
        crc4.lineTo(55,35);
        crc4.moveTo(20,45);
        crc4.lineTo(50,45);

        crc4.moveTo(25,20);
        crc4.lineTo(25,50);
        crc4.moveTo(35,15);
        crc4.lineTo(35,55);
        crc4.moveTo(45,20);
        crc4.lineTo(45,50);

        

        

        crc4.strokeStyle="black";

        crc4.fillStyle="silver";
        crc4.fill();
        crc4.stroke();
    }

    function confettiInMain(){

        crc3.rect(10,10,10,5);
        crc3.rect(40,15,10,5);
        crc3.rect(15,30,10,5);
        crc3.rect(45,40,10,5);
        crc3.rect(5,50,10,5);

        crc3.fillStyle="silver";
        crc3.fill();
    }

    }
 
