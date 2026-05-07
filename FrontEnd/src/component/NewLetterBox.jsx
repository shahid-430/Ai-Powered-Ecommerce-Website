import React from 'react'

function NewLetterBox() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }



  return (
    <div className='w-[100%] h-[60vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col gap-[20px] py-[40px] px-[20px] md:px-[50px] lg:px-[100px]'>
        <p className='text-[18px] md:text-[30px] text-[#a5faf7] font-semibold text-center'>Subscribe to our Newsletter and Get 30% Off</p>
            <p className='text-[13px] md:text-[20px] text-blue-100 text-center'>Join our mailing list to receive updates on new arrivals, exclusive offers, and upcoming sales.</p>
        <form action="" onSubmit={handleSubmit} className='w-full md:w-auto flex flex-col md:flex-row items-stretch md:items-center justify-center gap-[12px]'>
            <input type="email" placeholder="Enter your email" className='placeholder:text-[gray] bg-slate-300 w-full md:w-[350px] h-[45px] px-[15px] rounded-lg shadow-sm shadow-black text-[13px]' required />
            <button type="submit" className='text-[13px] md:text-[15px] px-[25px] md:px-[30px] py-[11px] h-[45px] md:h-auto bg-[#2e3030c9] hover:bg-slate-500 text-white border-[1px] border-[#80808049] flex items-center justify-center rounded-lg shadow-sm shadow-black cursor-pointer whitespace-nowrap'>
                Subscribe
            </button>
        </form>
    </div>
  )
}

export default NewLetterBox