/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import actionFor from '../actionCreators'
import Anecdote from './Anecdote'

class AnecdoteList extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  addVote = id => e => {
    this.context.store.dispatch(actionFor.addVote(id))
    console.log('ID', id)
  }

  render() {
    return (
      <ul>
        {this.context.store
          .getState()
          .sort((anecdote, mostVotes) => {
            return mostVotes.votes - anecdote.votes
          })
          .map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={this.addVote(anecdote.id)} />)}
      </ul>
    )
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteList
