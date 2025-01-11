import express from "express"
import { rateController } from "../controllers/rate.controller.js"
export const rateRouter=express.Router()
rateRouter.get(`/rate-list`,rateController.rateList)