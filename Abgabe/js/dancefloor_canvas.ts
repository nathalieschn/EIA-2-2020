namespace dancefloor {

    export let crc2: CanvasRenderingContext2D;
    

    let mainCanvas: HTMLCanvasElement;

    let backgroundColor: HTMLSelectElement;


    let deleteForm: boolean



    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void {

        deleteForm = true; 
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#canvasSize");
        backgroundColor = <HTMLSelectElement>document.querySelector("div#canvasStyle");

        

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
                break;


            case "style2":
                crc2.fillStyle = "21D4EA"; 
                crc2.fill(); 
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);      
                break; 


            case "style3":
                crc2.fillStyle = "361351"; 
                crc2.fill(); 
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); 
                        
                
                break; 

        

        }

    }

}