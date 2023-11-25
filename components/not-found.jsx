import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen w-screen bg-transparent'>
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500'>404</h1>
            <h2 className='text-4xl font-semibold'>Page Not Found</h2>
            <p className='text-2xl font-semibold'>Sorry, this page does not exist</p>
        </div>
    </div>
  )
}

export default NotFound
