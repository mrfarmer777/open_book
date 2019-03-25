

export default function booksReducer(
    state={
        userBooks: [],
        popBooks: []
    }
    ,action){
    
    switch(action.type){
        case "BEGIN_BOOKS_REQUEST":
            console.log("sending request...")
            return state
        case "ADD_BOOKS":
            console.log('adding state with books: '+ action.payload)
            return {
                ...state,
                userBooks: action.payload
            }
        case "ADD_BOOK":
            return {
                ...state,
                userBooks: [...state.userBooks, action.payload]
            }
        case "ADD_POP_BOOKS":
            return {
                ...state,
                popBooks: action.payload
            }
        case "REMOVE_BOOK":
            return {
                ...state,
                userBooks: state.userBooks.filter(book => book.id !== action.payload.id)
            }
        default: 
            return state
    }
}