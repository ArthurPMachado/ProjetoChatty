import { http } from './http';
import './websocket/client';

http.listen(3030, () => console.log('Server is running'));
