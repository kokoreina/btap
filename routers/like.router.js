import express from "express"
import { likeController } from "../controllers/like.controller.js"

export const likeRouter=express.Router()
likeRouter.get(`/like-list`,likeController.likeList)

likeRouter.post(`/like-body`)