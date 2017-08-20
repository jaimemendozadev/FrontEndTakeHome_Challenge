import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import mainReducer from './reducers/index.jsx';

import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(mainReducer)}>
    <App />
  </Provider>
, document.querySelector('.target'));