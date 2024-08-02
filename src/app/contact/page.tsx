'use client'

import Footer from '@/components/footer/Footer'
import Navbar from '@/components/nav/Navbar'
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState<{
    name: ''
    email: ''
    message: ''
  }>({ email: '', message: '', name: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <div className='cover relative bg-hero-img-sm lg:bg-nav-hero bg-cover bg-center p-4 flex flex-col justify-between pb-20 lg:px-[80px]'>
        <Navbar />
        <div className='py-36 text-white max-w-[757px] mx-auto my-0 z-10'>
          <form onSubmit={handleSubmit} className='lg:flex'>
            <h2 className='mb-14 text-[40px] lato text-secondaryColor text-nowrap pr-3'>
              You Got A <br /> Question For Us?
            </h2>
            <div className='pt-2'>
              <div className='max-w-[462px] bg-white/10 rounded-2xl p-8'>
                <input
                  type='text'
                  id='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='rounded-lg outline-none h-14 mb-6 p-4 w-full text-black'
                  placeholder='Name'
                />
                <input
                  type='email'
                  id='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='rounded-lg outline-none h-14 mb-6 p-4 w-full text-black'
                  placeholder='Email'
                />
                <textarea
                  id='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='rounded-lg h-[158px] w-full p-4 text-black resize-none'
                  placeholder='Message'
                ></textarea>
              </div>
              <div className='flex justify-end mt-6'>
                <button className='py-3.5 px-8 rounded-lg bg-secondaryColor font-medium lato text-black'>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact
