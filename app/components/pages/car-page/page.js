'use client'
import React, { useState, useRef } from 'react'
import SelectColor from './SelectColor'
import SelectCar from './SelectCar'
import SideBar from './SideBar'

export default function CarPage({
  setOrderInformationSaved,
  setOrderInformation,
}) {
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedCar, setSelectedCar] = useState(null)
  const commentRef = useRef(null)
  const [comment, setComment] = useState(null)
  const [error, setError] = useState('')

  console.log(selectedColor, selectedCar, comment)

  const updateOrderInformation = () => {
    setComment(commentRef.current.value)
    setOrderInformation({
      color: selectedColor,
      car: selectedCar,
      comment: commentRef.current.Value,
    })

    if (
      selectedColor != null &&
      selectedCar != null &&
      commentRef.current.value
    ) {
      setOrderInformationSaved(true)
      setError('')
    } else {
      setError('Add all info before saving!')
    }
  }

  const colors = [
    'White',
    'Black',
    'Gray',
    'Silver',
    'Red',
    'Blue',
    'Brown',
    'Green',
    'Gold',
    'Purple',
    'Orange',
    'Custom',
  ]

  const cars = ['Car', 'SUV', 'Truck', 'Van', 'Wagon', 'Custom']

  return (
    <div className='bg-zinc-95 p-2 flex h-5/6'>
      <div className='w-full bg-zinc-950'>
        <p className='text-lg text-gray-300 p-2'>Vehicle</p>
        <SelectColor
          colors={colors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <SelectCar
          cars={cars}
          selectedCar={selectedCar}
          setSelectedCar={setSelectedCar}
        />
        <div className='p-2'>
          <p className='text-gray-400'>Comment</p>
          <input
            ref={commentRef}
            className='bg-black text-gray-300 p-2 rounded-md'
            placeholder='Enter Comment'
          />
        </div>
      </div>
      <SideBar updateOrderInformation={updateOrderInformation} error={error} />
    </div>
  )
}
