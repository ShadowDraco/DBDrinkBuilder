import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function PageTabs({
  setCurrentPage,
  currentPage,
  orderInformationSaved,
}) {
  const pages = ['Featured', 'Hot*', 'Iced*', 'Blended*', 'MISC.']

  return (
    <ul className='p-2 flex flex-wrap w-full text-md gap-2 font-medium text-center bg-zinc-950 text-gray-300 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
      {pages.map((page, index) => {
        return (
          <li className='me-2 flex flex-1' key={`${page} ${index}`}>
            <button
              aria-current='page'
              onClick={() => {
                orderInformationSaved ? setCurrentPage(index + 1) : ''
              }}
              className={`bg-transparent text-gray-300 font-semibold hover:text-gray-300 py-2 px-4 hover:bg-zinc-800 rounded 
                  ${currentPage == index + 1 ? 'border border-gray-300' : ''}
              `}
            >
              {page}
            </button>
          </li>
        )
      })}
      <div className='flex flex-1 justify-end'>
        <button>
          <MagnifyingGlassIcon className='size-8 text-gray-300 m-auto' />
        </button>
      </div>
    </ul>
  )
}
