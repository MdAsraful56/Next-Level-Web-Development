import { createServer, Server } from 'http';
import routeHandler from './routers/product.routes';

const server : Server = createServer((req, res) => {
    routeHandler (req, res);
});

server.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
})