import React from 'react'
import TdIcon from '../TdIcon/TdIcon'
import Image from 'next/image'
import { links } from '@/lib/resueableJson'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between rounded-3xl shadow-shadowLight bg-glass-bg px-4 lg:px-8 py-2.5'>
      <Image
        alt='logo'
        src={'/logo.png'}
        width={100}
        height={100}
        className='w-[66px] h-12'
      />
      <span className='lg:hidden'>
        <TdIcon iconName='hamburgerIcon' />
      </span>
      <ul className='hidden lg:flex'>
        {links.map(({ title, url }, index) => (
          <li key={index} className='text-white text-base font-medium  ml-28'>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
