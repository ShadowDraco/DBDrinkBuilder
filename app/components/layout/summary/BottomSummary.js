import React, { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, ChevronUpIcon } from '@heroicons/react/24/solid'

const total = '$0.00'
const options = [
  { id: 0, name: '1' },
  { id: 1, name: '2' },
  { id: 2, name: '3' },
  { id: 3, name: '4' },
]

export default function BottomSummary() {
  const [selectedOption, setSelectedOption] = useState(options[0])

  return (
    <div className='bottomSummary w-full bg-zinc-900 pt-2 border-t-2 border-black'>
      <div className='w-full flex justify-end'>
        <button className='btn bg-zinc-1000 text-gray-300 p-2'>
          Summary ^
        </button>
      </div>
      <div className='w-full flex'>
        <Menu as='div' className='relative inline-block text-left h-full '>
          <div className=''>
            <MenuButton className='inline-flex h-full justify-between gap-x-1.5 rounded-md bg-zinc-950  py-3 px-1 text-sm font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-600'>
              options
              <ChevronUpIcon
                aria-hidden='true'
                className='size-3 text-gray-300'
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className='absolute left-0 bottom-12 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
          >
            <div className='py-1'>
              {options.map(option => {
                return (
                  <MenuItem key={`${option.name}-${option.id}`}>
                    <div
                      onClick={() => {
                        setSelectedOption(options[option.id])
                      }}
                      className='block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-gray-800 data-[focus]:text-gray-300'
                    >
                      {option.name}
                    </div>
                  </MenuItem>
                )
              })}
            </div>
          </MenuItems>
        </Menu>
        <button class='flex-1 rounded px-5 py-2.5 overflow-hidden group bg-green-600 relative hover:bg-gradient-to-r hover:from-green-600 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300'>
          <span class='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
          <div className='flex justify-between'>
            <span class='relative font-bold'>Total:</span>
            <span class='relative font-bold'>{total}</span>
          </div>
        </button>
      </div>
    </div>
  )
}
