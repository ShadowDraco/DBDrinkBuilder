'use client'
import React, { useState, useContext } from 'react'
import PageTabs from '../layout/DrinkTypes'
import { drinkBuilderThemes } from '../../DrinkLib'
import { OrderContext } from '@/app/AppContext'
import DrinkOptions from '../layout/DrinkOptions'
import ModifierTabs from './ModifierTabs'

export default function OptionsPage({ optionsAndCategories }) {
  const { drinks, setDrinks, currentDrink, setCurrentDrink } =
    useContext(OrderContext)
  const [error, setError] = useState('')
  const [currentBase, setCurrentBase] = useState(currentDrink.base)
  const [currentOptions, setCurrentOptions] = useState(currentDrink)

  const updateCurrentDrink = (drink, category, index) => {
    let newDrink = currentDrink
  }
  return (
    <div className='flex'>
      <div className='bg-zinc-950 p-2 w-full max-h-lvh overflow-y-scroll '>
        <div className=''>
          <PageTabs />

          <div className='w-full bg-zinc-950'>
            <ModifierTabs />

            <div className='p-2'>
              {optionsAndCategories.map((category, index) => {
                return (
                  <div key={`${category.name}-${index}`} >
                    <p>{category.name}</p>
                    <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-2'>
                      {category.options.map((option, index) => {
                        return (
                          <div key={`${option}-${index}`} className=''>
                            <button
                              onClick={() => {
                                updateCurrentDrink(option, category, index)
                                setCurrentBase({ name: category.name, index })
                              }}
                              className={`px-2 py-4 text-md font-semibold w-full h-full text-center text-white transition duration-300 rounded-lg ${
                                drinkBuilderThemes[category.theme]
                                  .buttonClassName
                              } ${
                                currentBase.name == category.name &&
                                currentBase.index == index
                                  ? 'border-2 border-white'
                                  : ''
                              } `}
                            >
                              {option.name}
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>

            <DrinkOptions />
          </div>
        </div>
        <div className='bg-black w-full py-10 relative bottom-0'></div>
      </div>
    </div>
  )
}
