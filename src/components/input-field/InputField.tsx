import React from 'react'

const InputField = ({
  label,
  type,
  onChange,
  value,
  id,
}: {
  label: string
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  id: string
  value: string
}) => {
  return (
    <div className='mb-8 flex flex-col'>
      <label className='text-lg mb-2 text-[#A5A6AF]'>{label}</label>
      <input
        type={type}
        onChange={onChange}
        id={id}
        value={value}
        className='outline-none border border-[#6F7076] px-4 rounded-lg h-[66px] max-w-[758px] w-full bg-[#000C16] text-[#A5A6AF]'
      />
    </div>
  )
}

export default InputField
