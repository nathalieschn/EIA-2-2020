var L03_StayHome;
(function (L03_StayHome) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            let price = Number(item.getAttribute("price"));
            order.innerHTML += item.name + "  € " + price;
        }
    }
})(L03_StayHome || (L03_StayHome = {}));
//# sourceMappingURL=main.js.map