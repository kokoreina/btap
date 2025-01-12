import express from "express"
import { likeController } from "../controllers/like.controller.js"

export const likeRouter=express.Router()
likeRouter.get(`/like-list`,likeController.likeList)

likeRouter.post(`/like`,likeController.like)
/** đoạn mã để mentor test vào raw json cho nhanh ( mấy cái khác bị trùng id do khoá chính khoá phụ )
 * {
  "user_id": 3,
  "res_id": 1,
  "date_like": "2024-01-04"
}
 */

likeRouter.delete(`/unlike`,likeController.unlike)