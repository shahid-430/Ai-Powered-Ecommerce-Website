import React, { useContext } from 'react'
import { ShopDataContext } from '../context/shopContext'

function Card({name, price, image,id}) {

    let {currency} = useContext(ShopDataContext)

  return (
    <div className='w-[300px] max:w-[90%] h-[400px] bg-[#ffffff0a] backdrop-blur-lg rounded-lg hover:scale-[102%] flex items-center justify-start flex-col p-[10px] cursor-pointer border-[1px]  border-[#80808049]'>
        <img src={image} alt="" className='w-[100%] h-[80%] object-cover rounded-lg' />
        <div className='text-[#c3f6fa] text-[18px] py-[10px]'>{name}</div>
        <div className='text-[#c3f6fa] text-[14px]'>{currency} {price.toFixed(2)}</div>
    </div>
  )
}

export default Card