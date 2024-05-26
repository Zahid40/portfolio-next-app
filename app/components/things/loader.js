import React from 'react'

function loader() {
  return (
    <div className='flex space-x-2 justify-center items-center bg-black h-screen dark:invert'>
 	<span className='sr-only'>Loading...</span>
  	<div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div className='h-8 w-8 bg-white rounded-full animate-bounce'></div>
</div>
  )
}

export default loader
