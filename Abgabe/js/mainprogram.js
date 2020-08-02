var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var dancefloor;
(function (dancefloor) {
    // Link zur Heroku App
    let url = "LINKZUHEROKU";
    // Buttons und HTML Elemente Typzuweisung
    let mainCanvas;
    let dragDrop = false;
    let objectDragDrop;
    let saveButton;
    let deleteButton;
    let deleteLight;
    let deleteConfetti;
    let deleteBall;
    let scale;
    let backgroundColor;
    let lightElement;
    let confettiElement;
    let ballElement;
    let changeLightAnimation;
    let changeConfettiAnimation;
    let changeBallAnimation;
    //Arrays
    let drawings = [];
    let Lightdrawings = [];
    let Confettidrawings = [];
    let Balldrawings = [];
    let canvasBase;
    //handleLoad
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            scale = document.querySelector("div#canvasSize");
            backgroundColor = document.querySelector("div#canvasStyle");
            // Elemente bei ID, oder Element greifen
            lightElement = document.getElementById("lights");
            confettiElement = document.getElementById("confetti");
            ballElement = document.getElementById("discoball");
            // - CanvasElemente
            mainCanvas = document.getElementById("mainCanvas");
            let canvasLight = document.getElementById("lights");
            let canvasConf = document.getElementById("confetti");
            let canvasBall = document.getElementById("discoball");
            // - Save Elemente
            saveButton = document.getElementById("savepic");
            // - Delete Funktionen
            deleteButton = document.getElementById("deletepic");
            deleteLight = document.getElementById("deletelight");
            deleteConfetti = document.getElementById("deleteconfetti");
            deleteBall = document.getElementById("deleteball");
            // Rendering Context den crc Variablen zuweisen
            dancefloor.crc0 = mainCanvas.getContext("2d");
            dancefloor.Lightcrc = canvasLight.getContext("2d");
            dancefloor.Confcrc = canvasConf.getContext("2d");
            dancefloor.Ballcrc = canvasBall.getContext("2d");
            //Animation Elemente
            changeLightAnimation = document.getElementById("changelightanimation");
            changeConfettiAnimation = document.getElementById("changeconfettianimation");
            changeBallAnimation = document.getElementById("changeballanimation");
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
            canvasBase = dancefloor.crc0.getImageData(0, 0, mainCanvas.width, mainCanvas.height);
        });
    }
    //Canvas Größe auswählen
    function canvasSize(_event) {
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "ultrapanorama":
                dancefloor.crc0.canvas.width = 700;
                dancefloor.crc0.canvas.height = 350;
                break;
            case "megasize":
                dancefloor.crc0.canvas.width = 500;
                dancefloor.crc0.canvas.height = 350;
                break;
            case "influencer":
                dancefloor.crc0.canvas.width = 350;
                dancefloor.crc0.canvas.height = 350;
                break;
        }
    }
    //Hintergrund auswählen
    function canvasBackground(_event) {
        let target = _event.target;
        let id = target.id;
        switch (id) {
            //classy
            case "style1":
                dancefloor.crc0.fillStyle = "#C6D1D3";
                dancefloor.crc0.fill();
                dancefloor.crc0.fillRect(0, 0, dancefloor.crc0.canvas.width, dancefloor.crc0.canvas.height);
                dancefloor.crc0.strokeStyle = "black";
                dancefloor.crc0.strokeRect(60, 180, 90, 120);
                dancefloor.crc0.strokeRect(360, 180, 90, 120);
                dancefloor.crc0.beginPath();
                dancefloor.crc0.arc(105, 210, 15, 1, 5 * Math.PI);
                dancefloor.crc0.arc(105, 270, 22, 1, 5 * Math.PI);
                dancefloor.crc0.closePath;
                dancefloor.crc0.fillStyle = "black";
                dancefloor.crc0.fill();
                dancefloor.crc0.beginPath();
                dancefloor.crc0.arc(405, 210, 15, 1, 5 * Math.PI);
                dancefloor.crc0.arc(405, 270, 22, 1, 5 * Math.PI);
                dancefloor.crc0.closePath;
                dancefloor.crc0.fillStyle = "black";
                dancefloor.crc0.fill();
                break;
            //funky
            case "style2":
                dancefloor.crc0.fillStyle = "#21D4EA";
                dancefloor.crc0.fill();
                dancefloor.crc0.fillRect(0, 0, dancefloor.crc0.canvas.width, dancefloor.crc0.canvas.height);
                dancefloor.crc0.strokeStyle = "black";
                dancefloor.crc0.strokeRect(60, 180, 90, 120);
                dancefloor.crc0.strokeRect(360, 180, 90, 120);
                dancefloor.crc0.beginPath();
                dancefloor.crc0.arc(105, 210, 15, 1, 5 * Math.PI);
                dancefloor.crc0.arc(105, 270, 22, 1, 5 * Math.PI);
                dancefloor.crc0.closePath;
                dancefloor.crc0.fillStyle = "pink";
                dancefloor.crc0.fill();
                dancefloor.crc0.beginPath();
                dancefloor.crc0.arc(405, 210, 15, 1, 5 * Math.PI);
                dancefloor.crc0.arc(405, 270, 22, 1, 5 * Math.PI);
                dancefloor.crc0.closePath;
                dancefloor.crc0.fillStyle = "yellow";
                dancefloor.crc0.fill();
                break;
            //dark
            case "style3":
                dancefloor.crc0.fillStyle = "#361351";
                dancefloor.crc0.fill();
                dancefloor.crc0.fillRect(0, 0, dancefloor.crc0.canvas.width, dancefloor.crc0.canvas.height);
                dancefloor.crc0.strokeStyle = "black";
                dancefloor.crc0.strokeRect(60, 180, 90, 120);
                dancefloor.crc0.strokeRect(360, 180, 90, 120);
                dancefloor.crc0.beginPath();
                dancefloor.crc0.arc(105, 210, 15, 1, 5 * Math.PI);
                dancefloor.crc0.arc(105, 270, 22, 1, 5 * Math.PI);
                dancefloor.crc0.closePath;
                dancefloor.crc0.fillStyle = "black";
                dancefloor.crc0.fill();
                dancefloor.crc0.beginPath();
                dancefloor.crc0.arc(405, 210, 15, 1, 5 * Math.PI);
                dancefloor.crc0.arc(405, 270, 22, 1, 5 * Math.PI);
                dancefloor.crc0.closePath;
                dancefloor.crc0.fillStyle = "black";
                dancefloor.crc0.fill();
                break;
        }
        canvasBase = dancefloor.crc0.getImageData(0, 0, mainCanvas.width, mainCanvas.height);
    }
    // Zeichnungen in kleine Canvas
    function drawAnimationobjects() {
        let light = new dancefloor.Light(new dancefloor.Vector(dancefloor.Lightcrc.canvas.width / 2, dancefloor.Lightcrc.canvas.height / 2));
        light.draw(dancefloor.Lightcrc);
        let confetti = new dancefloor.Confetti(new dancefloor.Vector(dancefloor.Confcrc.canvas.width / 2, dancefloor.Confcrc.canvas.height / 2));
        confetti.draw(dancefloor.Confcrc);
        let ball = new dancefloor.Ball(new dancefloor.Vector(dancefloor.Ballcrc.canvas.width / 2, dancefloor.Ballcrc.canvas.height / 2));
        ball.draw(dancefloor.Ballcrc);
    }
    function objectInMain(_event) {
        let target = _event.target;
        let id = target.id;
        let positionForCanvas = new dancefloor.Vector(dancefloor.crc0.canvas.width + 250, dancefloor.crc0.canvas.height + 50);
        let onCanvas;
        switch (id) {
            case "lights":
                onCanvas = new dancefloor.Light(positionForCanvas);
                Lightdrawings.push(onCanvas);
                break;
            case "confetti":
                onCanvas = new dancefloor.Confetti(positionForCanvas);
                Confettidrawings.push(onCanvas);
                break;
            case "discoball":
                onCanvas = new dancefloor.Ball(positionForCanvas);
                Balldrawings.push(onCanvas);
                break;
            default:
                return;
        }
        drawings.push(onCanvas);
        onCanvas.draw(dancefloor.crc0);
    }
    dancefloor.objectInMain = objectInMain;
    // Animation der Bälle
    function animate(_event) {
        dancefloor.crc0.putImageData(canvasBase, 0, 0);
        let target = _event.target;
        let value = target.value;
        for (let type of drawings) {
            if (type instanceof dancefloor.Light)
                type.move(0 / 0);
            switch (value) {
                case ("schnell"):
                    type.move(5 / 6);
                    break;
                case ("langsam"):
                    type.move(5 / 20);
                    break;
                case ("noanimation"):
                    type.move(0 / 0);
                    break;
            }
            if (type instanceof dancefloor.Confetti)
                type.move(0 / 0);
            switch (value) {
                case ("schnell"):
                    type.move(5 / 6);
                    break;
                case ("langsam"):
                    type.move(5 / 20);
                    break;
                case ("noanimation"):
                    type.move(0 / 0);
                    break;
            }
            if (type instanceof dancefloor.Ball)
                type.move(0 / 0);
            switch (value) {
                case ("schnell"):
                    type.move(5 / 6);
                    break;
                case ("langsam"):
                    type.move(5 / 20);
                    break;
                case ("noanimation"):
                    type.move(0 / 0);
                    break;
            }
        }
        if (dragDrop == true) {
            objectDragDrop.draw(dancefloor.crc0);
        }
    }
    function changeAnimationLights(_event) {
        let object = drawings.length - 1;
        let target = _event.target;
        let value = target.value;
        switch (value) {
            case "langsam":
                console.log("langsam");
                break;
            case "schnell":
                console.log("schnell");
                break;
        }
    }
    function changeAnimationConfetti(_event) {
        console.log("change Animation Confetti");
        let target = _event.target;
        let value = target.value;
        switch (value) {
            case "langsam":
                console.log("langsam");
                break;
            case "schnell":
                console.log("schnell");
                break;
        }
    }
    function changeAnimationBalls(_event) {
        console.log("change Animation Balls");
        let target = _event.target;
        let value = target.value;
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
    function pickSymbol(_event) {
        dragDrop = true;
        let mousePosY = _event.clientY;
        let mousePosX = _event.clientX;
        let canvasRect = mainCanvas.getBoundingClientRect();
        let offsetX = mousePosX - canvasRect.left;
        let offsetY = mousePosY - canvasRect.top;
        for (let figur of drawings) {
            if (figur.position.x - figur.radius < offsetX &&
                figur.position.x + figur.radius > offsetX &&
                figur.position.y - figur.radius < offsetY &&
                figur.position.y + figur.radius > offsetY) {
                console.log(figur);
                let index = drawings.indexOf(figur);
                drawings.splice(index, 1);
                objectDragDrop = figur;
            }
        }
    }
    function dragSymbol(_event) {
        if (dragDrop == true) {
            objectDragDrop.position.x = _event.clientX - mainCanvas.getBoundingClientRect().left;
            objectDragDrop.position.y = _event.clientY - mainCanvas.getBoundingClientRect().top;
        }
    }
    function placeSymbol(_event) {
        if (dragDrop == true) {
            dragDrop = false;
            drawings.push(objectDragDrop);
        }
    }
    // Delete Funktionen bzgl. Ganzem Canvas, einzelnen Symbolen
    function clearCanvas() {
        dancefloor.crc0.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
        drawings = [];
    }
    function deleteLights(_event) {
        console.log("Delete deleteLights verknüpft");
        Lightdrawings = [];
    }
    function deleteConfettis() {
        console.log("Delete Confetti verknüpft");
    }
    function deleteBalls() {
        console.log("Delete Ball verknüpft");
    }
    function saveImage(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("savebutton gedrückt");
            let discoName = prompt("Wie heißt Deine Disco?");
        });
    }
    function savePic() {
    }
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=mainprogram.js.map