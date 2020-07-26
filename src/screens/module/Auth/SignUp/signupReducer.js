import {
    getOtpStart,
    getOtpSuccess,
    otpFailure,
    verifyOtpStart,
    verifyOtpSuccess, 
    registerStart,
    registerSuccess
}
    from '../../../../components/common/api/actionTypes';


const initialState = {
    isOtpLoading: false,
    isverifyLoading: false,
    isRegisterLoading:false,
    mobile: '',
    otp: '',
    errorOtp: '',

};


export function signupReducer(state = initialState, action = {}) {
    switch (action.type) {
        case getOtpStart:
            return {
                ...state,
                isOtpLoading: true
            };
        case getOtpSuccess:
            return {
                ...state,
                mobile: action.payload.phone,
                otp: action.payload.otp,
                isOtpLoading: false
            };
        case verifyOtpStart:
            return {
                ...state,
                isverifyLoading: true
            };
        case verifyOtpSuccess:
            return {
                ...state,
                isverifyLoading: false
            };
            case registerStart:
                return {
                    ...state,
                    isRegisterLoading: true
                };
            case registerSuccess:
                return {
                    ...state,
                    isRegisterLoading: false
                };
        default:
            return state;
    }
}
