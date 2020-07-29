var dancefloor;
(function (dancefloor) {
    let mainCanvas;
    let deleteForm;
    let deleteButton;
    let circleDiv;
    let starDiv;
    let triangleDiv;
    let crc3;
    let crc4;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        deleteForm = true;
        let form = document.querySelector("div#canvasSize");
        let backgroundColor = document.querySelector("div#canvasStyle");
        circleDiv = document.getElementById("lights");
        starDiv = document.getElementById("confetti");
        triangleDiv = document.getElementById("discoball");
        let deleteButton = document.getElementById("deletepic");
        mainCanvas = document.getElementById("mainCanvasDraw");
        dancefloor.crc2 = mainCanvas.getContext("2d");
        form.addEventListener("change", chooseSize);
        deleteButton.addEventListener("click", clearCanvas);
        backgroundColor.addEventListener("change", chooseBackground);
        circleDiv.addEventListener("click", generateMainCanvas);
        starDiv.addEventListener("click", generateMainCanvas);
        triangleDiv.addEventListener("click", generateMainCanvas);
    }
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
    function clearCanvas(_event) {
        dancefloor.crc2.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
        dancefloor.crc2.save();
    }
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
                crc4 = canvas2.getContext("2d");
                ballInMain();
                break;
            case "confetti":
                let canvas3 = document.querySelector("canvas#mainCanvasDraw");
                if (!canvas3)
                    return;
                crc3 = canvas3.getContext("2d");
                confettiInMain();
                break;
        }
    }
    dancefloor.generateMainCanvas = generateMainCanvas;
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
        crc4.beginPath();
        crc4.arc(35, 35, 20, 1, 5 * Math.PI);
        crc4.closePath();
        crc4.moveTo(20, 25);
        crc4.lineTo(50, 25);
        crc4.moveTo(15, 35);
        crc4.lineTo(55, 35);
        crc4.moveTo(20, 45);
        crc4.lineTo(50, 45);
        crc4.moveTo(25, 20);
        crc4.lineTo(25, 50);
        crc4.moveTo(35, 15);
        crc4.lineTo(35, 55);
        crc4.moveTo(45, 20);
        crc4.lineTo(45, 50);
        crc4.strokeStyle = "black";
        crc4.fillStyle = "silver";
        crc4.fill();
        crc4.stroke();
    }
    function confettiInMain() {
        crc3.rect(10, 10, 10, 5);
        crc3.rect(40, 15, 10, 5);
        crc3.rect(15, 30, 10, 5);
        crc3.rect(45, 40, 10, 5);
        crc3.rect(5, 50, 10, 5);
        crc3.fillStyle = "silver";
        crc3.fill();
    }
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=dancefloor_canvas.js.map