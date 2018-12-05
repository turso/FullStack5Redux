const filterReducer = (state = '', action) => {
  console.log('FILTER VALUE', action)
  switch (action.type) {
  case 'FILTER':
    return action.filter
  default:
    return state
  }
}

export default filterReducer
