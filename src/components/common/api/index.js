import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
// import { getAsyncStorage, keys } from "../../../../asyncStorage";

const apiCaller = async (
  url,
  method = 'POST',
  data,
  params,
  contentType = 'application/json',
) => {
  //console.log(getAccessToken());
  // let token='';
  // getAsyncStorage(keys.access_token)
  //     .then((access_token) => {
  //       token=access_token
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // let token = await AsyncStorage.getItem('access_token') || 'none';
  return axios({
    url,
    method,
    headers: {
      // 'Authorization':'Bearer '+ token
    },
    data: data,
    params: params,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error && error.response && error.response.status === 401) {
        AsyncStorage.removeItem('access_token');
        console.log(error);
      } else if (error && error.response) {
        console.log(error);
        return Promise.reject(error.response);
      }
      console.log(error.response);
    });
};

export default apiCaller;
