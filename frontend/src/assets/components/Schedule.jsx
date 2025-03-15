import React from 'react'

export default function Schedule() {
  return (
    <>
        <div className='flex justify-center items-center flex-col gap-6 m-15 p-10 bg-amber-50 border-amber-950'>
            <h1 className='text-3xl'>ჯგუფები და განრიგი</h1>
            <p className='text-xl'>იქნება 2 ჯგუფი სხვადასხვა განრიგით</p>
            <ul>
                <li>ჯგუფი 1 - ორშაბათი, ოთხშაბათი, პარასკევი - 15:00---16:30</li>
                <li>ჯგუფი 2 - სამშაბათი, ხუთშაბათი, შაბათი - 15:00---16:30</li>
            </ul>
        </div>
    </>
  )
}