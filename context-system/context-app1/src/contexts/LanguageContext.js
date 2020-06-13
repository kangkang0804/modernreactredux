import React from 'react'
import ColorContext from './ColorContext'
// create a default value for this context object

const Context = React.createContext('english')

export class LanguageStore extends React.Component {
  state = { language: 'english', color: 'primary' }

  onLanguageChange = (language, color) => {
    this.setState({ language, color })
  }

  render () {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        <ColorContext.Provider
          value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
        >
          {this.props.children}
        </ColorContext.Provider>
      </Context.Provider>
    )
  }
}

export default Context
