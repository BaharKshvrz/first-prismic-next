import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between p-7 h-16 sticky top-0 z-50 bg-white">
        <Navbar/>
    </div>
  )
}

export default Header
