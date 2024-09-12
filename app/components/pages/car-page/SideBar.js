import React from 'react'

export default function SideBar({ updateOrderInformation, error }) {
  return (
    <div className='flex flex-col justify-between p-2 bg-zinc-1000 h-full w-2/12'>
      <button
        className='bg-cyan-500 hover:bg-cyan-700 text-white font-bold text-xs py-2 px-4 border border-cyan-700 rounded'
        onClick={() => {
          updateOrderInformation()
        }}
      >
        Save Order Info
      </button>
      <p className='text-xs text-red-500'>{error}</p>
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold text-xs py-2 px-4 border border-red-700 rounded'>
        Cancel
      </button>
    </div>
  )
}
