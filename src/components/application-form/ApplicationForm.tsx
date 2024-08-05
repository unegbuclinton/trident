import React, { useState } from 'react'
import InputField from '../input-field/InputField'
import TdIcon from '../TdIcon/TdIcon'

const ApplicationForm = () => {
  const [applyData, setApplyData] = useState<{
    name: string
    email: string
    phone: string
    video: File | null
  }>({
    name: '',
    email: '',
    phone: '',
    video: null,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setApplyData({ ...applyData, [id]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(applyData)
  }
  const handleUpload = (file?: File) => {
    if (file) setApplyData({ ...applyData, video: file })
  }

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
  }

  const handleDrop = async (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    const fileList = event.dataTransfer.files
    if (fileList.length > 0) {
      const file = fileList[0]
      setApplyData({ ...applyData, video: file })
    }
  }

  return (
    <div
      id='application'
      className='py-10 text-[#A5A6AF] max-w-[758px] mx-auto  px-4'
    >
      <div className='flex justify-start flex-col h-full max-w-[527px] pt-4 mb-16'>
        <p className='text-xl text-secondaryColor mb-4 lato'>Apply Now</p>
        <h2 className='text-3xl text-titleColor mb-[50px]'>
          Think You Have What It Takes? Join the Challenge!
        </h2>
      </div>

      <h3 className='text-2xl mb-4 font-bold'>
        Eligibility criteria and requirements
      </h3>
      <p className='text-lg mb-12'>
        Lorem ipsum dolor sit amet consectetur. Condimentum ante pellentesque
        praesent mattis ut faucibus in. Quisque nunc porta quam viverra viverra.
        Etiam netus non velit scelerisque nam sit integer eget. Quis risus
        lobortis tellus vestibulum. Sed amet bibendum pellentesque aliquet diam
        vitae tincidunt.
      </p>

      <form onSubmit={handleSubmit}>
        <InputField
          label='Name'
          id='name'
          type='text'
          onChange={handleChange}
          value={applyData.name}
        />
        <InputField
          label='Email'
          id='email'
          type='email'
          onChange={handleChange}
          value={applyData.email}
        />
        <InputField
          label='Phone'
          id='phone'
          type='number'
          onChange={handleChange}
          value={applyData.phone}
        />

        <label
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='border border-dashed border-[#6F7076] py-6 rounded-lg flex flex-col gap-2 items-center justify-center text-xs cursor-pointer'
        >
          <input
            type='file'
            onChange={(e) => handleUpload(e.target.files?.[0])}
            accept='video/*'
            className='hidden'
          />
          <TdIcon iconName='copyIcon' />
          <p className='text-[#778376]'>
            Drop your files here or{' '}
            <span className='text-[#6FF4EC]'>browse</span>
          </p>
          {applyData.video && (
            <div className='mt-2 text-xs text-[#4A4A4A]'>
              <p>
                <strong>File:</strong> {applyData.video.name}
              </p>
            </div>
          )}
        </label>
        <button className='border border-[#FBBB21] outline-none w-full flex justify-center py-4 text-[#FBBB21] mt-10 rounded-[10px]'>
          Submit application
        </button>
      </form>
    </div>
  )
}

export default ApplicationForm
