/* eslint-disable no-unused-vars */
import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreation } from '../actionCreators'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {
  addAnecdote = async event => {
    // console.log('LISÄTÄÄN UUSI', event.target.anecdote.value)
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    this.props.anecdoteCreation(newAnecdote)
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
