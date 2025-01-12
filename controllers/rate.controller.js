import { responeSuccess } from "../common/helpers/respone.helper.js"
import { rateService } from "../service/rate.service.js"


export const rateController={
    rateList :async(req,res,next)=>{
        try {
            const rate =await(rateService).rateList()
            const resData=responeSuccess(rate,`Get list rates successfully`,200)
            res.status(resData.code).json(resData)            
        } catch (error) {
            next(error)
        }

    },
    rate : async(req,res,next)=>{
        try {
            const newRate =await(rateService).rate(req.body)
            const resData=responeSuccess(newRate,`Post  rates successfully`,201)
            res.status(resData.code).json(resData)
        } catch (error) {
            next(error)
        }

    }
}