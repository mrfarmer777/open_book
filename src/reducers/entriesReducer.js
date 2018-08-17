

export default function entriesReducer(
    state={
        entries:[]
    },action){
    
    switch(action.type){
        case "ADD_ENTRY":
            return {
                ...state,
                entries: [...state.entries, action.payload.entry]
            }
        default: 
            return state
    }
}