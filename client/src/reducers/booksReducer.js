

export default function booksReducer(
    state={
        userBooks: [],
        popBooks: []
    }
    ,action){
    
    switch(action.type){
        case "POST_BOOK":
            console.log('posting book... ' + action.payload)
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case "BEGIN_BOOKS_REQUEST":
            console.log("sending request...")
            return state
        case "ADD_BOOKS":
            console.log('adding state with books: '+ action.payload)
            return {
                ...state,
                userBooks: action.payload
            }
        case "ADD_POP_BOOKS":
            return {
                ...state,
                popBooks: action.payload
            }
        default: 
            return state
    }
}