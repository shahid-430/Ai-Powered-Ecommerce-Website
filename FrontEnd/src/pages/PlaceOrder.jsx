import React from 'react'
import Title from '../component/Title'

function PlaceOrder() {
  return (
    <div  className='w-[99vw]  w-[100%] min-h-[100vh]  p-[20px] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col md:flex-row gap-[50px] relative mt-[50px] ml-[0px]'>

      <div className='lg:w-[50%] w-[10%] h-[100%] flex items-center justify-center lg:mt-[0px] mt-[90px]'>
          <form action="" className='lg:w-[70%] w-[95%] lg:h-[70%] h-[100%]'>

            <div className='py-[10px] flex items-center justify-center'>
              <Title text1={"Delivery"} text2={"Information"}/>
            </div>
            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>

              <input type="text" placeholder='First Name' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required/>

              <input type="text" placeholder='last Name' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required/>

            </div>

            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>

              <input type="text" placeholder='Email Address' className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required/>
            </div>
            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>

              <input type="text" placeholder='Street' className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required/>
            </div>
            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>

             
              <input type="text" placeholder='City' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required/>

              <input type="text" placeholder='State' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required/>
            </div>
             <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>

             
              <input type="srting" placeholder='PinCode' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required/>

              <input type="text" placeholder='Country' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required/>
            </div>
             <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>

             
              <input type="String" placeholder='Phone' className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required/>

            </div>
            <div >

             <button title='Order Now' type='submit' className='text-[18px] hover:bg-slate-500 cursor-pointer bg-[#51808048] py-[10px]  px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] absolute lg:right-[17%] bottom-[4%] right-[35%]  border-[1px] border-[#80808049] mt-[20px] ml-[30px]' >PLACE ORDER</button>
            </div>
           </form>        
      </div>
    </div>
  )
}

export default PlaceOrder