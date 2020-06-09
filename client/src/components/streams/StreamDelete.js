import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MyModal from '../Modal'
import history from '../../history'
import { streamGet, streamDelete } from '../../actions'

class StreamDelete extends React.Component {
  componentDidMount () {
    this.props.streamGet(this.props.match.params.id)
  }
  renderActions () {
    const { id } = this.props.match.params
    return (
      <Fragment>
        <button
          onClick={() => this.props.streamDelete(id)}
          className='ui button negative'
        >
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </Fragment>
    )
  }

  renderContent = () => {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?'
    }

    return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`
  }

  render () {
    return (
      <MyModal
        title='Delete Stream'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { streamGet, streamDelete })(
  StreamDelete
)
