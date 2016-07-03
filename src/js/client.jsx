import React from 'react'
import { render } from 'react-dom'
import { createStore } from "redux";
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import { browserHistory } from 'react-router'

import { reducers } from './reducers/reducers';
import App from './containers/Main.jsx';

import styles from '../styles/main.css'

const store = createStore(reducers);
const history = browserHistory

render(
  <Provider store={store} history={history}>
    <App />
  </Provider>,
  document.getElementById('app')
)

store.subscribe(() => {
  console.log("store changed", store.getState())
})

