import { IncomingMessage, ServerResponse } from 'http';
import productData from '../data/product';

const handleProducts = async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url || '';
    const method = req.method;

    if (url === '/products' && method === 'GET') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify([productData]));
    }
}

export default handleProducts;