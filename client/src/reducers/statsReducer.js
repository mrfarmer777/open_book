
export default function statsReducer(
    state={
        entryStats: {},
        bookStats: {}
    }
    ,action){
    
    switch(action.type){
        case "BEGIN_STATS_REQUEST":
            console.log('getting the stats...' + action.payload)
            return state
        case "ADD_ENTRY_STATS":
            console.log('updating entry stats: '+ action.payload)
            return {...state, entryStats: action.payload}
        case "ADD_BOOK_STATS":
            console.log('updating book stats: '+ action.payload)
            return {...state, bookStats: action.payload}
        case "ADD_USER_STATS":
            return {
                ...state,
                totalPages: action.payload.total_pages,
                totalTime: action.payload.total_time
            };
        default: 
            return state
    };
}