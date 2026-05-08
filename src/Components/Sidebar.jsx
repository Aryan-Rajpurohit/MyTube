import React from 'react'

const Sidebar = () => {

  return (
    <div className='w-56 min-h-screen bg-[#181818] text-white p-4 hidden md:block'>

      <div className='space-y-4'>
        
        <p className='hover:bg-[#2c2c2c] p-2 rounded-lg cursor-pointer transition'>Home</p>
        
        <p className='hover:bg-[#2c2c2c] p-2 rounded-lg cursor-pointer transition'>Trending</p>
        
        <p className='hover:bg-[#2c2c2c] p-2 rounded-lg cursor-pointer transition'>Subscription</p>

        <p className='hover:bg-[#2c2c2c] p-2 rounded-lg cursor-pointer transition'>Library</p>
      </div>
    </div>
  )
}

export default Sidebar
