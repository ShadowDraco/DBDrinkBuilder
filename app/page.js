'use client'
import React, { useState } from 'react'
import Summary from './components/layout/Summary'
import CurrentPage from './components/layout/CurrentPage'
import PageTabs from './components/layout/PageTabs'
import OrderInformation from './components/layout/OrderInformation'
import Link from 'next/link'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)
  const [orderInformationSaved, setOrderInformationSaved] = useState(false)
  const [orderInformation, setOrderInformation] = useState({})

  return (
    <main className='flex h-screen'>
      <Summary />
      <div className='w-full h-full bg-zinc-950'>
        <PageTabs
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          orderInformationSaved={orderInformationSaved}
        />
        <OrderInformation />
        <CurrentPage
          currentPage={currentPage}
          setOrderInformationSaved={setOrderInformationSaved}
          setOrderInformation={setOrderInformation}
        />
        <div className='bg-zinc-950 p-3'>
          <p className='mt-5 mb-2 text-center'>
            Web Services by{' '}
            <Link
              target='_blank'
              href='https://github.com/shadowdraco'
              className='text-cyan-200'
            >
              Ethan Storm
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
