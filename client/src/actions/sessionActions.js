import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';


//An action to handle a successful login
export function loginSuccess(){
    return {type: types.LOG_IN_SUCCESS}
}

export function loginUser(credentials){
    return function(dispatch){
        return sessionApi.login(credentials).then(response=>{
            localStorage.setItem('jwt', response.jwt);
            dispatch(loginSuccess());
        }).catch(error => {
            throw(error);
        });
    };
}