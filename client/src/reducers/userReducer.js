export default function userReducer(
    state={
        email: "",
        password: ""
    }
    ,action){
    
    switch(action.type){
        case "BEGIN_LOGIN_REQUEST":
            console.log('requesting login...' + action.payload)
            return state
        case "COMPLETE_USER_LOGIN":
            console.log('Clearing login inputs: '+ action.payload)
            return {...state, email: "bleh", password:""}
        case "LOGIN_ERROR":
            console.log('Errors occurred on login: '+ action.payload)
            return {...state, email: "", password: ""}
        default: 
            return state
    }
}