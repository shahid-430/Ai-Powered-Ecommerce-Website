import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthDataContext } from './AuthContext'
import axios from 'axios'

export const ShopDataContext = createContext()

function ShopContext({ children }) {

    let [products, setProducts] = useState([])
    let [search, setSearch] = useState("")
    let [showSearch, setShowSearch] = useState(false)
    let { serverUrl } = useContext(AuthDataContext)
    let { currency } = useState("PKR")
    let { delivery_Charges } = useState(100)
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
        search,
        setSearch,
        showSearch,
        setShowSearch,


        getProducts
    }

    return (
        <ShopDataContext.Provider value={value}>
            {children}
        </ShopDataContext.Provider>
    )
}

export default ShopContext