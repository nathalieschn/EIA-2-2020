var dancefloor;
(function (dancefloor) {
    window.addEventListener("load", handleLoad);
    let crc4;
    let center = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas#discoball");
        if (!canvas)
            return;
        crc4 = canvas.getContext("2d");
        drawDiscoball({ x: 0, y: 0 });
    }
    function drawDiscoball(_position) {
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
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=discoball.js.map