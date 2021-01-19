import axios from 'axios'
import { Config } from 'configs'
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
  baseURL: Config.API_URL,
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  // },
  
})

export const handleError = ({ message, data, status }) => {
  return Promise.reject({ message, data, status })
}

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('accessToken');
   
    console.log(config.baseURL + config.url);
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(
//   (response) => {
//     if (response && response.data) {
//       return response.data;
//     }

//     return response;
//   },
//   (error) => {
//     throw error;
//   }
// )

export default instance