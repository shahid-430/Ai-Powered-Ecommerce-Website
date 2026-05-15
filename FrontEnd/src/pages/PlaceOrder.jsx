import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal'
import razorpay from '../assets/razorpay.png'
import { ShopDataContext } from '../context/ShopContext'
import { AuthDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function PlaceOrder() {
   let [method,setMethod] = useState('COD')
   let navigate = useNavigate()

   const { cartItem, setCartItem, getCartAmount, delivery_Charges, products } = useContext(ShopDataContext)

    const { serverUrl } = useContext(AuthDataContext)

   let [formData,setformData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    pinCode:'',
    country:'',
    phone:'',
   })

   const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setformData(data => ({...data,[name]:value}))

   }
   const onSubmitHandler = async (e)=>{
      e.preventDefault()
      try{
        let orderItems = []
        for (const productId in cartItem) {
          for (const size in cartItem[productId]) {
            if (cartItem[productId][size] > 0) {
              const itemInfo = structuredClone(products.find(product => product._id === productId))
              if (itemInfo) {
                itemInfo.size = size
                itemInfo.quantity = cartItem[productId][size]
                orderItems.push(itemInfo)
              }
            }
          }
        }
              let orderData = {
                address:formData,
                items:orderItems,
                amount:getCartAmount() + delivery_Charges 
              }

                switch(method){
                  case 'COD' :
                  const result = await axios.post(serverUrl + "/api/order/placeorder" , orderData, {withCredentials:true})
                  console.log(result.data)

                  if(result.data){
                    setCartItem({})
                    navigate("/orders")

                  }else{
                    console.log(result.data.message)
                  }

                  break;

                  default:
                  break;
                }
                

    } catch(error){
        console.log(error)

      }

    }

  return (
    <div  className='w-[99vw]  w-[100%] min-h-[100vh]  p-[20px] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col md:flex-row gap-[50px] relative mt-[50px] ml-[0px]'>

      <div className='lg:w-[50%] w-[10%] h-[100%] flex items-center justify-center lg:mt-[0px] mt-[90px]'>
          <form action="" onSubmit={onSubmitHandler} className='lg:w-[70%] w-[95%] lg:h-[70%] h-[100%]'>

            <div className='py-[10px] flex items-center justify-center'>
              <Title text1={"Delivery"} text2={"Information"}/>
            </div>
            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>

              <input type="text" placeholder='First Name' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required onChange={onChangeHandler} name='firstName' value={formData.firstName}/>

              <input type="text" placeholder='last Name' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required  onChange={onChangeHandler} name='lastName' value={formData.lastName}/>

            </div>

            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>

              <input type="text" placeholder='Email Address' className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required  onChange={onChangeHandler} name='email' value={formData.email}/>
            </div>
            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>

              <input type="text" placeholder='Street' className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required  onChange={onChangeHandler} name='street' value={formData.street}/>
            </div>
            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>

             
              <input type="text" placeholder='City' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required  onChange={onChangeHandler} name='city' value={formData.city}/>

              <input type="text" placeholder='State' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required onChange={onChangeHandler} name='state' value={formData.state}/>
            </div>
             <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>

             
              <input type="text" placeholder='PinCode' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required onChange={onChangeHandler} name='pinCode' value={formData.pinCode}/>

              <input type="text" placeholder='Country' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required onChange={onChangeHandler} name='country' value={formData.country}/>
            </div>
             <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>

             
              <input type="tel" placeholder='Phone' className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] text-[white]' required onChange={onChangeHandler} name='phone' value={formData.phone}/>

            </div>
            <div >

             <button title='Order Now' type='submit' className='text-[18px] hover:bg-slate-500 cursor-pointer bg-[#51808048] py-[10px]  px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] absolute lg:right-[17%] bottom-[4%] right-[35%]  border-[1px] border-[#80808049] mt-[20px] ml-[30px]' >PLACE ORDER</button>
            </div>
            
           </form>       
      </div>
       <div className='lg:w-[50%] w-[100%] min-h-[100%] flex items-center justify-center gap-[30px]'>
            <div className='lg:w-[70%] w-[90%] lg:h-[70%] h-[100%] flex items-center justify-center gap-[10px] flex-col'>
              
                <CartTotal/>
                
            <div className='py-[10px] flex items-center justify-center'>
              <Title text1={"PAYMENT"} text2={"METHOD"}/>
            </div>


              <div className='w-[100%] h-[30vh] flex items-start justify-center mt-[20px] lg:mt-[0px] gap-[50px] '> <button onClick={() => setMethod('razorpay')} className={`w-[150px] h-[50px] ${method === 'razorpay' ? 'border-[5px] border-blue-900 rounded-sm' : ''}`} > <img src={razorpay} alt="Razorpay" className='w-full h-full object-fill rounded-sm' /></button>
              <button onClick={()=>setMethod('COD')} className={`w-[200px] h-[50px] bg-gradient-to-t from-[#95b3f8] to-[white] text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${method === 'COD' ? 'border-[5px] border-blue-900 rounded-sm' : ''}`}>CASH ON DELIVERY</button>
            </div>


            </div>
       </div>

    </div>
  )
}

export default PlaceOrder