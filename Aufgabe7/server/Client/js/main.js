"use strict";
var L07_Haushaltshilfe;
(function (L07_Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    let form;
    let url = "https://nathalieschhaushaltshilfe.herokuapp.com/";
    async function handleLoad() {
        form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        L07_Haushaltshilfe.generateContent(data);
        let submit = document.querySelector("button[type=button]");
        submit.addEventListener("click", sendOrder);
    }
    async function sendOrder(_event) {
        console.log("send Order");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
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
})(L07_Haushaltshilfe || (L07_Haushaltshilfe = {}));
//# sourceMappingURL=main.js.map