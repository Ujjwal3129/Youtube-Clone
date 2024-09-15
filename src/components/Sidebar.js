import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Sidebar() {
  const isOpen = useSelector(store=> store.app.isMenuOpen)

  if (isOpen === false) return null 
  return (
    <div className='p-5 shadow-lg w-48'>
      <h1 className='font-bold'>
        <Link to={"/"}>Home</Link>
      </h1>
      <h1 className='font-bold'>Shorts</h1>
      <h1 className='font-bold'>Videos</h1>
      <h1 className='font-bold'>Live</h1>
      <h1 className='font-bold '>Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
