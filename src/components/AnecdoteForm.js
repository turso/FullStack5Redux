import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreation } from '../actionCreators'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {
  addAnecdote = async event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    this.props.anecdoteCreation(content)
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
