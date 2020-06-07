import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

// mongo "mongodb+srv://eia2-nathalie-j7mxw.mongodb.net/<dbname>" --username Nathalie_SCH//

export namespace L07_Haushaltshilfe {

    interface Order {
        [type: string]: string | string[];
    }
    let orders: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;
    
        let databaseUrl: string = "mongodb+srv://eia2-nathalie-j7mxw.mongodb.net/<dbname> --username Nathalie_SCH";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
    let server: Http.Server = Http.createServer();

    console.log("Server starting on port" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
       await mongoClient.connect();
       orders = mongoClient.db("Haushaltshilfe").collection("Orders");
       console.log("Database connection ", orders != undefined);

    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

        _response.setHeader("content-type","text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin","*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            storeOrder(url.query);

        }

        function storeOrder(_order: Order): void {
            orders.insert(_order);

        }



        


        _response.write("This is my response");
        _response.end();

    }
}