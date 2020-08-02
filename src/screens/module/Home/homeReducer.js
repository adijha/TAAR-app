import {
    setLoggedInUser,
    setAllUsers
}
    from '../../../components/common/api/actionTypes';


const initialState = {
    loggedInUser: {},
    allUsers:[],
};


export function homeReducer(state = initialState, action = {}) {
    switch (action.type) {
        case setLoggedInUser:
            return {
                ...state,
                loggedInUser: action.payload
            };
            case setAllUsers:
                return {
                    ...state,
                    allUsers: action.payload
                };

        default:
            return state;
    }
}
