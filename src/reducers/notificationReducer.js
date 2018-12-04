const notificationReducer = (state = null, action) => {
  switch (action.type) {
  case 'CHANGE_NOTIFICATION':
    return action.notification
  default:
    return state
  }
}

export default notificationReducer
