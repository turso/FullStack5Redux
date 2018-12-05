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

  addVote = (id, content) => e => {
    this.context.store.dispatch(actionFor.addVote(id))
    this.context.store.dispatch(actionFor.notificationChange(content))
    console.log('ID', id)
    setTimeout(() => {
      this.context.store.dispatch(actionFor.notificationChange(null))
    }, 5000)
  }

  render() {
    const anecdotes = this.context.store.getState().anecdotes
    const filter = this.context.store.getState().filter
    const anecdotesToShow = anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))

    return (
      <ul>
        {anecdotesToShow
          .sort((anecdote, mostVotes) => {
            return mostVotes.votes - anecdote.votes
          })
          .map(anecdote => (
            <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={this.addVote(anecdote.id, anecdote.content)} />
          ))}
      </ul>
    )
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteList
