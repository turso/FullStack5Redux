export const addVote = (id, content) => {
  return {
    type: 'ADD_VOTE',
    data: { id, content }
  }
}

export const anecdoteCreation = data => {
  return {
    type: 'NEW_ANECDOTE',
    data
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

export const anecdoteInitialization = data => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}
