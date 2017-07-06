import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import Pagination from '../../components/Pagination'

describe('Pagination', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}><Pagination /></Provider>, div)
  })

  it('must contains elements if info is set', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Pagination currentPage={2} itemsCount={30} />
      </Provider>)
    expect(wrapper.containsAllMatchingElements([
      <li>{1}</li>,
      <li className="active">{2}</li>,
      <li>{3}</li>
    ])).toEqual(true)
  })
})
