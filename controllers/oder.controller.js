
import { responeSuccess } from "../common/helpers/respone.helper.js"
import oderService from "../service/oder.service.js"


export const oderController={
    oderList :async(req,res,next)=>{
        try {
            const oders = await(oderService).oderList()
            const resData=responeSuccess(oders,`Get list orders successfully`,200)
            res.status(resData.code).json(resData)
        } 
        catch (error) {
            next(error)
        }

    }
}