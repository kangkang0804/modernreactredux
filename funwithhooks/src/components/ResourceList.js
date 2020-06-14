import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import ResourceContext from '../contexts/ResourceSelector'

const ResourceList = props => {
  const resource = useContext(ResourceContext)

  const [resources, setResources] = useState([])
  const fetchResource = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource.resource}`
    )

    setResources(response.data)
  }

  useEffect(() => {
    fetchResource()
  }, [resource.resource])

  return (
    <React.Fragment>
      <div>{resource.resource}</div>
      <div>{resources.length}</div>
    </React.Fragment>
  )
}

export default ResourceList
