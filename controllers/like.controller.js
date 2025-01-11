import { likeService } from "../service/like.service.js"


export const likeController={
    likeList: async(req,res,next)=>{
        const likes= await(likeService).likeList()
        res.json(likes)
    }
}