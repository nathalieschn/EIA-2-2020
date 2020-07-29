namespace dancefloor {

    export let crc2: CanvasRenderingContext2D;
    

    let mainCanvas: HTMLCanvasElement;
    let deleteForm: boolean
    let deleteButton: HTMLButtonElement;

    let circleDiv: HTMLDivElement; 
    let starDiv: HTMLDivElement; 
    let triangleDiv: HTMLDivElement;

    let crc3: CanvasRenderingContext2D;
    let crc4: CanvasRenderingContext2D;

    interface Vector {
        x: number;
        y: number;
    }


    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void {

        deleteForm = true; 
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#canvasSize");
        let backgroundColor = <HTMLSelectElement>document.querySelector("div#canvasStyle");

        circleDiv = <HTMLDivElement>document.getElementById("lights"); 
        starDiv = <HTMLDivElement>document.getElementById("confetti"); 
        triangleDiv = <HTMLDivElement>document.getElementById("discoball"); 

        

        let deleteButton = <HTMLButtonElement>document.getElementById("deletepic");

        

        mainCanvas = <HTMLCanvasElement> document.getElementById("mainCanvasDraw"); 
        crc2 = <CanvasRenderingContext2D>mainCanvas.getContext("2d");



        

        form.addEventListener("change", chooseSize); 

        deleteButton.addEventListener("click", clearCanvas);

        backgroundColor.addEventListener("change", chooseBackground);

        circleDiv.addEventListener("click", generateMainCanvas);
        starDiv.addEventListener("click", generateMainCanvas);
        triangleDiv.addEventListener("click", generateMainCanvas);

        
    }

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

    function clearCanvas(_event:Event): void {

        crc2.clearRect(0, 0, mainCanvas.width, mainCanvas.height);   
        crc2.save(); 
 
           
    }

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
 
