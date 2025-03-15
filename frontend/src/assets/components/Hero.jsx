import React from 'react'

export default function Hero() {
    return (
      <div className='bg-black h-120 flex items-center w-fit gap-20 p-15 2xl:flex-row md:flex-col md:gap-5 md:mb-10 sm:mb-50 flex-col sm:pl-10 sm:gap-0 2xl:h-200'>
        <div className='flex items-center sm:p-0 m-0'>
          <iframe className='sm:w-140 h-100 2xl:w-200 2xl:h-150' src="https://www.facebook.com/plugins/video.php?height=373&href=https%3A%2F%2Fwww.facebook.com%2Fnika1keshelava%2Fvideos%2F3502833806690446%2F&show_text=false&width=560&t=0" width="760" height="440"></iframe>
        </div>

        <div className='flex flex-col justify-center pt-10 sm:p-0'>
          <h2 className='text-white text-2xl'>გაძლიერდი ჩვენთან ერთად💪🏻</h2> <br />
          <p className='text-white'>თუ გსურს შენი შვილი გახდეს ძლიერი, ჯანსაღი და დისციპლინირებული ადამიანი, ამ ვიდეოს უყურე ბოლომდე. არ გამოტოვო ეს უნიკალური შესაძლებლობა. კონსულტაციისთვის მოგვწერეთ პირად შეტყობინებაში</p>
        </div>
      </div>
    )
}