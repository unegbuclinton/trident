import React, { useState } from 'react'
import AccordionItem from '../accordion/AccordionItem'
import { faqData } from '@/lib/resueableJson'

const FrequentQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div id='FAQ' className='max-w-[954px] mx-auto py-20 px-4'>
      <h2 className='text-titleColor mb-16 text-3xl'>
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <AccordionItem
          questionStyle='!font-normal'
          answerStyle='!font-thin'
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}

export default FrequentQuestions
