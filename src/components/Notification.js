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

  renderNotification(notification) {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    const message = `you voted '${notification}'`

    return <div style={style}>{message}</div>
  }

  render() {
    const notification = this.context.store.getState().notification

    if (notification === null) {
      return <div />
    } else {
      return <div>{this.renderNotification(notification)}</div>
    }
  }
}

Notification.contextTypes = {
  store: PropTypes.object
}

export default Notification
