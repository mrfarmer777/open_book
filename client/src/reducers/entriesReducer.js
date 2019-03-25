

export default function entriesReducer(
    state=[] ,action){
    
    switch(action.type){
        //Adds into state directly, currently unused
        case "ADD_ENTRY":
            console.log('adding single entry: ' + action.payload)
            return [...state, action.payload]
            
        //Indicates that state is loading...waiting on an async promise
        case "BEGIN_ENTRIES_REQUEST":
            console.log('beginning entry request')
            return state
            
        //Adds all entries in the remote api to the state at once, could be called update_entries...
        case "ADD_ENTRIES": 
            console.log('Adding multiple entries: '+action.payload)
            return action.payload
        case "REMOVE_ENTRY":
            return {
                ...state,
                entries: state.entries.filter(entry => entry.id !== action.payload.id)
            }
        default: 
            return state
    }
}