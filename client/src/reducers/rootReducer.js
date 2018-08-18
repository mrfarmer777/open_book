import { combineReducers } from 'redux';
import entriesReducer from './entriesReducer'
import booksReducer from './booksReducer'
 
const rootReducer = combineReducers({
    loading: false,
    entries: entriesReducer,
    books: booksReducer,
})


export default rootReducer