import React from 'react'

function WorkSection() {
  return (
    <section className='lg:p-24 pt-0 px-4 flex flex-wrap justify-between'>
        <CardItem title="01. Coaching for everyone"/>
        <CardItem title="02. Masterclass"/>
        <CardItem title="03. Private lessons"/>
    </section>
  )
}

const CardItem = ({title})=>{
    return (
        <a href='' className='group overflow-hidden'>
             <div className='overflow-hidden'>
                <img className='max-w-96 group-hover:scale-110 duration-500' src="https://spin.axiomthemes.com/wp-content/uploads/2023/10/post51-copyright-840x840.jpg" alt="" />
                </div>
                <div className='flex justify-between items-center'>
                    <h3 className='text-primary -translate-x-8 duration-500 group-hover:translate-x-0 text-2xl font-semibold my-5'>{title}</h3>
                <button className='border h-10 w-10 ml-4 grid place-items-center rounded-full group-hover:border-primary duration-500'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"></path></svg></button>
                </div>
                <div className='bg-gray-300 w-full h-0.5'>
                    <div className='group-hover:w-full bg-primary duration-500 w-0 h-full'></div>
                </div>
        </a>
    )
}

export default WorkSection