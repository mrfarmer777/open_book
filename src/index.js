import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MrRouter from './Routers/Router'

ReactDOM.render(
    <MrRouter>
        <App/>
    </MrRouter>
    ,
    document.getElementById('root'));
registerServiceWorker();
