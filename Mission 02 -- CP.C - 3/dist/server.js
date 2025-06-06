"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const product_routes_1 = __importDefault(require("./routers/product.routes"));
const server = (0, http_1.createServer)((req, res) => {
    (0, product_routes_1.default)(req, res);
});
server.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
});
