import React from 'react'
import Pokemon from './Pokemon'
import Pagination from './Pagination'

const List = props => {
  if (!props.items) {
    return <div className="list-preview">Loading...</div>
  }

  if (props.items.length === 0) {
    return <div className="list-preview">No items found...</div>
  }

  return (
    <div className="list">
      {props.items.map((item) => (
        <Pokemon info={item} onRepeat={this.props.onRepeat} />
      ))}

      <Pagination
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
        perPage={props.perPage}
      />
    </div>
  )
}

export default List
