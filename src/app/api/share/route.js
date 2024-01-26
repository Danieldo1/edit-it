// import {Cloudinary} from "@cloudinary/url-gen";
import { v2 as cloudinary } from "cloudinary" 
import {NextResponse} from "next/server"
import { File } from "@/models/File";
import mongoose from "mongoose";
import db from '@/lib/db';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
  })

export const POST = async (req) => {
    const { imageUrl, style, description } = await req.json();
    
    const signature = await cloudinary.uploader.upload(imageUrl, {folder: `${style}/${description.trim()}`})
    const genImg= new File({
          url: signature.url ,
          description: description,
          style: style
        })
        await genImg.save()
         console.log(genImg, 'img saved to mongo')
    return NextResponse.json(signature)
  };