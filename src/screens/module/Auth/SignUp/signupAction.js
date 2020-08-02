import {
    getOtpStart,
    getOtpSuccess,
    otpFailure,
    verifyOtpStart,
    verifyOtpSuccess,
    registerStart,
    registerSuccess,
    setLoggedInUser
}
    from '../../../../components/common/api/actionTypes';
import apiCaller from '../../../../components/common/api';
import apiURLs from '../../../../utils/apiURLs';
import { Alert } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { AddUser,UpdateUser,AddUserStore,UpdateUserStore } from '../../../../network';
import { setAsyncStorage, keys } from "../../../../asyncStorage";
import {setUserId} from '../../../../utils/constants';
import JwtDecode from 'jwt-decode';

export const getOtp = (params) => async (dispatch) => {
    dispatch({
        type: getOtpStart,
    });
    const crendetials = {
        phoneno: params.mobile
    }
    // const changeState = () =>{
    //     clear();
    // }
    await apiCaller(apiURLs.otp, 'POST', crendetials)
        .then(response => {
            if (response && response.data) {
                console.log('otp', response.data.otp)
                Alert.alert(response.data.otp)
                // AsyncStorage.setItem("access_token", response.data.data.access_token);
                dispatch({
                    type: getOtpSuccess,
                    payload: response.data
                });
                if (!params.isResend) {
                    params.navigation.navigate('OTP');
                }
            }
        })
        .catch(error => {
            dispatch({
                type: otpFailure,
                payload: error
            });

        });
};

// const getStorageToken = async ()  =>{
//     let value = await AsyncStorage.getItem('access_token')
//   return value
// }


export const verifyOtp = (params) => async (dispatch) => {
    dispatch({
        type: verifyOtpStart,
    });
    const crendetials = {
        phoneno: params.mobile,
        otp: params.otp
    }
    await apiCaller(apiURLs.verifyOtp, 'POST', crendetials)
        .then(response => {
            if (response && response.data) {
                console.log('token', response.data)
                // AsyncStorage.setItem("access_token", response.data);
                dispatch({
                    type: verifyOtpSuccess,
                });
                let userData = JwtDecode(response.data);
                // AddUserStore(
                //     firstname = userData.data.firstname,
                //     lastname = userData.data.lastname,
                //     id = userData.id,
                //     photo = userData.data.photo,
                //     phoneno = userData.data.phoneno,
                //     gender = userData.data.gender
                // )
                // AddUser(
                //     firstname = userData.data.firstname,
                //     lastname = userData.data.lastname,
                //     id = userData.id,
                //     photo = userData.data.photo,
                //     phoneno = userData.data.phoneno,
                //     gender = userData.data.gender
                // )
                    // .then(() => {
                        setAsyncStorage(keys.access_token, response.data);
                        // setAsyncStorage(keys., userData.id);
                        setUserId(userData.id)

                        // setUniqueValue(uid);
                        // dispatchLoaderAction({
                        //     type: LOADING_STOP,
                        // });
                        // navigation.replace("Dashboard");
                        params.navigation.navigate('CreateAccount');
                    // })
                // let token = getStorageToken()
                // console.log(token);
                // params.navigation.navigate('CreateAccount');


            }
        })
        .catch(error => {
            dispatch({
                type: otpFailure,
                payload: error
            });

        });
};



// const apiPicCaller = async (url, method = 'POST', data, params) => {
//     //console.log(getAccessToken());
//     // setTimeout(() => {

//     // }, 1000);
//     let token = await AsyncStorage.getItem('access_token') || '';
//     return axios({
//         url,
//         method,
//         headers: {
//             // 'Content-Type':'application/x-www-form-urlencoded',
//             'Content-Type': 'multipart/form-data',
//             'Authorization': 'Bearer ' + token
//         },

//         data: data,
//         params: params
//     })
//         .then(response => {
//             return response;
//         })
//         .catch(error => {
//             if (error && error.response && error.response.status === 401) {
//                 AsyncStorage.removeItem('access_token');
//             }
//             else if (error && error.response) {
//                 return Promise.reject(error.response);
//             }
//             console.log(error.response);
//         });
// };


// export const uploadProfile = (params) => async (dispatch) => {
//     // dispatch({ type: companyCoverImageUploadStart });
//     let bodyFormData = new FormData();
//     bodyFormData.append("user", { firstName: 'ankit', lastName: 'metwal', gender: 'male' })
//     bodyFormData.append("image", params.file);
//     bodyFormData.append("type", "cover_pic");
//     bodyFormData.append("save_in_db", false);
//     // tempUpload(bodyFormData);
//     await apiPicCaller('https://85fdd47875ea.ngrok.io/user/profile', "POST", bodyFormData)
//         .then((response) => {
//             if (response && response.data && response.data.message) {
//                 dispatch({
//                     type: companyCoverImageUploadSuccess,
//                     payload: response.data.data.url,
//                 });
//             }
//         })
//         .catch((error) => {
//             if (error.status === 403) {
//                 //   dispatch(refresh(params, "uploadCompanyCoverImage"));
//             }
//         });
// };

export const registerDetails = (params) => (dispatch) => {
    const crendetials = {
        firstname: params.firstname,
        lastname: params.lastname,
        photo: params.photo ? params.photo : '',
        gender: params.gender,
        id: params.id,
        phoneno: params.phoneno
        // navigation:this.props.navigation
    }
    UpdateUserStore(params.id,params)
    // UpdateUser(params.id, params)
        .then(() => {
            dispatch({
                type: setLoggedInUser,
                payload: crendetials
            })
            params.navigation.navigate('RegisterSuccess');
            //   setUserDetail({
            //     ...params,
            //     profileImg: source,
            //   });
            //   dispatchLoaderAction({
            //     type: LOADING_STOP,
            //   });
        })
        .catch(() => {
            alert(err);
            dispatchLoaderAction({
                type: LOADING_STOP,
            });
        });
}

export const registerProfile = (params) => async (dispatch) => {
    dispatch({
        type: registerStart,
    });
    const crendetials = {
        firstname: params.firstname,
        lastname: params.lastname,
        photo: params.photo ? params.photo : '',
        gender: params.gender,
        id: params.id,
        phoneno: params.phoneno
    }

    await apiCaller(apiURLs.profile, 'POST', crendetials)
        .then(response => {
            if (response && response.data !== 'something wrong') {
                console.log('register', response.data)
                AsyncStorage.setItem("access_token", response.data);
                dispatch({
                    type: registerSuccess,
                });
                dispatch({
                    type: setLoggedInUser,
                    payload: crendetials
                })
                params.navigation.navigate('RegisterSuccess');
            }
        })
        .catch(error => {
            dispatch({
                type: otpFailure,
                payload: error
            });

        });
};



