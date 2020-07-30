var dancefloor;
(function (dancefloor) {
    window.addEventListener("load", handleLoad);
    let crc3;
    let center = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas#confetti");
        if (!canvas)
            return;
        crc3 = canvas.getContext("2d");
        drawConfetti({ x: 30, y: 20 });
    }
    function drawConfetti(_position) {
        crc3.rect(10, 10, 10, 5);
        crc3.rect(40, 15, 10, 5);
        crc3.rect(15, 30, 10, 5);
        crc3.rect(45, 40, 10, 5);
        crc3.rect(5, 50, 10, 5);
        crc3.fillStyle = "silver";
        crc3.fill();
    }
})(dancefloor || (dancefloor = {}));
//# sourceMappingURL=confetti.js.map