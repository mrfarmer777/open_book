

export default function entriesReducer(
    state=[] ,action){
    
    switch(action.type){
        case "ADD_ENTRY":
            console.log('adding single entry: ' + action.payload)
            return [...state, action.payload]
        case "BEGIN_ENTRIES_REQUEST":
            console.log('beginning entry request')
            return state
        case "ADD_ENTRIES": 
            
            console.log('Adding multiple entries: '+action.payload)
            return action.payload
        default: 
            return state
    }
}