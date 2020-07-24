namespace dancefloor {

    export let crc2: CanvasRenderingContext2D;

    let mainCanvas: HTMLCanvasElement;

    let deleteForm: boolean

    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void {

        deleteForm = true; 
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#canvasSize");

        

        mainCanvas = <HTMLCanvasElement> document.getElementById("mainCanvasDraw"); 
        crc2 = <CanvasRenderingContext2D>mainCanvas.getContext("2d");

        form.addEventListener("change", chooseCanvas); 
        
    }

    function chooseCanvas(_event: Event): void {
 
        console.log("ich wurde geklickt"); 
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
                crc2.canvas.width = 300; 
                crc2.canvas.height = 350; 
               
                
                break; 

        }
    }

}