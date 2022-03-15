import { post } from '../client';

export class LoginService {
  public async login(loginData : any): Promise<any> {
    const response = await post('user/login', loginData);
    return response;
  }

  public async refreshToken(token : object): Promise<any> {
    const response = await post('user/get-refresh-token',  token);
    return response;
  }
}
