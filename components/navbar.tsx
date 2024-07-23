import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-indigo-900 py-2 items-center'>
        <div className="logo">
            <span className='font-bold mx-14 text-white font-sans text-lg'>iTask</span>
        </div>
        <ul className='flex gap-10 mx-9'>
            <li className='cursor-pointer hover:font-bold text-white '>Home</li>
            <li className='cursor-pointer hover:font-bold text-white'>Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
