import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Image
        alt='footer-logo'
        src={'/logoImage.png'}
        width={100}
        height={100}
        className='mb-8'
      />
    </div>
  )
}

export default Footer
