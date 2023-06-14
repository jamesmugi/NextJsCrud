import Contact from "@/models/Contact";
import { connectDb } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET=async(request,{params})=>{
    const {contactid}=params

    try {
        await connectDb()
        const contactMessage=await Contact.findById(contactid);
        return new NextResponse(JSON.stringify(contactMessage),{status:200})
    } catch (error) {
        return new NextResponse("Message not Found",{status:500})
    }

}

