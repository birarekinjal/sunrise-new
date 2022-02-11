import { FormValues } from '../../../presentation/modules/todo/model/todo';

const axios = require('axios');

export class TodoService {
  static addTodoSubmit: any;

  public async addTodoSubmit(data : FormValues): Promise<any> {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
    return response;
  }
}
