import { responeSuccess } from "../common/helpers/respone.helper.js"
import { likeService } from "../service/like.service.js"


export const likeController={
    likeList: async(req,res,next)=>{
        try {
            const likes= await(likeService).likeList()
              const resData=responeSuccess(likes,`Get list like successfully`,200)
              res.status(resData.code).json(resData)
        } catch (error) {
            next(error)
        }
    },
    like :async(req,res,next)=>{
        try {
            const newLike= await likeService.like(req.body)
            const resData=responeSuccess(newLike,`post  like successfully`,201)
            res.status(resData.code).json(resData)
        } 
        catch (error) {
            next(error)
        }

    },
    unlike: async (req, res) => {
        try {
          const { user_id, res_id } = req.body;
      
          if (!user_id || !res_id) {
            return res.status(400).json({ message: 'Thiếu user_id hoặc res_id' });
          }
      
          const result = await likeService.unlike({ user_id, res_id });
      
          if (result === 0) {
            return res.status(404).json({ message: 'Không tìm thấy bản ghi để xóa' });
          }
      
          res.status(200).json({ message: 'Xóa thành công!' });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },
}