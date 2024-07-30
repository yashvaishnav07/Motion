import React from 'react'
import Header from './_components/Header'
import Heros from './_components/Heros'
import Footer from './_components/Footer'

const layout = () => {
  return (
    <div className='min-h-full flex flex-col'>
      <div className='flex flex-col justify-center items-center md:justify-start text-center flex-1 gap-y-8 px-6 pb-10'>
        <Header />
        <Heros />
      </div>
      <Footer />
    </div>
  )
}

export default layout