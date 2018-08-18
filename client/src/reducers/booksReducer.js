

export default function booksReducer(
    state={
        books: []
    },action){
    
    switch(action.type){
        case "ADD_ENTRY":
            console.log('adding single entry: ' + action.payload)
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        default: 
            return state
    }
}