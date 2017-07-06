import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import Pokemon, { Title, Description, Image } from '../../components/Pokemon.js'

describe('Pokemon', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Pokemon />, div)
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
    expect(wrapper.containsAllMatchingElements([
      <Image />,
      <Title />,
      <Description />
    ])).toEqual(true)
  })

  it('should display loading', () => {
    const info = {
      name: 'Baltasaur',
      url: '',
      isLoading: true
    }
    const wrapper = shallow(<Pokemon info={info} />)
    expect(wrapper.contains(
      <div className="loading">Loading...</div>
    )).toEqual(true)
  })

  it('should display repeat, if fails to load', () => {
    const info = {
      name: 'Baltasaur',
      url: ''
    }
    const wrapper = shallow(<Pokemon info={info} />)
    expect(wrapper.contains(
      <span>Loading fails, press repeat</span>
    )).toEqual(true)
  })
})
