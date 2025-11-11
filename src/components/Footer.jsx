import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-400 py-4 mt-5'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-4'>
        <p className='text-sm text-center md:text-left'>
          © {new Date().getFullYear()} ProNet. All rights reserved.
        </p>

        <div className='flex space-x-4 mt-2 md:mt-0'>
          <a 
            href="#"
            className='hover:text-white transition duration-300'>
              About
          </a>
          <a 
            href="#"
            className='hover:text-white transition duration-300'>
              Contact
          </a>
          <a 
            href="#"
            className='hover:text-white transition duration-300'>
              Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer