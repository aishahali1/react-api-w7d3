import React from 'react'

function Navbar() {
  return (
    <> 
    <nav className='bg-blue-900 text-white uppercase flex flex-row items-center justify-center mb-2'>
        <ul className='flex flex-row items-center w-full gap-3 p-4'>
            <li>home</li>
            <li>about</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar