import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../actionCreators'

class Filter extends React.Component {
  handleChange = event => {
    // input-kentän arvo muuttujassa event.target.value
    event.preventDefault()
    this.props.filterChange(event.target.value)
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
export default connect(null, { filterChange })(Filter)
