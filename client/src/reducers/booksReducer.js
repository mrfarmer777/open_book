

export default function booksReducer(
    state= []
    ,action){
    
    switch(action.type){
        case "POST_BOOK":
            console.log('posting book... ' + action.payload)
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        default: 
            return state
    }
}