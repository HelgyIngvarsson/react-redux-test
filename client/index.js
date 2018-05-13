import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Navigate from './app/containers/Router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './app/store/configureStore'
import {BrowserRouter} from 'react-router-dom';
import { history } from './app/helper/history';

const store = configureStore()
render(
    <Provider store={store}>
        <BrowserRouter history={history}>
        <Navigate/>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
)   