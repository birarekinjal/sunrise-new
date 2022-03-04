/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { getBaseURL, getToken } from '../utility/commonMethod';


const client = axios.create({
  baseURL: 'https://fddca60e8175.ngrok.io/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const get = (url: string, body?: object, headers = {}) =>
  client.get(url, { params: body, headers: headers });

const post = (url: string, body?: object, headers = {}) =>
  client.post(url, body, { headers });

const put = (url: string, body?: object, headers = {}) =>
  client.put(url, body, { headers });

const patch = (url: string, body?: object, headers = {}) =>
  client.patch(url, body, { headers });

const del = (url: string, body?: object) =>
  client.delete(url, body );

client.interceptors.request.use(async (config:any) => {

  let authenticationToken = await getToken();

  if (authenticationToken) {
    config.headers.Authorization = 'jwt' + ' ' + authenticationToken;
  }   
  return config;
}, function (error) {
  return Promise.reject(error);
});

  
// client.interceptors.response.use(
//   function (response) {
//     if (response.data && response.data.data && response.data.data.logout) {
//       localStorage.removeItem('TOKEN');
//       localStorage.setItem('SHOW_TOAST', 'true');
//     }
//     return response;
//   },
//   function (error) {
//     showToast(messages.tryAgain);
//     return Promise.reject(error);
//   },
// );

export { get, post, put, del, patch };

export default client;