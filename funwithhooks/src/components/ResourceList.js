import React, { useContext } from 'react'
import useResources from '../utils/useResources'
import ResourceContext from '../contexts/ResourceSelector'

const ResourceList = props => {
  const resource = useContext(ResourceContext)

  const resources = useResources(resource.resource)

  return (
    <React.Fragment>
      <div>{`${resource.resource}: ${resources.length}`}</div>
      <ul>
        {resources.map(record => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default ResourceList
