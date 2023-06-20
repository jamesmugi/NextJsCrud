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

export const DELETE= async(request,{params})=>{
  const{studentid}=params
  try {
    await connectDb()
    const deleteStudent=await Student.findByIdAndDelete(studentid)
    return new NextResponse(JSON.stringify(deleteStudent),{status:200})
  } catch (error) {
    return new NextResponse("Student Record not found",{status:500})
  }
}

export const PATCH=async(request,{params})=>{
  
  const {regno,stdname,email,phone}=await request.json()
 
  try {
      await connectDb();
      const stdDetails=await Student.findById(params.studentid)
      stdDetails.regno=regno
      stdDetails.stdname=stdname
      stdDetails.email=email
      stdDetails.phone=phone
      //const addStudent=new Student({regno,stdname,email,phone})
      await stdDetails.save();
      return new NextResponse(JSON.stringify(stdDetails),{status:201})
  } catch (error) {
      new NextResponse("Student record not added",{status:500})
  }
 
}