import { links } from '@/lib/resueableJson'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Socials from '../socials/Socials'

const Footer = () => {
  return (
    <footer className='bg-dark pt-3 pb-7 px-6 lg:pt-12'>
      <div className='w-full lg:flex items-center mb-20'>
        <Image
          alt='footer-logo'
          src={'/footer-logo.png'}
          width={100}
          height={100}
          className='mb-8 w-[116px] lg:mr-20'
        />

        <ul className='lg:flex gap-10'>
          {links.map(({ title, url }, index) => (
            <li
              key={index}
              className='text-lightGrey text-base mb-4 font-medium'
            >
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
        <Socials />
      </div>
      <p className='text-base text-lightGrey text-center'>
        &copy; 2024 The Creative Trident
      </p>
    </footer>
  )
}

export default Footer
