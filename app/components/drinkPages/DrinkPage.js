'use client'
import React, { useState } from 'react'
import PageTabs from '../layout/PageTabs'
import DrinkSizes from '../layout/DrinkSizes'
import { drinkBuilderThemes } from './drinkLib'

export default function DrinkPage({ drinksAndCategories }) {
  const [error, setError] = useState('')

  return (
    <div className='bg-zinc-950 p-2 min-h-screen w-full'>
      <div className=''>
        <PageTabs />

        <div className='flex'>
          <div className='w-full bg-zinc-950'>
            <DrinkSizes />

            <div className='p-2'>
              {drinksAndCategories.map((category, index) => {
                return (
                  <div key={`${category.name}-${index}`}>
                    <p>{category.name}</p>
                    <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-2'>
                      {category.drinks.map((drink, index) => {
                        return (
                          <div key={`${drink}-${index}`} className=''>
                            <button
                              className={`px-2 py-4 text-md font-semibold w-full h-full text-center text-white transition duration-300 rounded-lg ${
                                drinkBuilderThemes[category.theme]
                                  .buttonClassName
                              }`}
                            >
                              {drink.name}
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
