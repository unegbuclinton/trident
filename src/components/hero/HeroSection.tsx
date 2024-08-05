import { handleScroll } from '@/lib/helpFunc'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative bg-landing-img bg-cover bg-center h-screen mt-24 px-4'>
      <h2 className='pt-14 font-medium lato text-[#91C7F980]/50 text-center text-2xl mb-[101px]'>
        BETRAY ALL OTHERS
      </h2>
      <div className='relative'>
        <h2 className='text-secondaryColor text-center lg:text-left text-[40px] lato lg:text-[64px] font-semibold max-w-[406px] lg:ml-[144px] mb-20 lg:mb-0'>
          The Ultimate Test of Loyalty
        </h2>

        <div className='lg:absolute top-0 right-36'>
          <div className='relative w-fit'>
            <Image
              alt='floating-img'
              src={'/people.png'}
              width={473}
              height={342}
            />
            <Image
              alt='floating-img'
              src={'/betray.png'}
              width={265}
              height={163}
              className='absolute -top-[80px] right-2 w-[265px]'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-28'>
        <button
          onClick={() => handleScroll('application')}
          className='outline-none py-4 px-6 border border-secondaryColor bg-[#1A100A] text-secondaryColor rounded-lg '
        >
          Join the challenge
        </button>
      </div>
    </div>
  )
}

export default HeroSection
