import React from 'react'
import PropTypes from 'prop-types'
import actionFor from '../actionCreators'

class Filter extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleChange = event => {
    // input-kentän arvo muuttujassa event.target.value
    event.preventDefault()
    this.context.store.dispatch(actionFor.filterChange(event.target.value))
  }

  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange} />
      </div>
    )
  }
}

Filter.contextTypes = {
  store: PropTypes.object
}

export default Filter
