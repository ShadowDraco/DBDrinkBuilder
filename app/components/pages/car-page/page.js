'use client'
import React from 'react'
import SelectColor from './SelectColor'
import SelectCar from './SelectCar'
import SideBar from './SideBar'

export default function CarPage({
  setOrderInformationSaved,
  setOrderInformation,
}) {
  return (
    <div className='bg-zinc-95 p-2 flex h-5/6'>
      <div className='w-full bg-zinc-950'>
        <p className='text-lg text-gray-300 p-2'>Vehicle</p>
        <SelectColor />
        <SelectCar />
      </div>
      <SideBar setOrderInformationSaved={setOrderInformationSaved} />
    </div>
  )
}
