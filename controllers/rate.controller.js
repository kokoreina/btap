import { rateService } from "../service/rate.service.js"


export const rateController={
    rateList :async(req,res,next)=>{
        const rate =await(rateService).rateList()
        res.json(rate)

    }
}