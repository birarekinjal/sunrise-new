import { FormValues } from '../../../presentation/modules/todo/model/todo';
import { post } from '../client';


export class TodoService {
  static addTodoSubmit: any;

  public async addTodoSubmit(data : FormValues): Promise<any> {
    const response = await post('https://jsonplaceholder.typicode.com/posts', data);
    return response;
  }
}
