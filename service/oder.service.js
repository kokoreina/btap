import { models } from "../src/sequelize/int.sequelize.js"


const oderService ={
    oderList : async()=>{
        const oder=await models.order.findAll({raw:true})
        return oder

    }
}
export default oderService