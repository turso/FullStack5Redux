import React from 'react'
import PropTypes from 'prop-types'

class Notification extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    const notification = this.context.store.getState()
    console.log('NOTIFICATIOn', notification)
    return <div style={style}>{notification}</div>
  }
}

Notification.contextType = {
  store: PropTypes.object
}

export default Notification
