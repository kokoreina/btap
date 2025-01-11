import { Sequelize } from "sequelize";
import initModels from "../models/init-models.js";


const sequelize = new Sequelize("mysql://root:1234@localhost:3307/restaurant_app",{logging:false})
export const models = initModels(sequelize)

sequelize.authenticate().then(()=>{
    console.log(`kết nối với db thành công`)
}).catch(()=>{
    console.log(`Kết nối với db không thành công`)
})