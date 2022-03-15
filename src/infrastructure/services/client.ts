/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import messages from '../../application/constants/messages';
import { store } from '../../application/store/store';
import { refreshToken } from '../../presentation/modules/authentication/login/redux/action-creators';
import { getBaseURL, getRefreshToken, getToken, showToast } from '../utility/commonMethod';


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

const getAuthenticationRefreshToken = async () => {
  let authenticationToken = await getRefreshToken(); 
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

// client.interceptors.response.use(function (response) {
//   console.log(response , response);
//   // Any status code that lie within the range of 2xx cause this function to trigger
//   // Do something with response data
//   return response;
// }, function (error) {
//   console.log(error , "error" , {...error || {}} );
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   return Promise.reject(error);
// });
  
// client.interceptors.response.use(
//   function (response) {

//     console.log(response, 'respnse');
//     console.log(response.status);
//     if (response.data && response.data.data && response.data.data.logout) {
//       localStorage.removeItem('ACCESS_TOKEN');
//       localStorage.removeItem('REFRESH_TOKEN');
//       localStorage.setItem('SHOW_TOAST', 'true');
//     }
//     return response;
//   },async function (error) {
//     console.log(error, 'erros', {...error || {}}, error.response.status);


//     if (error.config && error.response && error.response.status === 401){
//       let token = await getAuthenticationRefreshToken();
//       console.log(token , "token");
//       store.dispatch(refreshToken(await token));

//        error.config.headers.Authorization = getAuthenticationToken();
//        return axios.request(error.config);
//     }

//     if (error.status === 409 ) {
//        localStorage.removeItem('ACCESS_TOKEN');
//        localStorage.removeItem('REFRESH_TOKEN');
//        localStorage.setItem('SHOW_TOAST', 'true');  
//     }
//     showToast(messages.tryAgain);
//     return Promise.reject(error);


    // if (error.config && error.response && error.response.status === 401) {
    //   return updateToken().then((token) => {
    //   error.config.headers.xxxx <= set the token
    //   return axios.request(config);
    //   });
    //   }
        
    //   return Promise.reject(error);
    //   });


//   },
 
// );

export { get, post, put, del, patch };

export default client;