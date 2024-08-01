import React from 'react'

const DetailCard = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  return (
    <div className='mb-6'>
      <h2 className=' text-secondaryColor text-[30px] border-b border-borderLine pb-3.5  mb-3.5'>
        {title}
      </h2>
      <p className='text-base mb-3 text-white'>{subtitle}</p>
      {/* <p className='text-xs text-secondaryColor cursor-pointer hover:text-primaryColor'>
        Read More
      </p> */}
    </div>
  )
}

export default DetailCard
