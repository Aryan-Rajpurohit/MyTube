import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (search.trim() !== '') {
      navigate(`/search/${search}`)
    }
  }

  return (
    <div className='flex items-center justify-between gap-3 px-3 py-3 bg-[#202020] text-white flex-wrap'>
      <h2 className='text-2xl font-bold cursor-pointer'>MyTube</h2>

      <input type='text'
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch()
        }}
        className='flex-1 min-w-0 px-4 py-2 rounded-full bg-[#121212] border border-gray-600 outline-none'
      />

      <button
        onClick={handleSearch}
        className='bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition'
      >Search</button>

      <button
        className='bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition'
      >Login</button>
    </div>
  )
}

export default Navbar
