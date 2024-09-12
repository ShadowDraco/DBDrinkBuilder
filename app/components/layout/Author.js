import React from 'react'
import Link from 'next/link'
export default function Author() {
  return (
    <div className='bg-zinc-950 p-3'>
      <p className='mt-5 mb-2 text-center text-gray-300 sm:text-sm'>
        Web Services by<br></br>
        <Link
          target='_blank'
          href='https://github.com/shadowdraco'
          className='text-cyan-200'
        >
          Ethan Storm
        </Link>
      </p>
    </div>
  )
}
