import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();

const server = new createServer(app);

const allowedOrigins = ['http://localhost:5173'];

const io = new Server(server, {
    cors: {
        origin: allowedOrigins,
        methods: ['GET', 'POST'],
        credentials: true,
    }
});

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send('Hello from Express');
});

io.on('connection', (socket) => {
    socket.emit('welcome',`Welcome to the server ${socket.id}`);
    socket.broadcast.emit('welcome',`User connected to the server with id ${socket.id}`);

    socket.on('message', (message) => {
        console.log(`Message from ${socket.id}: ${message}`);
    });
    
    socket.on('disconnect', () => {
        console.log(`You are disconnected from the server with id ${socket.id}`);
        socket.broadcast.emit('welcome',`User disconnected from the server with id ${socket.id}`);
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});