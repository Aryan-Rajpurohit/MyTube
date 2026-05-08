import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VideoPage from './Pages/VideoPage'
import SearchPage from './Pages/SearchPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <div className='flex bg-[#0f0f0f]'>
        <Sidebar />

        <div className='flex-1'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<VideoPage />} />
            <Route path="/search/:query" element={<SearchPage />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
