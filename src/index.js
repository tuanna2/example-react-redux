import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import allReducers from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(allReducers);

ReactDOM.render(<Provider store = {store}>
    <App/>
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();
