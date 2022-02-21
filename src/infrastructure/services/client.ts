import axios from 'axios';

const client = axios.create({
  // baseURL: getBaseURL(),
  baseURL : 'https://jsonplaceholder.typicode.com',
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

// client.interceptors.request.use(async (config) => {
//   config.headers.Authorization = await getToken();
//   return config;
// });
  
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