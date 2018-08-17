import React from 'react';
import ReactDOM from 'react-dom';


import { createStore } from 'redux'; 
import entriesReducer from './reducers/entriesReducer';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MrRouter from './Routers/Router';


const store=createStore(entriesReducer)

ReactDOM.render(
    <Provider store={store}>
        <MrRouter>
            <App/>
        </MrRouter>
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
