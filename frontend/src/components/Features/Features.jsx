import React from 'react'
import FeatureVisual from './FeatureVisual/FeatureVisual'
import FeatureContent from './FeaturesContent/FeatureContent'

const Features = () => {
  return (
    <div className=' flex items-start py-[4rem]'>
        <FeatureVisual />
        <FeatureContent />
    </div>
  )
}

export default Features
