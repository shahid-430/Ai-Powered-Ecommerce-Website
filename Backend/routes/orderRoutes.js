import express from 'express'
import isAuth from '../middleware/isAuth.js'
import { PlaceOrder } from '../controller/orderController.js'

const orderRoutes = express.Router()

orderRoutes.post("/placeorder", isAuth, PlaceOrder)

export default orderRoutes