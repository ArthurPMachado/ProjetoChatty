import { Request, Response } from 'express';
import MessagesService from '../services/MessagesService';

class MessagesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, text, user_id } = request.body;

    const messagesService = new MessagesService();

    const message = await messagesService.create({
      admin_id,
      text,
      user_id,
    });

    return response.json(message);
  }

  async showAllByUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const messagesService = new MessagesService();

    const list = await messagesService.listByUser(id);

    return response.json(list);
  }
}

export default MessagesController;
