import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
function Navbar() {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 w-10' src={logo} alt="" height={50} width={50} />
            </div>
            <div className='flex  gap-4 m-8 items-center justify-center text-2xl'>
                <FaLinkedin color='white' />
                <FaGithub color='white' />
                <FaTwitter color='white' />
                <FaInstagram color='white' />
            </div>
        </nav>
    )
}

export default Navbar