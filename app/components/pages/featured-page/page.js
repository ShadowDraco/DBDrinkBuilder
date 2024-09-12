'use client'
import React, { createRef, useState } from 'react'
import PageTabs from '../../layout/PageTabs'
import DrinkSizes from '../../layout/DrinkSizes'

export default function FeaturedPage({
  orderInformationSaved,
  currentPage,
  setCurrentPage,
  currentDrink,
  setCurrentDrink,
}) {
  const [error, setError] = useState('')

  return (
    <div className='bg-zinc-950 p-2 min-h-screen w-full'>
      <div className=''>
        <PageTabs
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          orderInformationSaved={orderInformationSaved}
        />

        <div className='flex'>
          <div className='w-full bg-zinc-950'>
            <DrinkSizes
              currentDrink={currentDrink}
              setCurrentDrink={setCurrentDrink}
            />

            <div className='p-2'>
              <p className='text-gray-400'>Drinks Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
