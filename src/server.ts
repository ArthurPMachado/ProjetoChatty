/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import path from 'path';

import './database';
import routes from './routes';

const server = express();

server.use(express.static(path.join(__dirname, '..', 'public')));
server.set('views', path.join(__dirname, '..', 'public'));
server.engine('html', require('ejs').renderFile);

server.set('view engine', 'html');

const http = createServer(server); // Criando protocolo http
const io = new Server(http); // Criando protocolo websocket

io.on('connection', (socket: Socket) => {
  console.log('Connected', socket.id);
});

server.use(express.json());

server.use(routes);

http.listen(3030, () => console.log('Server is running'));
