import express from 'express';

import './database';

const server = express();

server.listen(3030, () => console.log('Server is running'));
