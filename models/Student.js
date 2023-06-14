import mongoose,{Schema,model,models} from "mongoose";

const StudentSchema=new Schema({
    regno:{
        type:String,
        unique:true,
        required:[true, "Registration numbers required"]
    },
    stdname:{
        type:String,
        required:[true,'Student Name required']
    },
    email:{
        type:String,
        required:[true,"Email required"]
    },
    phone:{
        type:String,
        required:[true,"Phone Number Needed"]
    }
},{timestamps:true})

const Student=models.Student || model("Student",StudentSchema)
export default Student;