namespace dancefloor {

    // Link zur Heroku App
    let url: string = "LINKZUHEROKU";

    //export rendering Context
    export let crc0: CanvasRenderingContext2D;
    export let Lightcrc: CanvasRenderingContext2D;
    export let Confcrc: CanvasRenderingContext2D;
    export let Ballcrc: CanvasRenderingContext2D;

    // Buttons und HTML Elemente Typzuweisung
    let mainCanvas: HTMLCanvasElement;
    let dragDrop: boolean = false;
    let objectDragDrop: Animationobject; 
    let saveButton: HTMLDivElement;
    let deleteButton: HTMLDivElement;
    let deleteLight: HTMLDivElement;
    let deleteConfetti: HTMLDivElement;
    let deleteBall: HTMLDivElement;

    let scale: HTMLDivElement;
    let backgroundColor: HTMLDivElement;

    let lightElement: HTMLDivElement;
    let confettiElement: HTMLDivElement;
    let ballElement: HTMLDivElement;

    let changeLightAnimation: HTMLSelectElement;
    let changeConfettiAnimation: HTMLSelectElement;
    let changeBallAnimation: HTMLSelectElement;


    //Arrays
    let drawings: Animationobject[] = [];
    let safeImage: string[] = [];
    let canvasBase: ImageData;

    //handleLoad
    window.addEventListener("load", handleLoad);

    async function handleLoad(_event: Event): Promise<void> {

        scale  = <HTMLDivElement>document.querySelector("div#canvasSize");
        backgroundColor = <HTMLDivElement>document.querySelector("div#canvasStyle");

        // Elemente bei ID, oder Element greifen
        lightElement = <HTMLDivElement>document.getElementById("lights");
        confettiElement = <HTMLDivElement>document.getElementById("confetti");
        ballElement = <HTMLDivElement>document.getElementById("discoball");
        // - CanvasElemente
        mainCanvas = <HTMLCanvasElement>document.getElementById("mainCanvasDraw");
        let canvasLight: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("lights");
        let canvasConf: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("confetti");
        let canvasBall: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("discoball");
        // - Save Elemente
        saveButton = <HTMLDivElement>document.getElementById("savepic");
        // - Delete Funktionen
        deleteButton = <HTMLDivElement>document.getElementById("deletepic");
        deleteLight = <HTMLDivElement>document.getElementById("deletelight");
        deleteConfetti = <HTMLDivElement>document.getElementById("deleteconfetti");
        deleteBall = <HTMLDivElement>document.getElementById("deleteball");
        

        
        // Rendering Context den crc Variablen zuweisen
        crc0 = <CanvasRenderingContext2D>mainCanvas.getContext("2d");
        Lightcrc = <CanvasRenderingContext2D>canvasLight.getContext("2d");
        Confcrc = <CanvasRenderingContext2D>canvasConf.getContext("2d");
        Ballcrc = <CanvasRenderingContext2D>canvasBall.getContext("2d");

        //Animation Elemente
        changeLightAnimation = <HTMLSelectElement>document.getElementById("changelightanimation");
        changeConfettiAnimation = <HTMLSelectElement>document.getElementById("changeconfettianimation");
        changeBallAnimation = <HTMLSelectElement>document.getElementById("changeballanimation");


        scale.addEventListener("change", canvasSize);
        backgroundColor.addEventListener("change", canvasBackground);

        
        //Event Listener 
        lightElement.addEventListener("click", objectInMain);
        confettiElement.addEventListener("click", objectInMain);
        ballElement.addEventListener("click", objectInMain);

        // Event Listener Animation
        changeLightAnimation.addEventListener("change", changeAnimationLights);
        changeConfettiAnimation.addEventListener("change", changeAnimationConfetti);
        changeBallAnimation.addEventListener("change", changeAnimationBalls);
        // Delete/ Save Event-Listener
        saveButton.addEventListener("click", saveImage);

        deleteButton.addEventListener("click", clearCanvas);
        deleteLight.addEventListener("click", deleteLights);
        deleteConfetti.addEventListener("click", deleteConfettis);
        deleteBall.addEventListener("click", deleteBalls);

        // Funktionen, die beim Start aufgerufen werden sollen
        canvasBackground(_event);
        setInterval(animate, 100);
        drawAnimationobjects();

        //mainCanvas.addEventListener("dblclick", deleteSymbol);
        mainCanvas.addEventListener("mousedown", pickSymbol);
        mainCanvas.addEventListener("mouseup", placeSymbol);
        mainCanvas.addEventListener("mousemove", dragSymbol);

        
        canvasBase = crc0.getImageData(0, 0, mainCanvas.width, mainCanvas.height);


    }

