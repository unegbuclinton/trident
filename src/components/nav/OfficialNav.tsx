'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import TdIcon from '../TdIcon/TdIcon'
import { officialLinks } from '@/lib/resueableJson'
import { handleScroll } from '@/lib/helpFunc'

const OfficialNav = () => {
  const [toggle, setToggle] = useState(false)

  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScrolling = () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShowNav(false)
    } else {
      setShowNav(true)
    }

    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrolling)

    return () => {
      window.removeEventListener('scroll', handleScrolling)
    }
  }, [lastScrollY])

  return (
    <nav
      className={`fixed ${
        showNav ? 'flex' : 'hidden'
      } top-0 left-0 right-0 justify-between lg:justify-start gap-[10rem] items-center lg:pl-[144px] py-7 z-10 bg-landing-img  px-6`}
    >
      <Link href={'/'}>
        <Image alt='logo' src={'/logo.png'} width={66} height={48} />
      </Link>
      <span onClick={() => setToggle((prev) => !prev)} className='lg:hidden'>
        <TdIcon iconName='hamburgerIcon' />
      </span>
      <ul className='hidden lg:flex'>
        {officialLinks.map(({ title, url }, index) => (
          <li
            onClick={() => handleScroll(title)}
            key={index}
            className='text-white text-base font-normal  ml-16 cursor-pointer'
          >
            {title}
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
          {officialLinks.map(({ title, url }, index) => (
            <li
              key={index}
              className='text-white text-base font-medium  mb-6 text-right pb-6 border-b border-darkGrey'
              onClick={() => {
                setToggle(false)
                handleScroll(title)
              }}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default OfficialNav
