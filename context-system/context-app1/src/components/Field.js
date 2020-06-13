import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
class Field extends React.Component {
  static contextType = LanguageContext

  render () {
    console.log(this.context)
    const text = this.context === 'english' ? 'Name' : 'Ileum'
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