    //Canvas Größe auswählen
    function canvasSize(_event: Event): void {

        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;


        switch (id) {

            case "ultrapanorama":
                crc0.canvas.width = 700; 
                crc0.canvas.height = 350;
                break;
            case "megasize":
                crc0.canvas.width = 500; 
                crc0.canvas.height = 350; 
                break;
            case "influencer":
                crc0.canvas.width = 350; 
                crc0.canvas.height = 350; 
                break;
        }
    }

    //Hintergrund auswählen
    function canvasBackground(_event: Event): void {

        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;

        switch (id) {
            //classy
            case "style1":
                crc0.fillStyle = "#C6D1D3"; 
                crc0.fill(); 
                crc0.fillRect(0, 0, crc0.canvas.width, crc0.canvas.height); 

                crc0.strokeStyle="black"
                crc0.strokeRect(60,180,90,120);
                crc0.strokeRect(360,180,90,120);

                crc0.beginPath();
                crc0.arc(105,210,15,1,5*Math.PI);
                crc0.arc(105,270,22,1,5*Math.PI);
                crc0.closePath;

                crc0.fillStyle="black";

                crc0.fill();

                crc0.beginPath();
                crc0.arc(405,210,15,1,5*Math.PI);
                crc0.arc(405,270,22,1,5*Math.PI);
                crc0.closePath;

                crc0.fillStyle="black";

                crc0.fill();
                break;

                //funky
            case "style2":
                crc0.fillStyle = "#21D4EA"; 
                crc0.fill(); 
                crc0.fillRect(0, 0, crc0.canvas.width, crc0.canvas.height);   
                
                crc0.strokeStyle="black"
                crc0.strokeRect(60,180,90,120);
                crc0.strokeRect(360,180,90,120);

                crc0.beginPath();
                crc0.arc(105,210,15,1,5*Math.PI);
                crc0.arc(105,270,22,1,5*Math.PI);
                crc0.closePath;

                crc0.fillStyle="pink";

                crc0.fill();

                crc0.beginPath();
                crc0.arc(405,210,15,1,5*Math.PI);
                crc0.arc(405,270,22,1,5*Math.PI);
                crc0.closePath;

                crc0.fillStyle="yellow";

                crc0.fill();
                break;

                //dark
            case "style3":
                crc0.fillStyle = "#361351"; 
                crc0.fill(); 
                crc0.fillRect(0, 0, crc0.canvas.width, crc0.canvas.height); 

                crc0.strokeStyle="black"
                crc0.strokeRect(60,180,90,120);
                crc0.strokeRect(360,180,90,120);

                crc0.beginPath();
                crc0.arc(105,210,15,1,5*Math.PI);
                crc0.arc(105,270,22,1,5*Math.PI);
                crc0.closePath;

                crc0.fillStyle="black";

                crc0.fill();

                crc0.beginPath();
                crc0.arc(405,210,15,1,5*Math.PI);
                crc0.arc(405,270,22,1,5*Math.PI);
                crc0.closePath;

                crc0.fillStyle="black";

                crc0.fill();
                break;

        }

        canvasBase = crc0.getImageData(0, 0, mainCanvas.width, mainCanvas.height);
    }

 // Zeichnungen in kleine Canvas
   function drawAnimationobjects(): void {

        
            let light: Light = new Light (new Vector(Lightcrc.canvas.width / 2, Lightcrc.canvas.height / 2));
            light.draw(Lightcrc);
            
            let confetti: Confetti = new Confetti (new Vector(Confcrc.canvas.width / 2, Confcrc.canvas.height / 2));
            confetti.draw(Confcrc);
    
            let ball: Ball = new Ball(new Vector(Ballcrc.canvas.width / 2, Ballcrc.canvas.height / 2));
            ball.draw(Ballcrc);
        }

