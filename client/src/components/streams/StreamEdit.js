import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { streamGet, streamEdit } from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
  componentDidMount () {
    console.log(this.props)
    this.props.streamGet(this.props.match.params.id)
  }

  onSubmit = formValues => {
    this.props.streamEdit(this.props.match.params.id, formValues)
  }

  render () {
    if (!this.props.stream) {
      return <div>loading...</div>
    }
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          submitForm={this.onSubmit}
          initialValues={_.pick(this.props.stream, ['title', 'description'])}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { streamGet, streamEdit })(StreamEdit)
