import Student from "@/models/Student";
import { connectDb } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET=async(request,{params})=>{
    const {studentid}=params

    try {
        await connectDb()
        const student=await Student.findById(studentid)
        return new NextResponse(JSON.stringify(student),{status:200})
    } catch (error) {
        return new NextResponse("Student record not found",{status:500})
    }

}