"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var dancefloor;
(function (dancefloor) {
    let server = Http.createServer();
    let saveCanvas;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "";
    console.log("Server starting on port:" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    connectDatabase(databaseUrl);
    function connectDatabase(_url) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = { useNewUrlParser: true, useUnifiedTopology: true };
            let mongoCLient = new Mongo.MongoClient(_url, options);
            yield mongoCLient.connect();
            saveCanvas = mongoCLient.db("Disco").collection("SavedDiscos");
        });
    }
    function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeData(url.query);
        }
        _response.end();
    }
    function storeData(_info) {
        saveCanvas.insert(_info);
    }
})(dancefloor = exports.dancefloor || (exports.dancefloor = {}));
//# sourceMappingURL=Server.js.map