        export function objectInMain(_event: MouseEvent): void {
    
            let target: HTMLElement = <HTMLElement>_event.target;
            let id: string = target.id;
            let positionForCanvas: Vector = new Vector(crc0.canvas.width / 2, crc0.canvas.height / 2);
            let onCanvas: Animationobject;
            switch (id) {
                case "lights":
                    onCanvas = new Light(positionForCanvas);
                    break;
                case "confetti":
                    onCanvas = new Confetti(positionForCanvas);
                    break;
                case "discoball":
                    onCanvas = new Ball(positionForCanvas);
                    break;
                default:
                    return;
            }
            drawings.push(onCanvas);
            onCanvas.draw(crc0);
        }        




    // Animation der Bälle
    function animate(_event: MouseEvent): void {

        crc0.putImageData(canvasBase, 0, 0);

        for (let symbol of drawings) {
            if (symbol instanceof Light)
            symbol.move (1 / 20 );
            else if (symbol instanceof Confetti)
            symbol.move (1 / 20 ); 
            else if (symbol instanceof Ball) 
            symbol.move(100 / 100);
            symbol.draw(crc0);
        }

        if (dragDrop == true) {
            objectDragDrop.draw(crc0);
        }


    }

    function changeAnimationLights (_event: Event): void {
    
        let target: HTMLSelectElement = <HTMLSelectElement>_event.target;
        let value: string = target.value;
    
        switch (value) {
    
            case "langsam":
                console.log("langsam");
                break;
            case "schnell":
                console.log("schnell");
                break;
        }
    }

    function changeAnimationConfetti (_event: Event): void {
        console.log("change Animation Confetti");
    
        let target: HTMLSelectElement = <HTMLSelectElement>_event.target;
        let value: string = target.value;
    
        switch (value) {
    
            case "langsam":
                console.log("langsam");
                break;
            case "schnell":
                console.log("schnell");
                break;
        }
    }

    function changeAnimationBalls (_event: Event): void {
        console.log("change Animation Balls");
    
        let target: HTMLSelectElement = <HTMLSelectElement>_event.target;
        let value: string = target.value;
    
        switch (value) {
    
            case "langsam":
                console.log("langsam");
                break;
            case "schnell":
                console.log("schnell");
                break;
        }
    }



    // Drag and Drop Funktion bestehend aus pick, drag und drop
    function pickSymbol(_event: MouseEvent): void {

        dragDrop = true;

        let mousePosY: number = _event.clientY;
        let mousePosX: number = _event.clientX;
        let canvasRect: ClientRect | DOMRect = mainCanvas.getBoundingClientRect();

        let offsetX: number = mousePosX - canvasRect.left;
        let offsetY: number = mousePosY - canvasRect.top;

        for (let figur of drawings) {

            if (figur.position.x - figur.radius < offsetX &&
                figur.position.x + figur.radius > offsetX &&
                figur.position.y - figur.radius < offsetY &&
                figur.position.y + figur.radius > offsetY) {
                console.log(figur);
                let index: number = drawings.indexOf(figur);
                drawings.splice(index, 1);
                objectDragDrop = figur;
            }
        }
    }

    
    function dragSymbol(_event: MouseEvent): void {
        if (dragDrop == true) {
            objectDragDrop.position.x = _event.clientX - mainCanvas.getBoundingClientRect().left;
            objectDragDrop.position.y = _event.clientY - mainCanvas.getBoundingClientRect().top;
        }

    }


    function placeSymbol(_event: MouseEvent): void {


        if (dragDrop == true) {
            dragDrop = false;
            drawings.push(objectDragDrop);
        }

    }


    // Delete Funktionen bzgl. Ganzem Canvas, einzelnen Symbolen
    function clearCanvas(): void {

        crc0.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
        drawings = [];
    }

    function deleteLights(): void {
        console.log("Delete Light verknüpft");
    }

    function deleteConfettis(): void {
        console.log("Delete Confetti verknüpft");
    }

    function deleteBalls(): void {
        console.log("Delete Ball verknüpft");
    }



    async function saveImage(_event: MouseEvent): Promise<void> {

        console.log("savebutton gedrückt")

        let discoName: string = prompt("Wie heißt Deine Disco?");

    }


}
