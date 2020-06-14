import React from 'react'

const ResourceContext = React.createContext('posts') 

export class ResourceStore extends React.Component {
  state = { resource: 'posts' }

  onResourceChange = resource => {
    this.setState({ resource })
  }

  render () {
    return (
      <ResourceContext.Provider
        value={{ ...this.state, onResourceChange: this.onResourceChange }}
      >
        {this.props.children}
      </ResourceContext.Provider>
    )
  }
}

export default ResourceContext
