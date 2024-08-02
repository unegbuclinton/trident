'use client'
import React, { useState } from 'react'
import TdIcon from '../TdIcon/TdIcon'
import Image from 'next/image'
import { links } from '@/lib/resueableJson'
import Link from 'next/link'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex items-center justify-between rounded-3xl border border-white/15 shadow-shadowLight bg-glass-bg px-4 lg:px-8 py-2.5 z-10'>
      <Link href={'/'}>
        <Image
          alt='logo'
          src={'/logo.png'}
          width={100}
          height={100}
          className='w-[66px] h-12'
        />
      </Link>
      <span onClick={() => setToggle((prev) => !prev)} className='lg:hidden'>
        <TdIcon iconName='hamburgerIcon' />
      </span>
      <ul className='hidden lg:flex'>
        {links.map(({ title, url }, index) => (
          <li key={index} className='text-white text-base font-medium  ml-28'>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>

      <div
        className={`fixed top-0 right-0 h-screen w-[256px] bg-[#070613] py-9 px-5 z-20 transition-transform duration-300 ${
          toggle ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <span
          onClick={() => setToggle((prev) => !prev)}
          className='flex justify-end'
        >
          <TdIcon iconName='cancelIcon' />
        </span>
        <ul className='mt-10'>
          {links.map(({ title, url }, index) => (
            <li
              key={index}
              className='text-white text-base font-medium  mb-6 text-right pb-6 border-b border-darkGrey'
              onClick={() => setToggle(false)}
            >
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
