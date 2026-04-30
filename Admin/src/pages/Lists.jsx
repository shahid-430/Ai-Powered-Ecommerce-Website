import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../component/Sidebar'
import Nav from '../component/Nav'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

// function for fetching the list of products 

function Lists() {
let [list , setList] = useState([])
let {serverUrl} = useContext(authDataContext)

const fetchlist = async () => {
  try{
    let result = await axios.get(serverUrl + "/api/product/list",)
    setList(result.data)
    console.log(result.data)
  } catch(error){
    console.log("fetchlist error:",error)
   }       
 }        
 
//  function for deleting a product from the list. 
 
const removelist = async (id) => {
  try{
    let result = await axios.post(` ${serverUrl}/api/product/remove/${id}`, {}, {withCredentials:true})  
    
    if(result.data){
      fetchlist()
    }
    else{
      alert("Failed to remove the product")}
       
  } catch(error){
    console.log("removelist error:",error)
   }  

  }
  

useEffect(()=>{
  fetchlist()
},[])
  return (

    <div className='w-[100vw] min-h-[100vh]    bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] '><Nav />
    <div className='w-[100%] h-[100%] flex items-center justify-start'> <Sidebar />

    <div className='w-[82%] h-[100%] lg:ml-[320px] md:ml-[230px] sm:ml-[100px]
       mt-[70px] flex flex-col gap-[30px] py-[30px] overflow-x-hidden ml-[100px]'>

    <div className='w-[400px] h-[50px] text-[28px] md:text-[40px] text-[white]'> All listed Products </div>


{/* Maping the list of products to display them on the page. Each product is displayed in a card-like format with an image and some details. If there are no products available, a message is shown instead. */}

      {

        list?.length > 0 ? (
          list.map((item,index)=>(
            <div key={index} className='w-[90%] md:h-[129px] h-[90px]  bg-slate-600  rounded-xl flex items-center justify-start gap-[5px] p-[10px] md:px-[30px]'>
              <img src={item.image1} className='w-[30%] md:w-[120px]  h-[90%]  rounded-lg' alt="" />

              <div className='w-[90%] h-[80%] flex flex-col items-start justify-center gap-[2px]'>



                <div className='w-[100%] md:text-[20px] text-[15px] text-[abef0f3] '> {item.name} </div>
                <div className='w-[100%] md:text-[18px] text-[14px] text-[white] '> {item.category} </div>
                <div className='w-[100%] md:text-[18px] text-[14px] text-[white] '> Rs {item.price} </div>
                
              </div>

              <div className=' w-[10%] h-[100%] bg-transparent flex items-center justify-center'>

                <span className='w-[30px] h-[30%]  flex items-center justify-center rounded-md md:hover:bg-red-300 md:hover:text-black cursor-pointer hover:bg-red-300 hover:text-black' onClick={() => removelist(item._id)}> X </span>
              </div>

            </div>
          ))


        ):
        (
          <div className='text-white text-lg'> product Not Available </div>

        )


      }
      

      </div>

    </div>
</div>
  )
}

export default Lists