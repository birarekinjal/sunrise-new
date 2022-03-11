/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import messages from '../../application/constants/messages';
import { store } from '../../application/store/store';
import { refreshToken } from '../../presentation/modules/authentication/login/redux/action-creators';
import { getBaseURL, getToken, showToast } from '../utility/commonMethod';


const client = axios.create({
  baseURL:  process.env.REACT_APP_LOCAL_URL || 'http://1ede-103-240-170-217.ngrok.io/api/v1',
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

const getAuthenticationToken = async () => {
  let authenticationToken = await getToken(); 
  if (authenticationToken) {
    return   'jwt' + ' ' + authenticationToken;
  }
  return ''  ;
};
client.interceptors.request.use(async (config:any) => {

  let authenticationToken = await getToken();

  if (authenticationToken) {
    config.headers.Authorization = getAuthenticationToken();
  }   
  return config;
}, function (error) {
  return Promise.reject(error);
});

  
// client.interceptors.response.use(
//   function (response) {
//     if (response.data && response.data.data && response.data.data.logout) {
//       localStorage.removeItem('ACCESS_TOKEN');
//       localStorage.removeItem('REFRESH_TOKEN');
//       localStorage.setItem('SHOW_TOAST', 'true');
//     }
//     return response;
//   },
//   async function (error) {
//     console.log(error , ...error,"error");
//     // if (error.status === 200){
//       // let token = await getAuthenticationToken();
//       // store.dispatch(refreshToken(await token));
//       // return error;
//     // }
//     // showToast(messages.tryAgain);
//     return Promise.reject(error);
//   },
// );

export { get, post, put, del, patch };

export default client;