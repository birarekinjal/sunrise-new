import { get, post } from '../client';

export class userService {

  public async fetchUser(obj:any): Promise<any> {
    const response = await get('/user/', { ...obj });
    return response;
  }

  public async createUser(data : any): Promise<any> {
    const response = await post('/user/', data);
    return response;
  }
}
