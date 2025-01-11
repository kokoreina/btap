import express from "express";
import { orderRouter } from "./order.router.js";
import { likeRouter } from "./like.router.js";
import { rateRouter } from "./rate.router.js";
const rootRouter=express.Router()

rootRouter.get('/',(request,respone,next)=>{
    respone.json("ok")
})
rootRouter.use('/order',orderRouter)
rootRouter.use(`/like`,likeRouter)
rootRouter.use('/rate',rateRouter)
export default rootRouter 
