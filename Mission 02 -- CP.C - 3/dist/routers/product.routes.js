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
const routeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.url || '';
    const method = req.method;
    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Product API');
    }
    else if (url === '/products' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('try this: /products');
    }
    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});
exports.default = routeHandler;
