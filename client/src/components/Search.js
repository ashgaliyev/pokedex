import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  changeSearchAndFetchPokemon,
  resetSearchAndFetchPokemon
} from '../api/pokemon'
import './Search.css'

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      str: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleChange (e) {
    this.setState({ str: e.target.value })
  }

  handleSubmit () {
    this.props.onSubmit(this.state.str)
  }

  handleReset () {
    this.setState({ str: '' })
    this.props.onReset()
  }

  render () {
    return (
      <div className='search-wrapper'>
          <input onChange={this.handleChange} value={this.state.str} />
          <button onClick={this.handleSubmit}>Search</button>
          {(this.state.str.length > 0 && (<button onClick={this.handleReset}>Reset</button>))}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (str) => dispatch(changeSearchAndFetchPokemon(str)),
  onReset: (str) => dispatch(resetSearchAndFetchPokemon())
})

export default connect(() => ({}), mapDispatchToProps)(Search)
