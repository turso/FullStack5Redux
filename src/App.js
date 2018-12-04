import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

class App extends React.Component {
  render() {
    return (
      <div>
        <AnecdoteList />
        <AnecdoteForm />
        {/* <Notification /> */}
      </div>
    )
  }
}

export default App
