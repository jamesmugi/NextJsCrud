import { connectDb } from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET=async(request,{params})=>{
    const {postid}=params
    try {
        await connectDb()
        const post=await Post.findById(postid)
        return new NextResponse(JSON.stringify(post),{status:200})
    } catch (error) {
        return new NextResponse("Post data not found")
    }
}