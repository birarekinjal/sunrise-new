import { post } from '../client';

export class LoginService {
  public async login(loginData : any): Promise<any> {
    const response = await post('/login', loginData);
    return response;
  }
}
