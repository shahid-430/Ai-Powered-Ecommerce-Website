import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopDataContext } from '../context/ShopContext'
import Card from './Card'

function latestCollection() {

    let {products} = useContext(ShopDataContext)

    let [latestProducts, setLatestProducts] = useState([])
    useEffect(() => {

        setLatestProducts(products.slice(0, 100))


    }, [products])

  return (
    <div>

        <div className='h-[8%] w-[100%] text-center md:mt-[50px]'>

            <Title text1={"Latest"} text2={"Collections"}/>
            <p className='w-[100%] mx-auto text-[13px] md:text-[20px] px-[10px] text-blue-100 text-center '>
                Step into the latest trends and discover our newest arrivals.
            </p>

            <div className='w-[100%] h-[50%]  mt-[30px] flex items-center justify-center gap-[50px] flex-wrap'>

                { 

                    latestProducts.map((item, index) =>(
                        <Card key={index} name={item.name} image={item.image1} id={item._id} price={item.price} />

                    ))
                }
            </div>

        </div>

    </div>
  )
}

export default latestCollection