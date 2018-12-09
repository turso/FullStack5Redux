/* eslint-disable no-unused-vars */
import React from 'react'
import { connect } from 'react-redux'
import { addVote, notificationChange } from '../actionCreators'
import Anecdote from './Anecdote'
import anecdoteService from '../services/anecdotes'

class AnecdoteList extends React.Component {
  addVote = anecdote => async e => {
    console.log('LISÄTÄÄN ÄÄNIÄ ID', anecdote.id)
    console.log('LISÄTÄÄN ÄÄNIÄ', anecdote)
    const updatedAnecdote = await anecdoteService.addVote(anecdote.id, { ...anecdote, votes: anecdote.votes + 1 })
    this.props.addVote(anecdote.id, anecdote.content)
    this.props.notificationChange(anecdote.content)
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

export default connect(mapStateToProps, { addVote, notificationChange })(AnecdoteList)
