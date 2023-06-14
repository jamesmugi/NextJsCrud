import { connectDb } from "@/utils/db";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export const GET=async(request)=>{
    try {
        await connectDb();
        const contact=await Contact.find()
        return new NextResponse(JSON.stringify(contact),{status:200})        
    } catch (error) {
        return new NextResponse("Error in fetching Message",{status:500})
    }

}

export const POST=async(request)=>{
    const {name,email,message}=await request.json()
 console.log(name)
    try {
        await connectDb()
        const createMessage=new Contact({name,email,message})
        await createMessage.save()
        return new NextResponse(JSON.stringify(createMessage),{status:201})
    } catch (error) {
        
    }
}
export const DELETE=async(request)=>{
    const {contactid}=await request.json()
    console.log(contactid)

    try {
        await connectDb()
        const contactMessage=await Contact.deleteOne(contactid);
        return new NextResponse(JSON.stringify(contactMessage),{status:200})
    } catch (error) {
        return new NextResponse("Message not Found",{status:500})
    }

}