import Student from "@/models/Student";
import { connectDb } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET=async(request)=>{

    try {
        await connectDb();
        const students=await Student.find()
        return new NextResponse(JSON.stringify(students),{status:200})
        
    } catch (error) {
        return new NextResponse("Student record not found",{status:500})
    }  
}
export const POST=async(request)=>{
    const {regno,stdname,email,phone}=await request.json()
    
    try {
        await connectDb();
        const addStudent=new Student({regno,stdname,email,phone})
        await addStudent.save();
        return new NextResponse(JSON.stringify(addStudent),{status:201})
    } catch (error) {
        new NextResponse("Student record not added",{status:500})
    }
   
}