import { get, post } from '../client';

export class userService {

  public async fetchUser(): Promise<any> {
    const response = await get('/user/');
    return response;
  }

  public async createUser(data : any): Promise<any> {
    const response = await post('/user/', data);
    return response;
  }
}
