import mongoose,{Schema,model,models} from "mongoose";

const UserSchema=new Schema({
    name:{
        type:String,
        require:[true,'Username is required']
    },
    email:{
        type:String,
        required:[true,'Email address not found']
    }
},{timestamps:true});

const usermodel=models.User || model("User",UserSchema);
export default usermodel;