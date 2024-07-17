import React from 'react'
import './nav.css'
import NavAvatar from './navFolder/NavAvatar'
import NavMessage from './navFolder/NavMessage'
import NavNotice from './navFolder/NavNotice'

function Nav() {
  return (
    <nav className='header-nav ms-auto'>
    <ul className='d-flex align-items-center'></ul>
    <NavNotice/>
    <NavMessage/>
    <NavAvatar/>
    </nav>
  )
}

export default Nav