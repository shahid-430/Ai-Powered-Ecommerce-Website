import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logo1 from '../assets/logo1.png'
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'

function Nav() {

    let navigate=useNavigate()
    let {serverUrl}=useContext(authDataContext)
    let {getAdmin}=useContext(adminDataContext)

//for admin logout

const logOut = async () =>{
    try{
        let result= await axios.get(serverUrl + '/api/auth/logout',{withCredentials:true})
        console.log(result.data)
        getAdmin()
        navigate("/login")

    }
    catch(error){
        console.log(error)

    }
}






  return (
    <div className='w-[100vw] h-[50px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black'> 
    <div className='w-[30%] flex items-center justify-start gap[10px] cursor-pointer' onClick={()=>navigate("/")}>
         <img src={logo1} alt=""  className='w-[30px]'/>
         <h1 className='text-[25px] text-[black] font-sans'>MyCart</h1>

         

    </div>
    <button className='text-[15px] hover:border-[2px] border-[#89dae] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white ' onClick={logOut}>
        LogOut
         </button>

    </div>
  )
}

export default Nav