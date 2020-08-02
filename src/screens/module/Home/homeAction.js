import 
{ 
    setLoggedInUser,
    setAllUsers,

} 
from '../../../components/common/api/actionTypes';
import apiCaller from '../../../components/common/api';
import apiURLs from '../../../utils/apiURLs';
import { Alert } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export const fetchUsers = (params) => async (dispatch) =>{
    // dispatch({
    //     type:setLoggedInUser,
    //     payload:params.currentUserData
    console.log(params.allUser)
    // });
    dispatch({
        type:setAllUsers,
        payload:params.allUser
    });
}





