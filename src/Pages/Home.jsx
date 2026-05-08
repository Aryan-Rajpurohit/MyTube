import React, { useEffect, useState } from 'react'
import VideoCard from '../Components/VideoCard'

const Home = () => {
  const [videos,setVideos] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=trending&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      setVideos(data.items)
      setLoading(false)
    })
  },[])

  if(loading){
    return <h1 className='text-white text-2xl p-5'>Loading...</h1>
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 bg-[#0f0f0f] min-h-screen'>
      
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video}/>
      ))}
      
    </div>
  )
}

export default Home
