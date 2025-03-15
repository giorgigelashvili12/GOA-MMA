import React from 'react'
import Header from './Header'
import Footer from './Footer.jsx'
import Information from './Information.jsx'
import Hero from './Hero.jsx'

export default function Home() {
  return (
    <>
        <Header/>

        <Hero/>

        <div className='flex justify-center items-center flex-row p-40 bg-black sm:p-5'>
          <p className='bg-white p-10 rounded-lg w-200 sm:w-100 2xl:w-300'>
            <a className='flex gap-2 items-center' href="https://www.facebook.com/nika1keshelava" target='_blank'>
              <img className='w-12 rounded-full' src="/logo.png" alt="" />
              Goal-Oriented Academy • GOA - Martial Arts
            </a>
            <br/>
            „სოციუმში, რომელიც გააცალკევებს სწავლულებსა და მებრძოლებს, ფიქრი მხდალებს მოუწევთ და ბრძოლა - სულელებს“
            -თუკიდიდე, ათენელი მთავარსარდალი იმისათვის, რომ იყო კეთილი, პირველ რიგში უნდა იყო ძლიერი. უცნაურად ჟღერს, შეიძლება პირველადაც გესმის, მაგრამ მართლაც ასეა. აბა დაფიქრდი - ვისი სიმშვიდე უფრო ფასეულია? იმის, ვისაც არ შესწევს ერთი ამბის ატეხვის უნარი, ძალა და გამბედაობა, თუ იმის, ვინც ქარიშხალივითაა, ვისაც ეს ყველაფერი ძალიან მარტივად შეუძლია, მაგრამ პიროვნული ღირსებისა და ხასიათის გამო საკუთარ თავზე მაღლა დგება და თავს იკავებს, ღირსეულად ცხოვრობს, თავის ძალასა და ტემპერამენტს მხოლოდ მაშინ აჩენს, როცა ეს ბრძნული და საჭიროა. შენ რომელი გინდა ამ ორიდან, რომ იყო?
            მინდა გითხრათ, საუკეთესო გზა, რომ გახდეთ ძლიერი და ამტანი ფიზიკურადაც და სულიერადაც, ეს არის ვარჯიში, განსაკუთრებით კი ვარჯიში საბრძოლო ხელოვნებისა. ამ ჭიდილში ადამიანი სწავლობს სხეულის ფლობას...
            <a className='text-blue-800 underline' href="https://www.facebook.com/nika1keshelava/posts/122110692536731474?ref=embed_postაწ" target='_blank'> იხილეთ უფრო მეტი</a>
          </p>
        </div>

        <Information/>

        <Footer/>
    </>
  )
}
