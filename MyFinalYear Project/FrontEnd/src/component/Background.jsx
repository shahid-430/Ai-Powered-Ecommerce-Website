import React from 'react'
import my4 from "../assets/my4.jpg"
import my1 from "../assets/my1.jpg"
import my2 from "../assets/my2.jpg"
import my3 from "../assets/my3.jpg"

function Background({heroCount}) {
 if(heroCount===0){
    return <img src={my4} alt=''  className='w-[100%] h-[100%] float-left  overflow-auto object-cover' />
 }
 else if(heroCount===1){
    return <img src={my1} alt=''  className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>

 }
 else if(heroCount===2){
    return <img src={my2} alt=''  className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>

 }
 else if(heroCount===3){
    return <img src={my3} alt=''  className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>

 }
}

export default Background