import 
{ 
    getOtpStart,
    getOtpSuccess,
    otpFailure,
    verifyOtpStart,
    verifyOtpSuccess,
    registerStart,
    registerSuccess
} 
from '../../../../components/common/api/actionTypes';
import apiCaller from '../../../../components/common/api';
import apiURLs from '../../../../utils/apiURLs';
import { Alert } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

export const getOtp = (params) => async (dispatch) => {
    dispatch({
        type: getOtpStart,
    });
    const crendetials = {    
        phoneno:params.mobile
    }
    // const changeState = () =>{
    //     clear();
    // }
    await apiCaller(apiURLs.otp, 'POST', crendetials)
        .then(response => {
            if (response && response.data) {
                console.log('otp',response.data.otp)
                // AsyncStorage.setItem("access_token", response.data.data.access_token);
                dispatch({
                    type: getOtpSuccess,
                    payload: response.data
                });
                if(!params.isResend){
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
        phoneno:params.mobile,
        otp:params.otp
    }
    await apiCaller(apiURLs.verifyOtp, 'POST', crendetials)
        .then(response => {
            if (response && response.data) {
                console.log('token',response.data)
                AsyncStorage.setItem("access_token", response.data);
                dispatch({
                    type: verifyOtpSuccess,
                });
                // let token = getStorageToken()
                // console.log(token);
                params.navigation.navigate('CreateAccount');

                
            }
        })
        .catch(error => {
            dispatch({
                type: otpFailure,
                payload: error
            });
            
        });
};

export const registerProfile = (params) => async (dispatch) => {
    dispatch({
        type: registerStart,
    });
    const crendetials = {
        firstname:params.firstname,
        lastname:params.lastname,
        photo:params.photo?params.photo:'',
        gender:params.gender,
        id:params.id,
        // navigation:this.props.navigation

    }
    // const crendetials = {    
    //     phoneno:params.mobile,
    //     otp:params.otp
    // }
    await apiCaller(apiURLs.profile, 'POST', crendetials)
        .then(response => {
            if (response && response.data!=='something wrong') {
                console.log('register',response.data)
                dispatch({
                    type: registerSuccess,
                });
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



