import React, { Component } from 'react'
import './Pokemon.css'
import {
  LOADING,
  LOAD_FAILED
} from '../constants/loadState'

export const Title = ({ title }) => <h2>{title}</h2>

export const Image = ({ url, title }) => (
  <img src={url} alt={title} />
)

export const Description = ({ items }) => (
  <ul>
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
)

class Pokemon extends Component {
  render () {
    if (typeof this.props.info !== 'undefined') {
      const info = this.props.info

      if (info.loadState === LOADING) {
        return (
          <div className='pokemon'>
            <div className='loading'>Loading...</div>
          </div>
        )
      } else if (info.loadState === LOAD_FAILED) {
        return (
          <div className='pokemon'>
            <div className='load-fail'>
              <span>Loading fails, press repeat</span>
              <button onClick={() => this.props.onRepeat()}>repeat</button>
            </div>
          </div>
        )
      }

      return (
        <div className="pokemon">
          <div className="col">
            <Image url={info.img} title={info.name} />
          </div>
          <div className="col">
            <Title title={info.name} />
            <Description items={info.desc} />
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Pokemon
