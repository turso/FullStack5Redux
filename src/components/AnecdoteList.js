/* eslint-disable no-unused-vars */
import React from 'react'
import { connect } from 'react-redux'
import { addVote, changeNotification } from '../actionCreators'
import Anecdote from './Anecdote'

class AnecdoteList extends React.Component {
  addVote = anecdote => async e => {
    this.props.addVote(anecdote.id, anecdote)
    this.props.changeNotification(anecdote.content, 5)
  }

  render() {
    return (
      <ul>
        {this.props.visibleAnecdotes
          .sort((anecdote, mostVotes) => {
            return mostVotes.votes - anecdote.votes
          })
          .map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={this.addVote(anecdote)} />)}
      </ul>
    )
  }
}

const anecdotesToShow = (anecdotes, filter) => {
  console.log('MITÄ ANEKDOOTTEJA NÄKYY ', anecdotes)
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

export default connect(mapStateToProps, { addVote, changeNotification })(AnecdoteList)
