'use client'
import React, { useState } from 'react'

const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='py-36 lg:py-20 text-white max-w-[757px] mx-auto my-0'>
      <h2 className='mb-14 text-[40px] lato text-secondaryColor'>About Us</h2>
      <p className='leading-10 text-lg font-light'>
        TCT Nigeria or The Creative Trident, is a media and entertainment
        company creating new and original engaging content in reality
        Television, Variety Television, and non fiction entertainment that spans
        interests and demographics not only in Nigeria, but the emerging global
        market led by a diverse group of thinkers, creatives and fans of content
        across the board. Stay tuned as we take you through a journey of
        innovative content and entertainment like you&apos;ve never seen before
      </p>
    </div>
  )
}

export default About
