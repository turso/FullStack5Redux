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

export const addVote = (id, content) => {
  return {
    type: 'ADD_VOTE',
    data: { id, content }
  }
}

export const notificationChange = notification => {
  return {
    type: 'CHANGE_NOTIFICATION',
    notification
  }
}

export const filterChange = filter => {
  return {
    type: 'FILTER',
    filter
  }
}
