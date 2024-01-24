import Replicate from "replicate";
import { NextResponse } from "next/server";
import { File } from "@/models/File";
import mongoose from "mongoose";
import {Cloudinary} from "@cloudinary/url-gen";
import { v2 as cloudinary } from "cloudinary"

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
})
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
})

export const POST = async (req) => {
  await mongoose.connect(process.env.MONGODB_URI)
  
  const { file ,description, style } = await req.json()

  const output = await replicate.run(
      "tencentarc/photomaker:ddfc2b08d209f9fa8c1eca692712918bd449f695dabb4a958da31802a9570fe4",
      {
        input: {
          input_image: file,
          prompt: `${description} img`,
          style_name: style,
          negative_prompt: ' nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry'
        }
      }
    );

    const signature = await cloudinary.uploader.upload(output[0], {folder: `${style}/${description}`})
      const genImg= new File({
        url: signature.url ,
        description: description,
        style: style
      })
      await genImg.save()
      // console.log(genImg, 'genImg')

      
  return NextResponse.json(output)
}