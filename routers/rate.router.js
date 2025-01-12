import express from "express"
import { rateController } from "../controllers/rate.controller.js"
export const rateRouter=express.Router()
rateRouter.get(`/rate-list`,rateController.rateList)

rateRouter.post("/rate",rateController.rate)

/** example:
 * đoạn mã để mentor test vào raw json cho nhanh ( mấy cái khác bị trùng id do khoá chính khoá phụ )
 *  {
  "user_id": 2,
  "res_id": 1,
  "amount":4,
  "date_like": "2024-01-04"
}

 */