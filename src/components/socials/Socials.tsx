import { socialLinks } from '@/lib/resueableJson'
import Link from 'next/link'
import React from 'react'
import TdIcon from '../TdIcon/TdIcon'

const Socials = () => {
  return (
    <div>
      <a className='text-white' href='mailto:hello@tcpconcept.com'>
        hello@tcpconcept.com
      </a>
      <div className='flex gap-6 mt-6'>
        {socialLinks.map(({ icon, url }, index) => (
          <Link href={url} key={index}>
            <TdIcon iconName={icon} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Socials
