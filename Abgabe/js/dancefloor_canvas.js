var dancefloor;
(function (dancefloor) {
    let mainCanvas;
    let deleteForm;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        deleteForm = true;
        let form = document.querySelector("div#canvasSize");
        let backgroundColor = document.querySelector("div#canvasStyle");
        mainCanvas = document.getElementById("mainCanvasDraw");
        dancefloor.crc2 = mainCanvas.getContext("2d");
        form.addEventListener("change", chooseSize);
        backgroundColor.addEventListener("change", chooseBackground);
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
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=dancefloor_canvas.js.map