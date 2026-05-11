import React, { useContext } from 'react'
import { ShopDataContext } from '../context/shopContext'
import { useNavigate } from 'react-router-dom'

function Card({name, price, image,id}) {

    let {currency} = useContext(ShopDataContext)
    let navigate = useNavigate()

  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-[300px] h-[400px] bg-[#ffffff0a] backdrop-blur-lg rounded-lg hover:scale-[102%] flex items-center justify-start flex-col p-[10px] cursor-pointer border-[1px]  border-[#80808049]' onClick={() => navigate(`/productdetail/${id}`)}>
      
        <img title='Click For More Details About Product' src={image} alt="" className='w-[100%] h-[80%] object-cover rounded-lg' />
        <div className='text-[#c3f6fa] text-[18px] py-[10px]'>{name}</div>
        <div className='text-[#c3f6fa] text-[14px]'>  {currency} {price.toFixed(2)}</div>
    </div>
  )
}

export default Card