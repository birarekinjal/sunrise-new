import { get } from '../client';

export class userService {

  public async fetchUser(): Promise<any> {
    const response = await get('/users');
    return response;
  }
}
