import React from 'react'

function InputBox({placeholder="", name="", required=false, icon, value, onChange, type="text"}) {
  return (
    <div className='flex max-lg:w-full relative items-center gap-4'>
        <div className='absolute text-gray-600 left-0'>
        {icon}
        </div>
        <input required={required} className="border-b-2 w-full outline-none focus:border-gray-800 duration-300 focus:placeholder:text-primary py-3 px-9" re type={type} placeholder={placeholder} onChange={onChange} value={value} name={name}  />
    </div>
  )
}

export default InputBox