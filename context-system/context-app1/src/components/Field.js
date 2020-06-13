import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
class Field extends React.Component {
  static contextType = LanguageContext

  render () {
    const text = this.context.language === 'english' ? 'Name' : 'Ileum'
    return (
      <div className='field'>
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

// Field.contextType = LanguageContext

export default Field
