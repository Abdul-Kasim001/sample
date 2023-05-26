import React from 'react'

export default function Notes({notes}) {
  return (
    <div className='bg-white'>
      <p className='font-bold text-lg text-amber-900 text-center'>{notes}</p>
    </div>
  )
}
