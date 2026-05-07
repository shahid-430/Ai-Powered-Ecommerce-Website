import React from 'react'
import Title from './Title'
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
  return (
    <div className='w-[100vw] h-[100vh] md:h-[70vh] gap-[50px] flex items-center justify-start  flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] '>
        <div className='h-[8%] w-[100%] text-center mt-[70px]'>
           <Title text1={"Our"} text2={"Policy"}/>
           <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100'>
             customer-Friendly Policies-Committed to satisfaction and Safety is our top priority
           </p>
        </div>

        <div className='w-[100%] md:min-h-[50%] h-[20%] flex items-center justify-center flex-wrap lg:gap-[50px] gap-[80px] '>

            <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]'>

               <MdOutlineCurrencyExchange className=' md:w-[60px] w-[300px] h-[30px] md:h-[60px] text-[#90b9ff]'/>
                <p className='text-[20px] text-[#a5faf7] font-semibold'>Easy Returns and Refunds</p>
                <p className='text-[15px] text-blue-100 text-center '>Quick and hassle-free returns and refunds. feel free to return or exchange items within our policy period.</p>
            </div>
            <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]'>

               <TbRosetteDiscountCheckFilled className=' md:w-[60px] w-[300px] h-[30px] md:h-[60px] text-[#90b9ff]'/>
                <p className='text-[20px] text-[#a5faf7] font-semibold'>Exclusive Discounts</p>
                <p className='text-[15px] text-blue-100 text-center'>Exclusive deals and special offers for our valued customers.buy now!</p>
            </div>
            <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]'>

               <BiSupport className=' md:w-[60px] w-[300px] h-[30px] md:h-[60px] text-[#90b9ff]'/>
                <p className='text-[20px] text-[#a5faf7] font-semibold'>24/7 Customer Support</p>
                <p className='text-[15px] text-blue-100 text-center'>Round-the-clock assistance for all your queries. we are here to help!</p>
            </div>
            
    </div>

    </div>
  )
}

export default OurPolicy