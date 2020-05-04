import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import './normalize.css';

import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, {}, composeWithDevTools(
    applyMiddleware(reduxThunk),
));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);