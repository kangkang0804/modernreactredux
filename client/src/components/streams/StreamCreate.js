import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { streamCreate } from '../../actions'

class StreamCreate extends React.Component {
  renderError ({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = values => {
    this.props.streamCreate(values)
  }

  render () {
    return (
      <form
        className='ui form error'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'A Title is required'
  }

  if (!formValues.description) {
    errors.description = 'A Description is required'
  }

  return errors
}

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate)

export default connect(null, { streamCreate })(formWrapped)
