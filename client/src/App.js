import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import List from './components/List'
import TypesSelector from './components/TypesSelector'
import {
  fetchAllInfo
} from './api/pokemon'

const mapStateToProps = state => ({
  ...state
})

const Header = () => (
  <div className="header">
    <div className="col-left">
     LOGO
    </div>
    <div className="col-right">
      Search
    </div>
  </div>
)

const Content = ({ list, currentPage, perPage, totalCount, onRepeat }) => (
  <div className="content">
    <div className="col-left">
      <TypesSelector />
    </div>
    <div className="col-right">
      <List
        items={list}
        currentPage={currentPage}
        itemsCount={totalCount}
        perPage={perPage}
        onRepeat={onRepeat}
      />
    </div>
  </div>
)

class App extends Component {
  render () {
    const props = this.props.app
    return (
      <div className="App">
        <Header />
        <Content
          list={props.list}
          currentPage={props.currentPage}
          totalCount={props.totalCount}
          perPage={props.perPage}
          onRepeat={props.onRepeat}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onRepeat: () => dispatch(fetchAllInfo(dispatch))
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
