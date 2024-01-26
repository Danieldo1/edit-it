import Replicate from "replicate";
import { NextResponse } from "next/server";


const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
})

export const maxDuration = 15000
export const runtime = 'edge'

export const POST = async (req) => {
  const { file ,description, style } = await req.json()

  const output = await replicate.run(
      "tencentarc/photomaker:ddfc2b08d209f9fa8c1eca692712918bd449f695dabb4a958da31802a9570fe4",
      {
        input: {
          input_image: file,
          prompt: `${description} img`,
          style_name: style,
          negative_prompt: ' nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry',
          num_steps:16,
          num_outputs:1,
          // disable_safety_checker: true
        }
      }
    );

  return NextResponse.json(output[0])
}