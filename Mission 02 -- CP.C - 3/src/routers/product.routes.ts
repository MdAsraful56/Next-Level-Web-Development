import { IncomingMessage, ServerResponse } from 'http';
import handleProducts from '../controller/product.controller';

const routeHandler = async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url || '';
    const method = req.method;

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Product API');
    }

    else if (url === '/products' && method === 'GET') {
        await handleProducts(req, res);
    }

    else {
        res.writeHead(404);
        res.end('Not Found');
    }
}

export default routeHandler;