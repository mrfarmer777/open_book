import React from 'react';
import ReactDOM from 'react-dom';


import { createStore, applyMiddleware } from 'redux'; 
import entriesReducer from './reducers/entriesReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MrRouter from './Routers/Router';


const store=createStore(entriesReducer,applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <MrRouter>
            <App/>
        </MrRouter>
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
