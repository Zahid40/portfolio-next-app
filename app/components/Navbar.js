import React from 'react'
import logo from '../static/icon/android-chrome-512x512.png'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
        <img src={logo} alt="" />
        <li><Link href='/' >Home</Link></li>
        <li><Link href='/projects' >Projects</Link></li>
        <li><Link href='/about' >About</Link></li>

    </nav>
  )
}

export default Navbar
