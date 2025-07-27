import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-2xl font-medium ' >Hello <br /> <span className='text-3xl font-semibold ' >Khadim 👋</span></h1>
        <button className='bg-red-600 py-2 px-5 font-medium text-xl text-white rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header