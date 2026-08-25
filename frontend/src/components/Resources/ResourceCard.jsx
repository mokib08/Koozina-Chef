import React from 'react'
import { useSelector } from 'react-redux'

const ResourceCard = () => {
    const res = useSelector(state => state.resourceReducer.resources)
    console.log(res);
    
  return (
    <div>
      
    </div>
  )
}

export default ResourceCard
