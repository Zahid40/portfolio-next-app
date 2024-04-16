"use client"
import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='flex items-center justify-between gap-4 p-4 md:p-8'>
        <div className='flex items-center gap-4'>
        <img src="/android-chrome-512x512.png" alt="logo" className='w-14' />
        <ul className='flex gap-4'>
        <li><Link href='/' >Home</Link></li>
        <li><Link href='/projects' >Projects</Link></li>
        <li><Link href='/about' >About</Link></li>
        <li><Link href='/contact' >Contact</Link></li>
        </ul>
        </div>
        <button className='bg-zsecondary px-4 py-2 text-zbg rounded-md hover:bg-gray-100'>Hire me</button>
    </nav>
  )
}

export default Navbar
