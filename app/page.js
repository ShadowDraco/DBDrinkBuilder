'use client'
import React, { useState } from 'react'
import Summary from './components/layout/Summary'
import CurrentPage from './components/layout/CurrentPage'
import PageTabs from './components/layout/PageTabs'
import OrderInformation from './components/layout/OrderInformation'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)
  const [orderInformationSaved, setOrderInformationSaved] = useState(false)
  const [orderInformation, setOrderInformation] = useState({})

  return (
    <main className='flex min-h-screen p-5'>
      <Summary />
      <div className='w-full min-h-full'>
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
      </div>
    </main>
  )
}
