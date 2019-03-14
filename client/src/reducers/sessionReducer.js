import * as types from '../actions/actionTypes';


export default function sessionReducer(
    state={
        session: !!localStorage.jwt
    }
    , action){
    
    switch(action.type){
        case types.LOG_IN_SUCCESS:
            this.history.push("/home")
            return !!sessionStorage.jwt
        default: 
            return state
    }
}