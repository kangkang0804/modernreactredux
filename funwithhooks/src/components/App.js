import React from 'react'
import ResourceList from './ResourceList'
import { ResourceStore } from '../contexts/ResourceSelector'
import ResourceSelector from './ResourceSelector'

const App = props => {
  return (
    <ResourceStore>
      <div className='ui container'>
        <ResourceSelector />
        <ResourceList />
      </div>
    </ResourceStore>
  )
}

export default App
