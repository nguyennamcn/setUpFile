import Header from '../Components/Header/Header'
import React from 'react'
import Footer from '../Components/Footer/Footer'

export default function ({Component}) {
  return (
    <div className='min-h-screen h-full flex flex-col space-y-10'>
      <Header />
      <div className="flex-grow">
      <Component/>
      </div>
      <Footer />
    </div>
  )
}
