import React from 'react'

export default function Payment() {
  return (
    <div className='flex justify-center items-center m-30'>
        <div className='flex justify-center items-center flex-col gap-10 bg-rose-900 p-10 text-white'>
            <h1 className='text-3xl'>თვიური გადასახადი</h1>
            <h2 className='text-2xl'>₾180</h2>
            <a className='bg-white text-red-800 p-3 cursor-pointer border hover:border-white hover:bg-transparent hover:text-white hover:rounded-2xl transition-all duration-750' href='https://www.facebook.com/messages/t/582290688290066' target='_blank'>გაწევრიანდი</a>
        </div>
    </div>
  )
}