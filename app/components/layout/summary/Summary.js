'use client'
import React from 'react'
import Author from '../Author'
import TopSummary from './TopSummary'
import BottomSummary from './BottomSummary'
import BuiltDrinks from './BuiltDrinks'

export default function Summary({
  orderInformation,
  drinks,
  currentDrink,
  setCurrentDrink,
}) {
  return (
    <div className='w-1/4 bg-zinc-950 min-h-screen border-r-2 border-black flex flex-col justify-between'>
      <div>
        <TopSummary />
        <BuiltDrinks
          drinks={drinks}
          currentDrink={currentDrink}
          setCurrentDrink={setCurrentDrink}
        />
      </div>
      <div>
        <Author />
        <BottomSummary />
      </div>
    </div>
  )
}
