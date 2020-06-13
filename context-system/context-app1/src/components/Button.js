import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
  renderButton (color) {
    return (
      <button className={`ui button ${color}`}>
        {/* getting information out of context with Consumer component approach */}
        <LanguageContext.Consumer>
          {value => (value === 'english' ? 'Submit' : 'Jechulhada')}
        </LanguageContext.Consumer>
      </button>
    )
  }
  render () {
    return (
      <ColorContext.Consumer>
        {value => this.renderButton(value)}
      </ColorContext.Consumer>
    )
  }
}

// Button.contextType = LanguageContext

export default Button
