import { connectDb } from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET=async(request)=>{
    try {
       await connectDb()
       const post=await Post.find() 
       return new NextResponse(JSON.stringify(post),{status:200})
    } catch (error) {
        return new NextResponse("Post data not found",{status:500})
    }
}
export const POST=async(request)=>{
    const {title,body}=await request.json()
   
try {
    await connectDb()
    const createPost=new Post({title,body})
    await createPost.save()
    return new NextResponse(JSON.stringify(createPost),{status:201})
} catch (error) {
    return new NextResponse("Error saving post",{status:500})
}
    

}