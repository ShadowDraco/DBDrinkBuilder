import React from 'react'
import SelectColor from './SelectColor'
import SelectCar from './SelectCar'

export default function CarPage() {
  return (
    <div className='bg-zinc-95 p-2'>
      <p className='text-lg text-gray-300'>Vehicle</p>
      <SelectColor />
      <SelectCar />
    </div>
  )
}
