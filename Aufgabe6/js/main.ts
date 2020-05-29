namespace Haushaltshilfe {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;

   async function handleLoad(): Promise<void> {
        form = <HTMLFormElement>document.querySelector("#form");
        form.addEventListener("change", handleChange);

        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        generateContent(data);
        
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        submit.addEventListener("click",sendOrder);
    

    }

async function sendOrder(_event: Event): Promise<void> {
console.log("send Order");
let formData: FormData = new FormData(form);
let query: URLSearchParams = new URLSearchParams(<any>formData);
await fetch("index.html?" + query.toString());
alert ("Order Received!")
}

    function handleChange(_event: Event): void {
        //console.log(_event);
        let order: HTMLDivElement = <HTMLDivElement> document.querySelector("#order");
        order.innerHTML = "";

        let data: FormData = new FormData(document.forms[0]);
        let total: number = 0;

        for (let entry of data) {
            if (entry[0] == "Item") {
                let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");
                let price: number = Number(item.getAttribute("price"));
                let amount: number = Number (data.get(entry[1] + "Menge"));
                let einheit: string = <string> (item.getAttribute("einheit"));
                
                total += price * amount;
                order.innerHTML += item.value + " | " + amount + " " + einheit + ": " + price * amount + " €" + "<br> <br>";
            }



            if (entry[0] == "Service") {

                let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");
                let price: number = Number(item.getAttribute("price"));
                let amount: number = Number (data.get(entry[1] + "Menge"));
                let einheit: string = <string> (item.getAttribute("einheit"));
                
                total += price * amount;
                order.innerHTML += item.value + " | " + amount + " " + einheit + ": " + price * amount + " €" + "<br> <br>";
            }

            if (entry[0] == "Money") {
                let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");
                let betrag: number = Number(data.get("Betrag"));
                order.innerHTML += item.value + ": " +  betrag + " €" + " <br>" ;
                total += 5;
            }


        }
    }

}