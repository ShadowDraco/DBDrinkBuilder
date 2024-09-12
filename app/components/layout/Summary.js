'use client'
import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const people = [
  { id: 0, name: 'Patty Gregson' },
  { id: 1, name: 'AJ Woodruff' },
  { id: 2, name: 'Tristen Hursey' },
  { id: 3, name: 'Ethan Z' },
]

export default function Summary() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <div className='w-1/3 bg-zinc-950'>
      <div className='topSummary flex gap-3 w-full align-center p-2 bg-zinc-1000'>
        <button className='btn'>
          <Bars3Icon className='size-8 text-white-500 m-auto' />
        </button>

        <Menu as='div' className='relative inline-block text-left flex-1'>
          <div className=''>
            <MenuButton className='inline-flex w-full justify-between gap-x-1.5 rounded-md bg-zinc-950 px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-600'>
              {selectedPerson.name}
              <ChevronDownIcon
                aria-hidden='true'
                className='-mr-1 h-5 w-5 text-gray-300'
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className='absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
          >
            <div className='py-1'>
              {people.map(person => {
                return (
                  <MenuItem key={`${person.name}-${person.id}`}>
                    <div
                      onClick={() => {
                        setSelectedPerson(people[person.id])
                      }}
                      className='block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-gray-800 data-[focus]:text-gray-300'
                    >
                      {person.name}
                    </div>
                  </MenuItem>
                )
              })}
            </div>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
}
