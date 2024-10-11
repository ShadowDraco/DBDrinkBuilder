'use client'
import React, { useState, useRef, useContext } from 'react'
import SelectColor from './SelectColor'
import SelectCar from './SelectCar'
import SideBar from './SideBar'
import PageTabs from '../../layout/DrinkTypes'
import OrderInformation from './OrderInformation'

import { OrderContext, PageContext } from '@/app/AppContext'

export default function CarPage() {
  const { orders, currentOrder, currentTray, setCurrentDrink, setDrinkSelected } =
    useContext(OrderContext)

  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedCar, setSelectedCar] = useState(null)
  const commentRef = useRef(null)
  const [comment, setComment] = useState(null)
  const [error, setError] = useState('')

  const updateOrderInformation = () => {
    setComment(commentRef.current.value)
    currentOrder.color = selectedColor
    currentOrder.car = selectedCar
    currentOrder.comment = commentRef.currentValue
    if (
      selectedColor != null &&
      selectedCar != null &&
      commentRef.current.value
    ) {
      currentOrder.saveInformation()
      setCurrentDrink(currentOrder.currentTray.currentDrink)
      setDrinkSelected(true)
      setError('')
    } else {
      setError('Add all info before saving!')
    }
  }

  return (
    <div className='bg-zinc-950 p-2 min-h-screen w-full'>
      <div className=''>
        <PageTabs />
        <OrderInformation />

        <div className='flex'>
          <div className='w-full bg-zinc-950'>
            <p className='text-lg text-gray-300 p-2'>Vehicle</p>
            <SelectColor
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
            <SelectCar
              selectedCar={selectedCar}
              setSelectedCar={setSelectedCar}
            />

            <div className='p-2'>
              <p className='text-gray-400'>Comment</p>
              <input
                ref={commentRef}
                className='bg-black text-gray-300 p-2 rounded-md mt-2'
                placeholder='Enter Comment'
              />
            </div>
          </div>
          <SideBar
            updateOrderInformation={updateOrderInformation}
            error={error}
          />
        </div>
      </div>
    </div>
  )
}
