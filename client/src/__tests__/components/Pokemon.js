import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import Pokemon, { Title, Description, Image } from '../../components/Pokemon.js'
import { Provider } from 'react-redux'
import store from '../../store'
import {
  LOADING,
  LOAD_FAILED
} from '../../constants/loadState'

describe('Pokemon', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <Pokemon />
      </Provider>, div)
  })

  it('must contains elements if info is set', () => {
    const info = {
      img: 'testurl',
      name: 'Baltasaur',
      desc: [
        'Sleep',
        'Eat',
        'Fight'
      ]
    }
    const wrapper = mount(<Pokemon info={info} />)
    console.log(wrapper.debug())
    expect(wrapper.containsAllMatchingElements([
      <Image url='testurl' title='Baltasaur' />
    ])).toEqual(true)
  })

  it('should display loading', () => {
    const info = {
      name: 'Baltasaur',
      url: '',
      loadState: LOADING
    }
    const wrapper = shallow(<Pokemon info={info} />)
    expect(wrapper.contains(
      <div className="loading">Loading...</div>
    )).toEqual(true)
  })

  it('should display repeat, if fails to load', () => {
    const info = {
      name: 'Baltasaur',
      url: '',
      loadState: LOAD_FAILED
    }
    const wrapper = shallow(<Pokemon info={info} />)
    expect(wrapper.contains(
      <span>Loading fails, press repeat</span>
    )).toEqual(true)
  })
})
