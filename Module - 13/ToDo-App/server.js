const http = require('http');
const path = require('path');
const fs = require('fs');


const filePath = path.join(__dirname, "./db/todo.json");


const server = http.createServer( (req, res) => {
    // res.end('Welcome to the ToDo App Server!');
    // console.log(req.url, res.method);
    const data = fs.readFileSync(filePath, {encoding: 'utf-8'});

    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;


    // get all todos
    if (pathname === '/todos' && req.method === 'GET') {
        //            // Way - 01
        res.writeHead(201, {
            'content-type' : 'application/json',
            'email' : 'todo@example.com'
        })

        //            // Way - 02
        // res.statusCode = 201;
        // res.setHeader('Content-Type', 'text/plain');
        // res.setHeader('Email', 'ph2@example.com');

        res.end(data);
    } 
    // create a new todo
    else if (pathname === '/todos/create-todo' && req.method === 'POST') {
        let data  = '';
        req.on('data', (chunk) => {
            data += chunk;
        })

        req.on('end', () => {
            console.log(data);
            const todo = JSON.parse(data);
            console.log(todo);
            // Append the new todo to the existing todos
            const title = todo.title;
            const body = todo.body;
            const date = new Date().toLocaleString();
            const newTodo = { title, body, date };

            const allTodos = fs.readFileSync(filePath, { encoding: 'utf-8' });
            const parseAllTodos = JSON.parse(allTodos);
            parseAllTodos.push(newTodo);
            fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), { encoding: 'utf-8' });

            res.end(JSON.stringify({title, body, date}, null, 2));
        });
    }
    else if (pathname === '/todo' && req.method === 'GET') {
        const title = url.searchParams.get('title');
        console.log(title);
        const allTodos = fs.readFileSync(filePath, { encoding: 'utf-8' });
        const parseAllTodos = JSON.parse(allTodos);
        const todo = parseAllTodos.find(todo => todo.title === title);
        res.end(JSON.stringify(todo, null, 2));
    }
    else if (pathname === '/todos/update-todo' && req.method === 'PATCH') {
        let data  = '';
        const title = url.searchParams.get('title');
        req.on('data', (chunk) => {
            data += chunk;
        })

        req.on('end', () => {
            const todo = JSON.parse(data);;
            const body = todo.body;

            const allTodos = fs.readFileSync(filePath, { encoding: 'utf-8' });
            const parseAllTodos = JSON.parse(allTodos);
            const todoIndex = parseAllTodos.findIndex(todo => todo.title === title);
            if (todoIndex === -1) {
                res.statusCode = 404;
                return res.end(JSON.stringify({ error: 'Todo not found' }));
            }
            parseAllTodos[todoIndex].body = body;
            fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), { encoding: 'utf-8' });

            res.end(JSON.stringify({title, body, date : parseAllTodos[todoIndex].date}, null, 2));
        });
    }
    // delete a todo
    else if (pathname === '/todos/delete-todo' && req.method === 'DELETE') {
        const title = url.searchParams.get('title');
        const allTodos = fs.readFileSync(filePath, { encoding: 'utf-8' });
        const parseAllTodos = JSON.parse(allTodos);
        const todoIndex = parseAllTodos.findIndex(todo => todo.title === title);
        if (todoIndex === -1) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'Todo not found' }));
        }
        parseAllTodos.splice(todoIndex, 1);
        fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), { encoding: 'utf-8' });

        res.end(JSON.stringify({ message: 'Todo deleted successfully' }, null, 2));
    }
    // 404 Not Found
    else {
        res.statusCode = 404;
        res.end('Not Found');
    }

});

server.listen(5000, "127.0.0.1", () => {
    console.log('Server is running on http://localhost:5000');
});

/***
 * /todos - GET - Fetch all todos
 * /todos/create-todo - POST - Create a new todo
 */