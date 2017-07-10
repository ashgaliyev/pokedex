import React from 'react'
import ReactDOM from 'react-dom'
import List from '../../components/List.js'
import { Provider } from 'react-redux'
import store from '../../store'

describe('List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><List /></Provider>, div)
  })
})
