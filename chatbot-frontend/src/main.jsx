import { Provider } from 'react-redux'
import store from './store.js'
import './index.css'
import Chat from './Chat.jsx'
import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(
  <Provider store={store}>
    <Chat />
  </Provider>,
  document.getElementById('root')
);