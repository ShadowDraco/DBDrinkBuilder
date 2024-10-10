'use client'
import React, { useState, useContext } from 'react'
import PageTabs from '../layout/DrinkTypes'
import { drinkBuilderThemes, milkTypes } from '../../lib/DrinkLib'
import { OrderContext } from '@/app/AppContext'
import DrinkOptions from '../layout/DrinkOptions'
import ModifierTabs from './ModifierTabs'
import DrinkSizes from '../layout/DrinkSizes'

export default function OptionsPage({ optionsAndCategories }) {
  const { drinks, setDrinks, currentDrink, setCurrentDrink } =
    useContext(OrderContext)
  const [error, setError] = useState('')

  const [currentOptions, setCurrentOptions] = useState(currentDrink.options)

  const updateOptionType = (increment, option, category) => {
    let newDrink = currentDrink
    const optionType = option.optionType
    const optionName = option.name.replace(' ', '-')
    let drinkOption

    // if category only accepts one input, set all to zero before updating
    if (category.onlyOne) {
      // in the case that only one option has an increment like extra sweet vs. 1/4 sweet
      if (increment == 'none' || !newDrink.options[optionType][optionName]) {
        newDrink.options[optionType] = {}
      }
    }

    // if option is milk or lemonade or tea, set it
    if (optionType == 'milk') {
      newDrink.milk = milkTypes[option.index]
    }

    // Create selected option if it doesn't exist
    if (!newDrink.options[optionType][optionName]) {
      newDrink.options[optionType][optionName] = {
        count: 0,
        name: option.name,
      }
    }

    // set the option to update
    drinkOption = newDrink.options[optionType][optionName]
    // update based on button pressed and option type
    switch (increment) {
      case 'add':
        drinkOption.count += 1
        break
      case 'subtract':
        drinkOption.count > 0 ? (drinkOption.count -= 1) : ''
        break
      default:
        drinkOption.count == 1
          ? (drinkOption.count = 0)
          : (drinkOption.count = 1)
        break
    }
    // update state
    setCurrentDrink(newDrink)
    const newDrinks = drinks
    drinks[newDrink.index] = newDrink
    setDrinks([...newDrinks])
    setCurrentOptions({ ...newDrink.options })
  }
  return (
    <div className='flex'>
      <div className='bg-zinc-950 p-2 w-full max-h-lvh overflow-y-scroll '>
        <div className=''>
          <PageTabs />

          <div className='w-full bg-zinc-950 '>
            <DrinkSizes />
            <ModifierTabs />

            <div className='flex'>
              <div className='p-2'>
                {optionsAndCategories.map((category, index) => {
                  return (
                    <div key={`${category.name}-${index}`}>
                      <p>{category.name}</p>
                      <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-2'>
                        {category.options.map((option, index) => {
                          const optionType = option?.optionType
                          const optionName = option?.name?.replace(' ', '-')
                          const optionCount = currentOptions[optionType][
                            optionName
                          ]
                            ? currentOptions[optionType][optionName].count
                            : 0

                          return (
                            <div key={`${option}-${index}`} className=''>
                              <button
                                onClick={() => {
                                  !option.incremental &&
                                    updateOptionType('none', option, category)
                                }}
                                className={`px-2 py-2 text-md font-semibold w-full h-full text-center text-white transition duration-300 rounded-lg ${
                                  drinkBuilderThemes[category.theme]
                                    .buttonClassName
                                } ${
                                  optionCount > 0 && 'border-2 border-white'
                                } `}
                              >
                                {option.incremental && (
                                  <p
                                    className='text-xs p-0 m-0'
                                    onClick={event => {
                                      event.stopPropagation()
                                      updateOptionType('add', option, category)
                                    }}
                                  >
                                    +
                                  </p>
                                )}
                                <div className='flex justify-center gap-3'>
                                  {option.incremental && optionCount != 0 && (
                                    <p>{optionCount}</p>
                                  )}
                                  {option.name}
                                </div>
                                {option.incremental && (
                                  <p
                                    className='text-xs p-0 m-0'
                                    onClick={event => {
                                      event.stopPropagation()
                                      updateOptionType(
                                        'subtract',
                                        option,
                                        category
                                      )
                                    }}
                                  >
                                    -
                                  </p>
                                )}
                              </button>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className='flex flex-col justify-between'>
                <div className='flex flex-col'>
                  <button className='py-6 px-2 bg-cyan-800 border border-black'>
                    Convert To
                  </button>
                  <button className='py-6 px-2 bg-cyan-800 border border-black'>
                    Comment
                  </button>
                  <button className='py-6 px-2 bg-cyan-800 border border-black'>
                    Discount
                  </button>
                  <button className='py-6 px-2 bg-cyan-800 border border-black'>
                    Change Quantity
                  </button>
                  <button className='py-6 px-2 bg-cyan-800 border border-black'>
                    Detailed Info
                  </button>
                </div>
                <div className='relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group'>
                  <span className='absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4'>
                    <span className='absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white'></span>
                  </span>
                  <span className='absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0'></span>
                  <span className='relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white'>
                    Delete Item
                  </span>
                </div>
              </div>
            </div>
            <DrinkOptions />
          </div>
        </div>
      </div>
    </div>
  )
}
