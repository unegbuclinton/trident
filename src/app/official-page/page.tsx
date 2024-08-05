'use client'
import AboutShow from '@/components/about-show/AboutShow'
import AccordionItem from '@/components/accordion/AccordionItem'
import ApplicationForm from '@/components/application-form/ApplicationForm'
import Footer from '@/components/footer/Footer'
import FrequentQuestions from '@/components/frequent-question/FrequentQuestions'
import HeroSection from '@/components/hero/HeroSection'
import OfficialNav from '@/components/nav/OfficialNav'
import { faqData } from '@/lib/resueableJson'
import React, { useState } from 'react'

const LandingPage = () => {
  return (
    <div id='Home' className='bg-[#000C16]'>
      <OfficialNav />
      <HeroSection />
      <AboutShow />

      <div className='relative py-20'>
        <div className='bg-money-img bg-cover bg-no-repeat bg-left h-[483px] flex items-center justify-center gap-7'>
          <div className='flex justify-start flex-col h-full max-w-[380px] pt-4'>
            <p className='text-xl text-secondaryColor mb-4 lato'>
              The grand prize
            </p>
            <h2 className='text-3xl text-titleColor mb-[50px]'>
              Compete for the Ultimate Reward of $50,000
            </h2>
          </div>
          <div className='w-[460px] text-white p-8 rounded-[24px] bg-card-bg -mt-10'>
            <p className='mb-4 leading-8'>
              Unlike other shows, the prize money exists on a sliding scale.
            </p>
            <p className='mb-4 leading-8'>
              The total prize to be won starts at $40,000 with bonuses bringing
              the winnings up to $50,000. However, the prize pool available to
              the Judas group, the people selected to betray the rest of the
              collective, starts at $30,000.
            </p>
            <p className='mb-4 leading-8'>
              Every group task undertaken during the course of the show presents
              an opportunity for the Judas group to increase their own winnings
              at the expense of the $50,000 prize pool available to the
              collective by sabotaging the collective or executing parallel
              tasks different from whatever the main objective of a given
              assignment is as determined by the show host.
            </p>
          </div>
        </div>
      </div>
      <FrequentQuestions />
      <ApplicationForm />

      <Footer />
    </div>
  )
}
export default LandingPage
