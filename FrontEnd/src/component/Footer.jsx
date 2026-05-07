import React from 'react'
import logo1 from '../assets/logo1.png'

function Footer() {
  return (
    <footer className='w-full bg-[#dbfcfcec] mb-[77px] md:mb-0'>
      <div className='w-full max-w-[1200px] mx-auto px-5 py-10 md:px-8 md:py-14 flex flex-col md:flex-row gap-10 md:gap-12 md:justify-between'>
        <div className='w-full md:w-1/3 flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <img
              src={logo1}
              alt='MyCart Logo'
              className='w-10 h-10 object-contain'
            />
            <p className='text-xl md:text-2xl font-semibold text-black'>MyCart</p>
          </div>
          <p className='text-sm md:text-base text-[#1e2223] leading-6 text-justify'>
            MyCart is your one-stop destination for convenient online shopping,
            offering great prices, fast service, and a reliable experience on any
            screen.
          </p>
        </div>

        <div className='w-full md:w-1/3 md:ml-16 flex flex-col gap-4'>
          <p className='text-lg md:text-xl font-semibold text-black text-center md:text-left'>
            COMPANY
          </p>
          <ul className='flex flex-col gap-2 items-center md:items-start'>
            <li className='text-sm md:text-base text-[#1e2223]'>Home</li>
            <li className='text-sm md:text-base text-[#1e2223]'>About Us</li>
            <li className='text-sm md:text-base text-[#1e2223]'>Delivery</li>
            <li className='text-sm md:text-base text-[#1e2223]'>Privacy Policy</li>
          </ul>
        </div>

        <div className='w-full md:w-1/3 flex flex-col gap-4'>
          <p className='text-lg md:text-xl font-semibold text-black text-center md:text-left'>
            GET IN TOUCH
          </p>
          <ul className='flex flex-col gap-2 items-center md:items-start'>
            <li className='text-sm md:text-base text-[#1e2223]'>+92 341 6788430</li>
            <li className='text-sm md:text-base text-[#1e2223]'>Contact@mycart.com</li>
            <li className='text-sm md:text-base text-[#1e2223]'>info@mycart.com</li>
           
          </ul>
        </div>
      </div>

      <div className='w-full bg-gradient-to-l from-[#141414] to-[#0c2025] py-4'>
        <p className='text-center text-sm md:text-base text-white'>
          Copyright © 2026 MyCart. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer