const axios = require('axios');

export class UserService {
  public async getUsers(): Promise<any> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response;
  }
}
