import { models } from "../src/sequelize/int.sequelize.js"

export const rateService={
    rateList :async()=>{
        const rate= await models.rate_res.findAll({raw:true})
        return rate
    }
}