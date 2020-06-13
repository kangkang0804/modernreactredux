import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
  renderButton (i) {
    console.log(i)
    return (
      <button className={`ui button ${i.color}`}>
        {/* getting information out of context with Consumer component approach */}
        <LanguageContext.Consumer>
          {value => (value.language === 'english' ? 'Submit' : 'Jechulhada')}
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
