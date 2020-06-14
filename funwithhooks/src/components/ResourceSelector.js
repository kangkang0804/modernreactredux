import React, { useContext } from 'react'
import ResourceContext from '../contexts/ResourceSelector'

const ResourceSelector = props => {
  const resource = useContext(ResourceContext)
  const { onResourceChange } = resource
  return (
    <React.Fragment>
      <button onClick={() => onResourceChange('posts')}>Posts</button>
      <button onClick={() => onResourceChange('todos')}>Todos</button>
    </React.Fragment>
  )
}

export default ResourceSelector
