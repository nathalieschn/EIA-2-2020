var dancefloor;
(function (dancefloor) {
    let mainCanvas;
    let deleteForm;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        deleteForm = true;
        let form = document.querySelector("div#canvasSize");
        mainCanvas = document.getElementById("mainCanvasDraw");
        dancefloor.crc2 = mainCanvas.getContext("2d");
        form.addEventListener("change", chooseCanvas);
    }
    function chooseCanvas(_event) {
        console.log("ich wurde geklickt");
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
                dancefloor.crc2.canvas.width = 300;
                dancefloor.crc2.canvas.height = 350;
                break;
        }
    }
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=dancefloor_canvas.js.map