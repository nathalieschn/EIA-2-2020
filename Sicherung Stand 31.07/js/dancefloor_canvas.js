var dancefloor;
(function (dancefloor) {
    // HTML Elemente Typzuweisungen
    let mainCanvas;
    let deleteForm;
    let deleteButton;
    let dragDrop = false;
    let objectDragDrop;
    let lightDiv;
    let starDiv;
    let triangleDiv;
    //Array Animationobjects
    let animationobject = [];
    // Handle Load Eventlistener
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        //Deklarationen
        let size = document.querySelector("div#canvasSize");
        let backgroundColor = document.querySelector("div#canvasStyle");
        let lightDiv = document.getElementById("lights");
        let confettiDiv = document.getElementById("confetti");
        let ballDiv = document.getElementById("discoball");
        let deleteButton = document.getElementById("deletepic");
        //Canvas 2,3,4,5 und animationObject Canvas
        mainCanvas = document.getElementById("mainCanvasDraw");
        dancefloor.crc2 = mainCanvas.getContext("2d");
        let lightCanvas = document.getElementById("lights");
        dancefloor.crc3 = lightCanvas.getContext("2d");
        let ConfettiCanvas = document.getElementById("confetti");
        dancefloor.crc4 = ConfettiCanvas.getContext("2d");
        let BallCanvas = document.getElementById("discoball");
        dancefloor.crc5 = BallCanvas.getContext("2d");
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
    function chooseSize(_event) {
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "format1":
                dancefloor.crc2.canvas.width = 700;
                dancefloor.crc2.canvas.height = 350;
                break;
            case "format2":
                dancefloor.crc2.canvas.width = 500;
                dancefloor.crc2.canvas.height = 350;
                break;
            case "format3":
                dancefloor.crc2.canvas.width = 350;
                dancefloor.crc2.canvas.height = 350;
                break;
        }
    }
    // Hintergrundfarbe auswählen
    function chooseBackground(_event) {
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "style1":
                dancefloor.crc2.fillStyle = "#C6D1D3";
                dancefloor.crc2.fill();
                dancefloor.crc2.fillRect(0, 0, dancefloor.crc2.canvas.width, dancefloor.crc2.canvas.height);
                dancefloor.crc2.strokeStyle = "black";
                dancefloor.crc2.strokeRect(60, 180, 90, 120);
                dancefloor.crc2.strokeRect(360, 180, 90, 120);
                dancefloor.crc2.beginPath();
                dancefloor.crc2.arc(105, 210, 15, 1, 5 * Math.PI);
                dancefloor.crc2.arc(105, 270, 22, 1, 5 * Math.PI);
                dancefloor.crc2.closePath;
                dancefloor.crc2.fillStyle = "black";
                dancefloor.crc2.fill();
                dancefloor.crc2.beginPath();
                dancefloor.crc2.arc(405, 210, 15, 1, 5 * Math.PI);
                dancefloor.crc2.arc(405, 270, 22, 1, 5 * Math.PI);
                dancefloor.crc2.closePath;
                dancefloor.crc2.fillStyle = "black";
                dancefloor.crc2.fill();
                break;
            case "style2":
                dancefloor.crc2.fillStyle = "#21D4EA";
                dancefloor.crc2.fill();
                dancefloor.crc2.fillRect(0, 0, dancefloor.crc2.canvas.width, dancefloor.crc2.canvas.height);
                dancefloor.crc2.strokeStyle = "black";
                dancefloor.crc2.strokeRect(60, 180, 90, 120);
                dancefloor.crc2.strokeRect(360, 180, 90, 120);
                dancefloor.crc2.beginPath();
                dancefloor.crc2.arc(105, 210, 15, 1, 5 * Math.PI);
                dancefloor.crc2.arc(105, 270, 22, 1, 5 * Math.PI);
                dancefloor.crc2.closePath;
                dancefloor.crc2.fillStyle = "pink";
                dancefloor.crc2.fill();
                dancefloor.crc2.beginPath();
                dancefloor.crc2.arc(405, 210, 15, 1, 5 * Math.PI);
                dancefloor.crc2.arc(405, 270, 22, 1, 5 * Math.PI);
                dancefloor.crc2.closePath;
                dancefloor.crc2.fillStyle = "yellow";
                dancefloor.crc2.fill();
                break;
            case "style3":
                dancefloor.crc2.fillStyle = "#361351";
                dancefloor.crc2.fill();
                dancefloor.crc2.fillRect(0, 0, dancefloor.crc2.canvas.width, dancefloor.crc2.canvas.height);
                dancefloor.crc2.strokeStyle = "black";
                dancefloor.crc2.strokeRect(60, 180, 90, 120);
                dancefloor.crc2.strokeRect(360, 180, 90, 120);
                dancefloor.crc2.beginPath();
                dancefloor.crc2.arc(105, 210, 15, 1, 5 * Math.PI);
                dancefloor.crc2.arc(105, 270, 22, 1, 5 * Math.PI);
                dancefloor.crc2.closePath;
                dancefloor.crc2.fillStyle = "black";
                dancefloor.crc2.fill();
                dancefloor.crc2.beginPath();
                dancefloor.crc2.arc(405, 210, 15, 1, 5 * Math.PI);
                dancefloor.crc2.arc(405, 270, 22, 1, 5 * Math.PI);
                dancefloor.crc2.closePath;
                dancefloor.crc2.fillStyle = "black";
                dancefloor.crc2.fill();
                break;
        }
    }
    // Kleiner Canvas: Light ? Was kommt in Klammer?
    function lightSideCanvas() {
        let _animationobject;
        let light = new dancefloor.Light();
        light.draw(dancefloor.crc3);
    }
    // Kleiner Canvas: Confetti
    function confettiSideCanvas() {
        let _animationobject;
        let confetti = new dancefloor.Confetti();
        confetti.draw(dancefloor.crc4);
    }
    //Kleiner Canvas: Discoball
    function ballSideCanvas() {
        let _animationobject;
        let ball = new dancefloor.Ball();
        ball.draw(dancefloor.crc5);
    }
    // Ganzen Canvas-Inhalt löschen
    function clearCanvas(_event) {
        dancefloor.crc2.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
        dancefloor.crc2.save();
    }
    //Bei Klick: Animationobjects in MainCanvas
    function generateMainCanvas(_event) {
        let target = _event.target;
        let id = target.id;
        let x = 50;
        let y = 50;
        switch (id) {
            case "lights":
                let canvas1 = document.querySelector("canvas#mainCanvasDraw");
                if (!canvas1)
                    return;
                dancefloor.crc2 = canvas1.getContext("2d");
                lightsInMain();
                break;
            case "discoball":
                let canvas2 = document.querySelector("canvas#mainCanvasDraw");
                if (!canvas2)
                    return;
                dancefloor.crc4 = canvas2.getContext("2d");
                ballInMain();
                break;
            case "confetti":
                let canvas3 = document.querySelector("canvas#mainCanvasDraw");
                if (!canvas3)
                    return;
                dancefloor.crc3 = canvas3.getContext("2d");
                confettiInMain();
                break;
        }
    }
    dancefloor.generateMainCanvas = generateMainCanvas;
    // Muss abgeändert werden! Mit .draw() Funktion aus Klassen
    function lightsInMain() {
        dancefloor.crc2.beginPath();
        dancefloor.crc2.arc(20, 20, 5, 1, 5 * Math.PI);
        dancefloor.crc2.closePath();
        dancefloor.crc2.moveTo(20, 30);
        dancefloor.crc2.lineTo(20, 55);
        dancefloor.crc2.moveTo(30, 30);
        dancefloor.crc2.lineTo(50, 50);
        dancefloor.crc2.moveTo(30, 20);
        dancefloor.crc2.lineTo(60, 20);
        dancefloor.crc2.strokeStyle = "white";
        dancefloor.crc2.stroke();
    }
    function ballInMain() {
        dancefloor.crc4.beginPath();
        dancefloor.crc4.arc(35, 35, 20, 1, 5 * Math.PI);
        dancefloor.crc4.closePath();
        dancefloor.crc4.moveTo(20, 25);
        dancefloor.crc4.lineTo(50, 25);
        dancefloor.crc4.moveTo(15, 35);
        dancefloor.crc4.lineTo(55, 35);
        dancefloor.crc4.moveTo(20, 45);
        dancefloor.crc4.lineTo(50, 45);
        dancefloor.crc4.moveTo(25, 20);
        dancefloor.crc4.lineTo(25, 50);
        dancefloor.crc4.moveTo(35, 15);
        dancefloor.crc4.lineTo(35, 55);
        dancefloor.crc4.moveTo(45, 20);
        dancefloor.crc4.lineTo(45, 50);
        dancefloor.crc4.strokeStyle = "black";
        dancefloor.crc4.fillStyle = "silver";
        dancefloor.crc4.fill();
        dancefloor.crc4.stroke();
    }
    function confettiInMain() {
        dancefloor.crc3.rect(10, 10, 10, 5);
        dancefloor.crc3.rect(40, 15, 10, 5);
        dancefloor.crc3.rect(15, 30, 10, 5);
        dancefloor.crc3.rect(45, 40, 10, 5);
        dancefloor.crc3.rect(5, 50, 10, 5);
        dancefloor.crc3.fillStyle = "silver";
        dancefloor.crc3.fill();
    }
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=dancefloor_canvas.js.map