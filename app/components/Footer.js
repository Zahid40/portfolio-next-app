"use client"
import React from 'react'
import Link from 'next/link'
import BannerScroll from './things/BannerScroll'
import { FaInstagram , FaFacebook , FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


function Footer() {
  return (
    <>
        <BannerScroll/>
    <div>
    <FaInstagram />
    <FaFacebook/>
    <BiLogoGmail />
    </div>
      <div className='flex justify-between'>
        <small className='text-sm'>&copy; 2024 | Zahid | All Rights Reserved</small>
        <small>
            <Link href='/'>Privacy Policy</Link> | 
             <Link href='/'> Privacy Policy</Link>
        </small>
      </div>
    </>
  )
}

export default Footer
