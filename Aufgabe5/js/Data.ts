namespace Haushaltshilfe {

    export interface Item {
        name: string;
        price: number;
        einheit: string;
    }

    export interface Data  {
        [category: string]: Item[];
    }


    export let data: Data = {
        Items: [
            {name: "--", price: 0, einheit: ""},
            {name: "Shampoo", price: 4.00, einheit: "Flaschen"},
            {name: "Mehl", price: 2.50, einheit: "kg"},
            {name: "Milk", price: 2.00, einheit: "Liter"},
        ],

       Supermarkt: [
        {name: "Target", price: 0, einheit: ""},
        {name: "Walmart", price: 0, einheit: ""},
        {name: "Wholefoods", price: 0, einheit: ""},
        ],

        Service: [
            {name: "--", price: 0, einheit: ""},
            {name: "Cleaning", price: 15.00, einheit: ""},
            {name: "Gardening", price: 17.00, einheit: ""},
            {name: "Cooking", price: 23.00, einheit: ""},
        ],
        
    };


}