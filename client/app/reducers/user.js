import {actionTypes} from '../constants/ActionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function auth(state = initialState, action){
    switch(action.type){
        case actionTypes.LOGIN_REQUEST:
            return{
                user: action.payload    
            };
        case actionTypes.LOGIN_SUCCESS:
            return{
                LoggedIn:true,
                user:action.payload
            };
        case actionTypes.LOGIN_FAILURE:
            return {};
        default:
            return state;
    }

}