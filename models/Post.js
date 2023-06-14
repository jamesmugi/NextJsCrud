import mongoose, {Schema,model,models} from "mongoose";

const PostSchema=new Schema({
  title:{
    type:String,
    required:[true,'Title required']
  },
  body:{
    type:String,
    required:[true,'Decriptions required']
  },
},{timestamps:true})

const Post=models.Post || model("Post",PostSchema)

export default Post;