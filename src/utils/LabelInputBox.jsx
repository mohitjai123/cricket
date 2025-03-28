import React from 'react'

function LabelInputBox({ disabled=false, placeholder = "", option = null, name = "", required = true, label, value, onChange, type = "text" }) {
    return (
        <div className='relative w-full'>
            <div className='text-gray-600'>
                <label htmlFor={name}>{label}</label>
            </div>
            {option ?
                <select disabled={disabled} required={required} className="border-b-2 w-full outline-none focus:border-gray-800 duration-300 disabled:shadow disabled:bg-gray-100 disabled:px-4 disabled:rounded-lg focus:placeholder:text-primary py-2" onChange={onChange} value={value} name={name}  >
                    <option value="">{placeholder}</option>
                    {option?.map((item, idx) =>
                        <option key={idx} value={item}>{item}</option>
                    )}
                </select> :
                <input disabled={disabled} required={required} accept='image/*' className="border-b-2 w-full outline-none focus:border-gray-800 disabled:shadow disabled:bg-gray-100 disabled:px-4 disabled:rounded-lg duration-300 focus:placeholder:text-primary py-2" placeholder={placeholder} type={type} onChange={onChange} value={value} name={name} />

            }

        </div>
    )
}

export default LabelInputBox