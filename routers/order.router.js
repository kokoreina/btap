import express from "express"
import { oderController } from "../controllers/oder.controller.js"
export const orderRouter=express.Router()
orderRouter.get(`/oders-list`,oderController.oderList)