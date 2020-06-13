import React from 'react'
// you can think of flv as axios in the sense that it will reach out to a server, get some resource, then server that data to our application to be consumed on the screen...
import flv from 'flv.js'
import { connect } from 'react-redux'
import { streamGet } from '../../actions'

class StreamShow extends React.Component {
  constructor (props) {
    super(props)

    this.videoRef = React.createRef()
  }
  componentDidMount () {
    this.props.streamGet(this.props.match.params.id)

    this.buildPlayer()
  }

  componentDidUpdate () {
    this.buildPlayer()
  }

  componentWillUnmount () {
    this.player.destroy()
  }

  buildPlayer () {
    const { id } = this.props.match.params
    if (this.player || !this.props.stream) {
      return
    }
    // create the video player..
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    })
    this.player.attachMediaElement(this.videoRef.current)
    this.player.load()
  }

  render () {
    if (!this.props.stream) {
      return <div>loading..</div>
    }
    const { title, description } = this.props.stream
    return (
      <div>
        {/* about to use a ref here */}
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { streamGet })(StreamShow)
