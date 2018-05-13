import {actionTypes} from '../constants/ActionTypes';
import axios from 'axios';
import history from '../helper/history';

export function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/auth/login',
            data: {
                username: username,
                password: password
            }
          }).then(
                response => {
                    dispatch(success(response.data.token));
                    localStorage.setItem('currentUser',JSON.stringify({ username:username, token: response.data.token }));
                    history.push('/');
                })
            .catch(error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                });
    };
 
    function request(username) { return { type: actionTypes.LOGIN_REQUEST, payload:username } }
    function success(token) { return { type: actionTypes.LOGIN_SUCCESS, payload:token } }
    function failure(error) { return { type: actionTypes.LOGIN_FAILURE, payload:error } }
}