import { combineReducers } from 'redux';
import entriesReducer from './entriesReducer'
import booksReducer from './booksReducer'
import statsReducer from './statsReducer'
 
const rootReducer = combineReducers({
    loading: false,
    entries: entriesReducer,
    books: booksReducer,
    stats: statsReducer
})


export default rootReducer