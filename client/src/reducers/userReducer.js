export default function userReducer(
    state={
        id: null,
        name: "",
        email: "",
        authenticated: false,
        stats: {
            totalPages: 0,
            totalTime: 0,
        },
        section_invites: []
    }
    , action){
    
    switch(action.type){
        case "BEGIN_USER_REQUEST": //A general action for beginning any user request
            console.log("requesting data: " + action.payload)
            return state //because nothing's happening yet
        case "BEGIN_LOGIN_REQUEST": //An action for the start of a login request
            console.log('requesting login...' + action.payload)
            return state
        case "COMPLETE_USER_DATA": //Completing the state with returned data
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
                    
                },
                section_invites: action.payload.section_invites
                
            }
        case "REMOVE_USER_DATA": //Removing user data from the state; this isn't used right now, but likely should be
            return {...state, name:"", email: "", authenticated: false}
        case "REMOVE_SECTION_INVITE": //Removes an invite from the state (whether accepted or declined)
            return {
                ...state,
                section_invites: state.section_invites.filter(inv => inv.id !== action.payload.id)
            }
        case "LOGIN_ERROR": //Action handling an error with the login in request
            return {...state, email: "", password: ""}
        default: 
            return state
    }
}