import React from 'react';
import ReactDOM from 'react-dom';


import { createStore, applyMiddleware } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import MrRouter from './Routers/Router';




const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <MrRouter/>
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
