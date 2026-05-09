import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { ShopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin2Fill } from "react-icons/ri";

function Cart() {

  const { products, currency, cartItem, updateQuantity } = useContext(ShopDataContext)
  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
      const tempData = []

      for (const productId in cartItem) {
         for (const size in cartItem[productId]) {
            if (cartItem[productId][size] > 0) {
              tempData.push({
                _id: productId,
                size,
                quantity: cartItem[productId][size],
              })
            }
         }
      }

      setCartData(tempData)
  }, [cartItem])


  return (
     <div className='w-[98vw] min-h-[100vh]  p-[20px] bg-gradient-to-l from-[#141414] to-[#0c2025] pt-[70px] pb-[30px] lg:pb-[40px]'>

        <div className='h-[8%] w-[100%] text-center mt-[20px] '> 
          <Title text1={"YOUR"} text2={"CART"}/>
        </div>

        <div className='w-[100%] h-[92%] flex  flex-wrap gap-[20px]'>

          {
            cartData.map((item, index) => {
                const productData = products.find((product) => product._id === item._id)
                if (!productData) return null

                return (
                  <div key = {index} className='w-[100%] h-[10%] border-t border-b'>

                    <div className='w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative '>
                      <img className='w-[100px] h-[100px] rounded-lg ' src={productData.image1} alt="" />
                      <div className='flex items-start justify-center flex-col gap-[10px]'>
                         <p className='md:text-[25px] text-[20px] text-[#f3f9fc] '> {productData.name}</p>
                        <div className='flex items-start justify-center flex-row gap-[10px]'>

                      <p className='md:text-[20px] text-[5px] text-[#aaf4e7]'>{currency} {productData.price}</p>

                      <p className='w-[30px] h-[30px] text-[16px] text-[white] bg-[#518080b4] rounded-md mt-[5px] flex items-center justify-center border-[1px] border-[#9ff9f9]'> {item.size}</p>

                    </div>
                </div>
                <input type="number" min={1} defaultValue={item.quantity} className='md:max-w-20 max-w-10 md:px-2 md:py-2 py-[5px] px-[10px] text-[white] text-[18px] font-semibold bg-[#18080b4] absolute md:to-[40%] top-[46%] left-[75%] md:left-[50%] border-[1px] border-[#9ff9f9] rounded-md' onChange={(e) => e.target.value === ' ' || e.target.value === '0' ? null : updateQuantity(item._id,item.size, Number(e.target.value))}
                />
                <RiDeleteBin2Fill className='text-[#9ff9f9] w-[25px] h-[25px] absolute top-[50%] md:top-[40%] md:right-[5%] right-1  hover:bg-red-600 rounded-md' onClick={() => updateQuantity(item._id,item.size, 0)} />
        </div>  
                       
</div>
  )
   })}

</div>
        
        
        
    </div>
  )
}

export default Cart