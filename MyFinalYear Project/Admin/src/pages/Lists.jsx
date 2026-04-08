import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../component/Sidebar'
import Nav from '../component/Nav'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

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

useEffect(()=>{
  fetchlist()
},[])

  return (

    <div className='w-[100vw] min-h-[100vh]    bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] '>
      <Nav />
      <div className='w-[100%] h-[100%] flex items-center justify-start'>

      <Sidebar />

      <div className='w-[82%] h-[100%] lg:ml-[320px] md:ml-[230px] sm:ml-[100px]
       mt-[70px] flex flex-col gap-[30px] py-[30px] overflow-x-hidden ml-[100px]'>

      <div className='w-[400px] h-[50px] text-[28px] md:text-[40px] text-[white]'> All listed Products </div>

      </div>

    </div>
</div>
  )
}

export default Lists