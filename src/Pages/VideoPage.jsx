import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import VideoCard from '../Components/VideoCard'

const VideoPage = () => {
  const { id } = useParams()
  const [videoData, setVideoData] = useState(null)
  const [relatedVideos,setRelatedVideos] = useState([])

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setVideoData(data.items[0])
      })
  }, [id])

  useEffect(() => {
  if (!videoData) return

  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${videoData.snippet.title}&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      setRelatedVideos(data.items)
    })
}, [videoData])

  if (!videoData) return <p style={{ color: "white" }}>Loading...</p>

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px", color: "white" }}>

      <div style={{ flex: 2 }}>

        <iframe
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${id}`}
          title="video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <h2 style={{ marginTop: "15px" }}>
          {videoData.snippet.title}
        </h2>

        <p style={{ color: "gray" }}>
          {videoData.snippet.channelTitle}
        </p>
      </div>

      <div style={{ flex: 1 }}>
        {relatedVideos.length>0 && relatedVideos.map((video) => (
          <VideoCard key={video.id.videoId} video={video}/>
        ))}
      </div>
    </div>
  )
}

export default VideoPage
