import 'babel-polyfill';
import React from 'react';
import { createLogger } from 'redux-logger'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetchCountries, requestCountries } from './actions/countryActions'
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux';
import countriesApp from './reducers/countries';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleWare = createLogger();

let store = createStore(countriesApp, applyMiddleware(thunkMiddleware,loggerMiddleWare));
store.dispatch(fetchCountries());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
