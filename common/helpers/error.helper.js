import { responeError } from "./respone.helper.js"

export const handleError=(err,req,res,next)=>{
    const resData=responeError(err.message,err.code,err.stack)
    res.status(resData.code).json(resData)
}
export class BadRequestException extends Error{
    constructor(message=`BadRequestException`){
        super(message)
        this.code=400
    }
}
new BadRequestException(`Pass không chính xác`)
export class ForbiddenException extends Error {
    constructor(messsage = `ForbiddenException`) {
      super(messsage);
      this.code=403
    }
  }