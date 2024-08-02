'use client'
import AccordionItem from '@/components/accordion/AccordionItem'
import { faqData } from '@/lib/resueableJson'
import React, { useState } from 'react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='py-36 lg:py-20 text-white max-w-[757px] mx-auto my-0 h-[900px]'>
      <h2 className='mb-14 text-[40px] lato text-secondaryColor'>
        Frequently Ask Questions
      </h2>
      {faqData.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}

export default Faq
