import { combineReducers } from 'redux';

import { signupReducer } from '../../screens/module/Auth/SignUp/signupReducer';
import {homeReducer} from '../../screens/module/Home/homeReducer';

export default combineReducers({
    signupReducer,
    homeReducer
})