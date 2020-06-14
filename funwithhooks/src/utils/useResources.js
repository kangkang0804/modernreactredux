import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useResources (resource) {
  const [resources, setResources] = useState([])
  // const fetchResource = async () => {
  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/${resource.resource}`
  //   )

  //   setResources(response.data)
  // }
  useEffect(() => {
    // fetchResource()
    ;(async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      )
      setResources(response.data)
    })()
  }, [resource])

  return resources
}
