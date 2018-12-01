import { combineReducers } from 'redux';
import entriesReducer from './entriesReducer'
import booksReducer from './booksReducer'
import statsReducer from './statsReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    loading: false,
    entries: entriesReducer,
    books: booksReducer,
    stats: statsReducer,
    user: userReducer
})


export default rootReducer