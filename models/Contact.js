import mongoose,{Schema,model,models} from "mongoose";

const ContactSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        MaxLength:[50,"Max Length is 50 char"],
        MinLength:[4,"Min Length is 4 char"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        MaxLength:[50,"Max Length is 50 char"],
        MinLength:[4,"Min Length is 4 char"]
    },
    message:{
        type:String,
        required:[true, "Message is required"],
        MaxLength:[500,"Max Length is 500 char"],
        MinLength:[4,"Min Length is 4 char"]
    }
},{timeseries:true})

const Contact=models.Contact || model("Contact",ContactSchema)
export default Contact;