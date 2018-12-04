import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import AnecdoteReducer from './reducer'

ReactDOM.render(
  <Provider store={createStore(AnecdoteReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
