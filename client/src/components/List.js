import React from 'react'
import Pokemon from './Pokemon'
import Pagination from './Pagination'
import { connect } from 'react-redux'
import {
  reloadInfo
} from '../api/pokemon'
import {
  LOADING,
  LOADED,
  LOAD_FAILED
} from '../constants/loadState'

const List = props => {
  if (props.loadState === LOADING) {
    return <div className="list list-preview">Loading...</div>
  }

  if (props.loadState === LOAD_FAILED) {
    return <div className="list list-preview">Failed to fetch API</div>
  }

  if (typeof props.items !== 'undefined') {
    if (props.items.length === 0 && props.loadState === LOADED) {
      return <div className='list list-preview'>Items not found</div>
    }
  }

  if (props.loadState !== LOADED) {
    return null
  }

  return (
    <div className="list">
      {props.items.map((item, i) => (
        <Pokemon key={i} info={item} onRepeat={props.onRepeat} />
      ))}

      {(props.itemsCount > props.items.length) && (<Pagination
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
        perPage={props.perPage}
      />)}
    </div>
  )
}

const mapStateToProps = state => ({
  items: state.app.list,
  loadState: state.app.loadState,
  itemsCount: state.app.totalCount,
  currentPage: state.app.currentPage,
  perPage: state.app.perPage
})

const mapDispatchToProps = dispatch => ({
  onRepeat: () => dispatch(reloadInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
