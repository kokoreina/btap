import { models } from "../src/sequelize/int.sequelize.js"

export const rateService={
    rateList :async()=>{
        const rate= await models.rate_res.findAll({raw:true})
        return rate
    },
    rate :async(data)=>{
        const newRate= await models.rate_res.create(data)
        return newRate
    }
}