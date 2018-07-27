import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


//https://medium.com/@holtkam2/react-redux-understanding-components-containers-actions-and-reducers-a2f9287bfb92
// https://www.thegreatcodeadventure.com/react-redux-tutorial-part-iii-async-redux/
//https://github.com/buckyroberts/React-Redux-Boilerplate
//https://stackoverflow.com/questions/39813984/how-to-fetch-data-through-api-in-redux