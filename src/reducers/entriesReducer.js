

export default function entriesReducer(
    state={
        entries: []
    },action){
    
    switch(action.type){
        case "ADD_ENTRY":
            console.log("THIS GOT CALLED")
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        default: 
            return state
    }
}