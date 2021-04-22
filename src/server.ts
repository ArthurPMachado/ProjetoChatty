import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import './database';
import routes from './routes';

const server = express();

const http = createServer(server); // Criando protocolo http
const io = new Server(http); // Criando protocolo websocket

io.on('connection', (socket: Socket) => {
  console.log('Connected', socket.id);
});

server.use(express.json());

server.use(routes);

http.listen(3030, () => console.log('Server is running'));
