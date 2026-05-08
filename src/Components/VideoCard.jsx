import React from 'react'
import { useNavigate } from 'react-router-dom'

const VideoCard = ({video}) => {
  const navigate = useNavigate()

  if(!video) return null

  return (
    <div className='cursor-pointer hover:scale-105 transition duration-300'
    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    onClick={() => navigate(`/video/${video.id.videoId}`)}>

      <img 
      src={video.snippet.thumbnails.medium.url}
      alt="video"
      className='w-full rounded-xl'
      />

    <div className='mt-3'>
      <div>
        <h4 className='text-white font-semibold text-sm'>
          {video.snippet.title.slice(0,60)}
        </h4>
        <p className='text-gray-400 text-sm mt-1'>
          {video.snippet.channelTitle}
        </p>
      </div>
    </div>
    
    </div>
  )
}

export default VideoCard