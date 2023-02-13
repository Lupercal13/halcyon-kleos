import React from 'react'
import ReactPlayer from 'react-player/soundcloud'

const Music = () => {
  return (
    <div id='music' className='w-[75%] mx-auto h-auto flex flex-col justify-center items-center mt-20'>
        <h1 className='text-white text-3xl pb-8'>More Mixes:</h1>
        <div className='w-full'>
        <ReactPlayer url="https://soundcloud.com/halcyonkleos/sets/organ-house-mixes?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" width='100%' />
    </div>
    </div>
  )
}

export default Music