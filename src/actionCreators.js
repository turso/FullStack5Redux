const getId = () => (1000000 * Math.random()).toFixed(0)

export default {
  addVote(id) {
    return {
      type: 'ADD_VOTE',
      data: { id }
    }
  },
  anecdoteCreation(content) {
    return {
      type: 'NEW_ANECDOTE',
      data: {
        content,
        id: getId(),
        votes: 0
      }
    }
  },
  notificationChange(notification) {
    return {
      type: 'CHANGE_NOTIFICATION',
      notification
    }
  },
  filterChange(filter) {
    return {
      type: 'FILTER',
      filter
    }
  }
}
