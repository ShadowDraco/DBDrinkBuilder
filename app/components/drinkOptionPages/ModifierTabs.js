import React from 'react'

export default function ModifierTabs() {
  return (
    <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-2'>
      <button className='btn p-5 bg-gray-500 rounded-md'>50-50 bar</button>
      <button className='btn bg-gray-500 rounded-md'>Aftershock</button>
      <button className='btn bg-gray-500 rounded-md'>Almond Bar</button>
      <button className='btn bg-gray-500 rounded-md'>Quick Builds</button>
      <div className='flex gap-5'>
        <button className='btn bg-gray-800 w-full rounded-full'>Lite</button>
        <button className='btn bg-gray-800 w-full rounded-full'>Extra</button>
      </div>
    </div>
  )
}
