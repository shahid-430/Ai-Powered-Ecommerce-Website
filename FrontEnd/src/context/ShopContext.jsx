import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthDataContext } from './AuthContext'
import axios from 'axios'

export const ShopDataContext = createContext()

function ShopContext({ children }) {

    const [products, setProducts] = useState([])
    const { serverUrl } = useContext(AuthDataContext)

    const currency = "PKR"
    const delivery_Charges = 100

    const getProducts = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/product/list")
            console.log(result.data)
            setProducts(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
     }, [])


    const value = {
        products,
        currency,
        delivery_Charges,
        getProducts
    }

    return (
        <ShopDataContext.Provider value={value}>
            {children}
        </ShopDataContext.Provider>
    )
}

export default ShopContext