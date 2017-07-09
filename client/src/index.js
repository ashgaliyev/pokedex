import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import {
  changePageAndFetchPokemons
} from './api/pokemon'
import {
  fetchTypes
} from './api/type'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

store.dispatch(changePageAndFetchPokemons(1))
store.dispatch(fetchTypes())

registerServiceWorker()
