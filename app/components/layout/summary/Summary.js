import React from 'react'
import Author from '../Author'
import TopSummary from './TopSummary'
import BottomSummary from './BottomSummary'
import BuiltDrinks from './BuiltDrinks'

export default function Summary() {
  return (
    <div className='w-1/4 bg-zinc-950 min-h-screen border-r-2 border-black flex flex-col gap-3 justify-between'>
      <div className='flex-1 mb-3'>
        <TopSummary />
        <BuiltDrinks />
      </div>
      <div className='mt-3'>
        <Author />
        <BottomSummary />
      </div>
    </div>
  )
}
