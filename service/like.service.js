import { models } from "../src/sequelize/int.sequelize.js"

export const likeService={
    likeList :async()=>{
        const like= await models.like_res.findAll({raw:true})
        return like
    },
    like :async(data)=>{
        const newLike =await models.like_res.create(data)
        return newLike
    },
    unlike :async(data)=>{
        const result = await models.like_res.destroy({
            where: {
              user_id: data.user_id,
              res_id: data.res_id,
            },
          });
          
        return result
    }

}