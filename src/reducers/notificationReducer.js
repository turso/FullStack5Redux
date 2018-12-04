const notificationReducer = (state = 'MOI', action) => {
  // console.log('ACTION: ', action)
  switch (action.type) {
  case 'CHANGE_NOTIFICATION':
    return action.notification
  default:
    return state
  }
}

export default notificationReducer
