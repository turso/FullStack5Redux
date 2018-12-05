const getId = () => (1000000 * Math.random()).toFixed(0)

export const addVote = id => {
  return {
    type: 'ADD_VOTE',
    data: { id }
  }
}

export const anecdoteCreation = content => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: getId(),
      votes: 0
    }
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
