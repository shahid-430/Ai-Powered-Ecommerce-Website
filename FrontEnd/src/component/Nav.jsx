import React, { useContext, useState } from 'react'
import logo1 from '../assets/logo1.png'
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import axios from 'axios';
import { AuthDataContext } from '../context/AuthContext';



function Nav() {

  let {getCurrentUser, userData} = useContext(UserDataContext)
  let {serverUrl} = useContext(AuthDataContext)
  let [showSearch, setShowSearch] = useState(false)
  let [showProfile, setShowProfile] = useState(false)
  let navigate = useNavigate()


  const handleLogout = async () => {
    try {
     const result = await axios .get(serverUrl + "/api/auth/logout", {withCredentials:true})
     console.log(result.data)
      getCurrentUser()
      navigate("/")  
    } catch (error) {     console.log(error)
  }
}

  return (
    <div className='w-[100vw] h-[50px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black'>
      <div className='w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px]'>

        <img src={logo1} alt="" className='w-[29px]   h-[29px] object-cover' />
        <h1 className='text-[25px] font-sans text-[black]'>MyCart</h1>
       
       


     </div>
       <div className ='w-[50%] lg:w-[40%] hidden md:flex'>
        <ul className='flex items-center justify-center gap-[19px] text-[white]'>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>Home</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>Collections</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>About</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>Contact</li>
        </ul>
        </div>

        <div className='w-[30%] flex items-center justify-end gap-[20px]'>

          {!showSearch && <IoSearchCircleOutline  className='w-[35px] h-[35px] text-[#000000] cursor-pointer hover:bg-slate-500  rounded-2xl' onClick={() => setShowSearch(prev => !prev)}/>}

         {showSearch && <IoSearchCircleSharp  className='w-[35px] h-[35px] text-[#000000] cursor-pointer hover:bg-slate-500  rounded-2xl ' onClick={() => setShowSearch(prev => !prev)}/>}
          
        {!userData && < FaUserCircle className='w-[35px] h-[35px] text-[#000000] cursor-pointer hover:bg-slate-500 rounded-2xl hidden md:block' onClick={() => setShowProfile(prev => !prev)}/>}

        {userData && 
          <div className='w-[30px] h-[30px] text-[white]  bg-[#000000] cursor-pointer hover:bg-slate-500  rounded-full flex items-center justify-center cursor-pointer' onClick={() => setShowProfile(prev => !prev)}>
            {userData?.name.slice(0, 1)}
          </div>
        }

          <BsCartPlus className='w-[35px] h-[35px] text-[#000000] cursor-pointer hover:bg-slate-500  rounded-xl hidden md:block '/>
          <p className='absolute top-[3px] right-[23px] w-[18px] h-[18px] text-white rounded-full flex items-center justify-center md:flex bg-black px-[5px] py-[2px] right-[23px] hidden md:block  '>10</p>
       </div>

       { showSearch && <div className='w-[100%] h-[80px] bg-[#d8f6f9dd]  absolute top-[100%] left-0  right-0 flex items-center justify-center '>
        <input type="text" className='w-[50%] h-[60%] bg-[#233533]  rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]' placeholder='Search here' />

       </div> }


       { showProfile &&


       <div className='w-[220px] h-[150px] bg-[#000000d7]  absolute top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10 '>


          <ul className='w-[100%] h-[100%] flex items-start flex-col justify-around text-[white] text-[17px] py-[10px]'> 


            {!userData && <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick = {() =>{  navigate("/login");setShowProfile(false)}}>Login</li>}

            {userData && <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{handleLogout();setShowProfile(false)}}>Logout</li>}

            <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'>Orders</li>
            
            <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'>About</li>

          </ul>

       </div> }

       <div className='w-[100vw] h-[90px] flex items-center  justify-between px[20px] fixed  bottom-0 text-[12px]  left-0 bg-[#191818] md:hidden'>

          <button className='text-[white] flex items-center justify-center flex-col gap-[2px]'><IoMdHome className='w-[25px] h-[25px] text-[white] md:hidden'/>Home</button>
          <button className='text-[white] flex items-center justify-center flex-col gap-[2px]'><HiOutlineCollection className='w-[25px] h-[25px] text-[white] md:hidden'/>Collections</button>
        <button className='text-[white] flex items-center justify-center flex-col gap-[2px]'><MdContacts className='w-[25px] h-[25px] text-[white] md:hidden'/>Contact</button>
        <button className='text-[white] flex items-center justify-center flex-col gap-[2px]'><BsCartPlus className='w-[25px] h-[25px] text-[white] md:hidden'/>Cart</button>
        



       </div>

    </div>  
  )
}

export default Nav