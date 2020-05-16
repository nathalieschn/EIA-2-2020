"use strict";
var Haushaltshilfe;
(function (Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        document.querySelector("#checkout")?.addEventListener("click", handleClick);
    }
    function handleClick() {
        alert("Ihre Bestellung wird bearbeitet.");
    }
    function handleChange(_event) {
        //console.log(_event);
        let order = document.querySelector("#order");
        order.innerHTML = "";
        let data = new FormData(document.forms[0]);
        let total = 0;
        for (let entry of data) {
            if (entry[0] == "Item") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                let price = Number(item.getAttribute("price"));
                let amount = Number(data.get(entry[1] + "Menge"));
                let einheit = (item.getAttribute("einheit"));
                total += price * amount;
                order.innerHTML += item.value + " | " + amount + " " + einheit + ": " + price * amount + " €" + "<br> <br>";
            }
            if (entry[0] == "Service") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                let price = Number(item.getAttribute("price"));
                let amount = Number(data.get(entry[1] + "Menge"));
                let einheit = (item.getAttribute("einheit"));
                total += price * amount;
                order.innerHTML += item.value + " | " + amount + " " + einheit + ": " + price * amount + " €" + "<br> <br>";
            }
            if (entry[0] == "Money") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                let betrag = Number(data.get("Betrag"));
                order.innerHTML += item.value + ": " + betrag + " €" + " <br>";
                total += 5;
            }
        }
    }
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=main.js.map