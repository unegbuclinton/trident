import FlipClock from '@/components/flip-clock/FlipClock'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/nav/Navbar'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className='relative bg-hero-img-sm lg:bg-hero-img-lg bg-cover bg-center h-screen p-4 flex flex-col justify-between pb-20 lg:px-[80px] overlay'>
        <Navbar />
        <div className='absolute top-24 right-4'>
          <FlipClock />
        </div>
        <div className='z-10'>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default layout