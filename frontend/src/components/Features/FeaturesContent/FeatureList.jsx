// import React, { useContext } from 'react'

import { useSelector } from 'react-redux'

const FeatureList = () => {

  const features = useSelector(state => state.featureReducer.features)

  const reranderFeatur = features.map((featur) => {
    return (
      <div className='flex items-start gap-[2em] ' key={featur.id}>
          <i className={`${featur.icon} border-2 mt-3 border-red-400 rounded-2xl text-[2.5em] p-4 text-red-500`}></i>
        <div>
          <h1 className='text-[1.7em] text-red-950 font-[600]'>{featur.title}</h1>
          <p className='text-[1.3em] font-[400] opacity-80 leading-7 mb-10 '>{featur.desc}</p>
        </div>
      </div>
    )
  })


  return (
    <div>{reranderFeatur}</div>
  )
}

export default FeatureList
