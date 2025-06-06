"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = (0, http_1.createServer)((req, res) => {
    routeHandler;
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
