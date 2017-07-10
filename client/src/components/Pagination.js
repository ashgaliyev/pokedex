import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'
import {
  changePageAndFetchPokemons,
  changePerPage
} from '../api/pokemon'
import './Pagination.css'

const mapDispatchToProps = dispatch => ({
  changePage: (page) => dispatch(changePageAndFetchPokemons(page)),
  changePerPage: (pp) => dispatch(changePerPage(pp))
})

const getPagesCount = (itemsCount, perPage) => {
  let pagesCount = 0
  let remain = itemsCount

  while (remain >= perPage) {
    if (remain % perPage === 0) {
      pagesCount++
    }
    remain--
  }
  return pagesCount
}

const PerPage = ({ onPerPageSelect, currentPerPage }) => {
  return (
    <div className='per-page'>
      <span>Per page:</span>
      <ul>
        {Array(3).fill().map((_, i) => {
          const perPage = (i + 1) * 10
          return (
            <li
              key={i}
              className={(currentPerPage === perPage ? 'selected' : '')}
            >
              <a
                onClick={() => onPerPageSelect(perPage)}
                key={i}>{perPage}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

class Pagination extends Component {
  constructor (props) {
    super(props)

    const currentPage = typeof props.currentPage === 'undefined' ? 1 : props.currentPage

    this.state = {
      page: currentPage
    }

    this.handleChangePage = this.handleChangePage.bind(this)
  }

  handleChangePage (p) {
    if (p !== this.state.page) {
      this.setState({ page: p })
      this.props.changePage(p)
    }
  }

  render () {
    const props = this.props

    if (!props.itemsCount || props.itemsCount <= props.perPage) {
      return null
    }

    const pagesCount = getPagesCount(props.itemsCount, props.perPage)

    const currentPage = this.state.page

    return (
      <div className='pagination-wrapper'>
        <PerPage
          onPerPageSelect={(p) => props.changePerPage(p)}
          currentPerPage={props.perPage}
        />
        <ReactPaginate
          containerClassName='pagination'
          initialPage={(currentPage - 1)}
          pageCount={pagesCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          onPageChange={(e) => this.handleChangePage(e.selected + 1)}
        />
      </div>
    )
  }
}

export default connect(() => ({}), mapDispatchToProps)(Pagination)
