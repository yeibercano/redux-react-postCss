import React from 'react'
import { render } from 'react-dom'

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';

import createLogger from 'redux-logger'
import { browserHistory } from 'react-router'

import appState from './reducers/reducers';
import App from './containers/Main.jsx';


const logger = createLogger();

const middlewareStore = applyMiddleware(thunkMiddleware, logger)(createStore);
export const store = middlewareStore(appState);

const history = browserHistory

render(
  <Provider store={store} history={history} >
    <App />
  </Provider>,
  document.getElementById('app')
)
