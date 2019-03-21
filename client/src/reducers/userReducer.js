export default function userReducer(
    state={
        id: null,
        name: "",
        email: "",
        authenticated: false
    }
    , action){
    
    switch(action.type){
        case "BEGIN_LOGIN_REQUEST":
            console.log('requesting login...' + action.payload)
            return state
        case "COMPLETE_USER_DATA":
            console.log('Clearing login inputs: '+ action.payload)
            return {...state, name: action.payload.name, email: action.payload.email, authenticated: true}
        case "LOGIN_ERROR":
            console.log('Errors occurred on login: '+ action.payload)
            return {...state, email: "", password: ""}
        default: 
            return state
    }
}