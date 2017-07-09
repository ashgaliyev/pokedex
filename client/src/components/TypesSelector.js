import React from 'react'
import { connect } from 'react-redux'
import {
  toggleTypeAndFetchPokemons
} from '../api/pokemon'

const TypesSelector = ({ onSelect, types, selected }) => (
  <div className='types-selector'>
    <ul>
      {types.map((item, i) => (
        selected !== null && selected === item.type
          ? (
            <li key={i} onClick={() => onSelect(item.type)} className='selected'>
              <input type='checkbox' checked={true} />
              <span>{item.name}</span>
            </li>
          ) : (
            <li key={i} onClick={() => onSelect(item.type)}>
              <input type='checkbox' checked={false} />
              <span>{item.name}</span>
            </li>
          )
      ))}
    </ul>
  </div>
)

const mapStateToProps = (state) => ({
  types: state.app.types,
  selected: state.app.selectedType
})

const mapDispatchToProps = (dispatch) => ({
  onSelect: (type) => dispatch(toggleTypeAndFetchPokemons(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(TypesSelector)
