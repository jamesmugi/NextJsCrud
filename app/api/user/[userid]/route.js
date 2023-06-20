import { connectDb } from "@/utils/db";
import usermodel from "@/models/User";
import { NextResponse } from "next/server";

export const GET=async(request,{params})=>{
    const {userid}=params
 
    try {
        await connectDb()
        const user=await usermodel.findById(userid)
        return new NextResponse(JSON.stringify(user),{status:200})
    } catch (error) {
        return new NextResponse("Error Fetching User data",{status:500})
    }
    
}
export const PATCH=async(request,{params})=>{
    const {name,email}=await request.json()
    const {userid}=params

    try {
        await connectDb()
        const user=await usermodel.findById(userid)
        user.name=name
        user.email=email
        await user.save()
        return new NextResponse(JSON.stringify(user),{status:200})
    } catch (error) {
        return new NextResponse("Error Fetching User data",{status:500})
    }
    
}
