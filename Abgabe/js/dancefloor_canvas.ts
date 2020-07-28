namespace dancefloor {

    export let crc2: CanvasRenderingContext2D;
    

    let mainCanvas: HTMLCanvasElement;
    let deleteForm: boolean



    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void {

        deleteForm = true; 
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#canvasSize");
        let backgroundColor = <HTMLSelectElement>document.querySelector("div#canvasStyle");

        

        mainCanvas = <HTMLCanvasElement> document.getElementById("mainCanvasDraw"); 
        crc2 = <CanvasRenderingContext2D>mainCanvas.getContext("2d");

        

        form.addEventListener("change", chooseSize); 

        backgroundColor.addEventListener("change", chooseBackground);
        
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

}