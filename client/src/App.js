import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import List from './components/List'

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

const Content = ({ list, currentPage, totalCount }) => (
  <div className="content">
    <div className="col-left">
    </div>
    <div className="col-right">
      <List
        items={list}
        currentPage={currentPage}
        itemsCount={totalCount}
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
         />
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(App)
