import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
  componentDidMount () {
    // it will take some amount of time to retrieve the additional JS code from google servers. We set a callback that will only be called once that process is complete.
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_KEY,
          // ask for email
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }
  // this is being used as a callback function. we use arrow function so the context is bound to this component
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  // sign in
  onSignInClick = () => {
    this.auth.signIn()
  }
  // sign out
  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton () {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className='ui red google button'>
          <i className='google icon' />
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className='ui red google button'>
          <i className='google icon' />
          Sign In with Google
        </button>
      )
    }
  }

  render () {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
