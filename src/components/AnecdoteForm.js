import React from 'react'
import PropTypes from 'prop-types'
import actionFor from '../actionCreators'

class AnecdoteForm extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  addAnecdote = event => {
    event.preventDefault()
    this.context.store.dispatch(actionFor.anecdoteCreation(event.target.anecdote.value))
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

AnecdoteForm.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteForm
