import oderService from "../service/oder.service.js"


export const oderController={
    oderList :async(req,res,next)=>{
        const oders = await(oderService).oderList()
        res.json(oders)
    }
}