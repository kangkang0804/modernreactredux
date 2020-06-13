import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class LanguageSelector extends React.Component {
  static contextType = LanguageContext
  render () {
    console.log(this.context)
    return (
      <div>
        <i
          className='flag us'
          onClick={() => this.context.onLanguageChange('english', 'primary')}
        />
        <i
          className='flag kr'
          onClick={() => this.context.onLanguageChange('korean', 'red')}
        />
      </div>
    )
  }
}

export default LanguageSelector
