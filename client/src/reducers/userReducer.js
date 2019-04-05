export default function userReducer(
    state={
        id: null,
        name: "",
        email: "",
        authenticated: false,
        stats: {
            totalPages: 0,
            totalTime: 0,
        }
    }
    , action){
    
    switch(action.type){
        case "BEGIN_LOGIN_REQUEST":
            console.log('requesting login...' + action.payload)
            return state
        case "COMPLETE_USER_DATA":
            console.log('Clearing login inputs: '+ action.payload)
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                authenticated: true,
                stats: {
                    total_pages: action.payload.total_pages,
                    total_time: action.payload.total_time,
                    reading_rate: action.payload.reading_rate,
                    time_this_week: action.payload.time_this_week,
                    pages_this_week: action.payload.pages_this_week
                    
                }
                
            }
        case "REMOVE_USER_DATA":
            return {...state, name:"", email: "", authenticated: false}
        case "LOGIN_ERROR":
            return {...state, email: "", password: ""}
        default: 
            return state
    }
}