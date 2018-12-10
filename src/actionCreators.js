import anecdoteService from './services/anecdotes'

export const anecdoteInitialization = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const anecdoteCreation = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const addVote = (id, anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.addVote(id, { ...anecdote, votes: anecdote.votes + 1 })
    dispatch({
      type: 'ADD_VOTE',
      data: { id, updatedAnecdote }
    })
  }
}

export const changeNotification = (notification, time) => {
  return async dispatch => {
    dispatch({
      type: 'CHANGE_NOTIFICATION',
      notification
    })
    setTimeout(() => {
      dispatch({
        type: 'CHANGE_NOTIFICATION',
        notification: null
      })
    }, time * 1000)
  }
}

export const filterChange = filter => {
  return {
    type: 'FILTER',
    filter
  }
}
