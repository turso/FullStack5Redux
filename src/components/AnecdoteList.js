/* eslint-disable no-unused-vars */
import React from 'react'
import { connect } from 'react-redux'
import { addVote, notificationChange } from '../actionCreators'
import Anecdote from './Anecdote'

class AnecdoteList extends React.Component {
  addVote = (id, content) => e => {
    this.props.addVote(id)
    this.props.notificationChange(content)
    console.log('ID', id)
    setTimeout(() => {
      this.props.notificationChange(null)
    }, 5000)
  }

  render() {
    return (
      <ul>
        {this.props.visibleAnecdotes
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

const anecdotesToShow = (anecdotes, filter) => {
  return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase())).sort((anecdote, mostVotes) => {
    return mostVotes.votes - anecdote.votes
  })
}

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

export default connect(mapStateToProps, { addVote, notificationChange })(AnecdoteList)
