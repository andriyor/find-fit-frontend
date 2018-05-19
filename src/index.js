import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import './index.css';
import RegistrationInApp from './RegistrationInApp'

import configureStore from './configureStore'
const { persistor, store } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/registration" component={RegistrationInApp} />
        </div>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);