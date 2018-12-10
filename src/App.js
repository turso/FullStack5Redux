import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { connect } from 'react-redux'
import { anecdoteInitialization } from './actionCreators'

class App extends React.Component {
  componentDidMount = async () => {
    this.props.anecdoteInitialization()
  }

  render() {
    return (
      <div>
        <h1>Programming Anecdotes</h1>
        <Filter />
        <Notification />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    )
  }
}

export default connect(null, { anecdoteInitialization })(App)
