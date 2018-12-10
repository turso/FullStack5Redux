/* eslint-disable no-unused-vars */
import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreation } from '../actionCreators'

class AnecdoteForm extends React.Component {
  addAnecdote = async event => {
    // console.log('LISÄTÄÄN UUSI', event.target.anecdote.value)
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
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
