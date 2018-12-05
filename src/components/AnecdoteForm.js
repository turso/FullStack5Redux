import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreation } from '../actionCreators'

class AnecdoteForm extends React.Component {
  addAnecdote = event => {
    event.preventDefault()
    this.props.anecdoteCreation(event.target.anecdote.value)
    event.target.anecdote.value = ''
  }

  render() {
    return (
      <form onSubmit={this.addAnecdote}>
        <input name="anecdote" />
        <button>create</button>
      </form>
    )
  }
}

export default connect(null, { anecdoteCreation })(AnecdoteForm)
