import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import VideoCard from '../Components/VideoCard'

const SearchPage = () => {
    const {query} = useParams()
    const [videos,setVideos] = useState([])

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${query}&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            setVideos(data.items)
        })
    },[query])

    const containerStyle = {
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(250px,1fr))",
        gap:"20px",
        padding:"20px"
    }

  return (
    <div style={containerStyle}>
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video}/>
      ))}
    </div>
  )
}

export default SearchPage
