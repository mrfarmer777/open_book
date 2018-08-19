
export default function statsReducer(
    state=[]
    ,action){
    
    switch(action.type){
        case "BEGIN_STATS_REQUEST":
            console.log('getting the stats...' + action.payload)
            return state
        case "ADD_STATS":
            console.log('updating stats: '+ action.payload)
            return action.payload
        default: 
            return state
    }
}