import React from 'react'
import { connect } from 'react-redux'
import { SET_PAGE } from '../constants/actionTypes'

const mapDispatchToProps = dispatch => ({
  onSetPage: (page) => dispatch(SET_PAGE, page)
})

const getPagesCount = itemsCount => {
  let pagesCount = 0
  let remain = itemsCount

  while (remain >= 10) {
    if (remain % 10 === 0) {
      pagesCount++
    }
    remain--
  }
  return pagesCount
}

const Pagination = props => {
  if (!props.itemsCount || props.itemsCount <= 10) {
    return null
  }

  const currentPage = typeof props.currentPage === 'undefined' ? 1 : props.currentPage

  const pagesCount = getPagesCount(props.itemsCount)

  return (
    <ul className='pagination'>
      {[...(new Array(pagesCount).fill())].map((_, i) => {
        const page = i + 1
        if (page === currentPage) {
          return <li key={page} className='active'>{page}</li>
        } else {
          return <li key={page} onClick={() => props.onSetPage(page)}>{page}</li>
        }
      })}
    </ul>
  )
}

export default connect(() => ({}), mapDispatchToProps)(Pagination)
