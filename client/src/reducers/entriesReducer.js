

export default function entriesReducer(
    state={
        loading: false,
        entries: []
    },action){
    
    switch(action.type){
        case "ADD_ENTRY":
            console.log('adding single entry: ' + action.payload)
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case "BEGIN_ENTRIES_REQUEST":
            console.log('beginning entry request')
            return {
                ...state,
                loading: true,
            }
        case "ADD_ENTRIES": 
            
            console.log('Adding multiple entries: '+action.payload)
            return {
                ...state,
                entries: action.payload
            }
        default: 
            return state
    }
}