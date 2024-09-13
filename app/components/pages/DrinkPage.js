'use client'
import React, { createRef, useState } from 'react'
import PageTabs from '../layout/PageTabs'
import DrinkSizes from '../layout/DrinkSizes'

export default function DrinkPage({
  orderInformationSaved,
  currentPage,
  setCurrentPage,
  currentDrink,
  setCurrentDrink,
  drinksAndCategories,
}) {
  const [error, setError] = useState('')

  const themes = {
    lava: {
      buttonClassName: 'bg-red-600 hover:bg-red-700',
    },
    fire: {
      buttonClassName:
        'hover:from-red-600 hover:to-orange-600 ease bg-gradient-to-b from-red-600 to-orange-500',
    },
    water: {
      buttonClassName: 'bg-blue-700 hover:bg-blue-800',
    },
    ice: {
      buttonClassName:
        'hover:from-blue-600 hover:to-cyan-600 ease bg-gradient-to-br from-blue-500 to-cyan-500',
    },
    iceLake: {
      buttonClassName:
        'hover:from-cyan-300 hover:to-blue-700 ease bg-gradient-to-br from-cyan-300 to-blue-900',
    },
    winter: {
      buttonClassName:
        'hover:from-cyan-600 hover:to-gray-300 ease bg-gradient-to-br from-cyan-500 to-gray-300',
    },
    pansy: {
      buttonClassName:
        'hover:from-purple-600 hover:to-gray-300 ease bg-gradient-to-br from-purple-500 to-gray-300',
    },
    midnight: {
      buttonClassName:
        'hover:from-purple-400 hover:to-purple-800 ease bg-gradient-to-b from-purple-300 to-purple-950',
    },
    autumn: {
      buttonClassName:
        'hover:from-yellow-600 hover:to-orange-600 ease bg-gradient-to-br from-yellow-500 to-orange-500',
    },
    pumpkin: {
      buttonClassName: 'bg-orange-600 hover:bg-orange-700',
    },
    pomegranate: {
      buttonClassName:
        'hover:from-pink-600 hover:to-green-600 ease bg-gradient-to-br from-pink-500 to-green-500 from-25% to-60%',
    },
    custom: {
      buttonClassName:
        'hover:from-cyan-600 hover:via-blue-900 hover:to-purple-950 ease bg-gradient-to-br from-cyan-500 to-pink-600 via-blue-900 from-40% to-60%',
    },
  }

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
                                themes[category.theme].buttonClassName
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
