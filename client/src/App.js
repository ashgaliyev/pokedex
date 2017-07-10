import React, { Component } from 'react'
import './App.css'
import List from './components/List'
import Search from './components/Search'
import TypesSelector from './components/TypesSelector'

const Header = () => (
  <div className="header">
    <Search />
  </div>
)

const Content = () => (
  <div className="content">
    <div className="col-left">
      <TypesSelector />
    </div>
    <div className="col-right">
      <List />
    </div>
  </div>
)

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Content/>
      </div>
    )
  }
}

export default App
