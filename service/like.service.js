import { models } from "../src/sequelize/int.sequelize.js"

export const likeService={
    likeList :async()=>{
        const like= await models.like_res.findAll({raw:true})
        return like
    }
}