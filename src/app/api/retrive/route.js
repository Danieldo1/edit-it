
import {File} from "../../../models/File";
import mongoose from 'mongoose'
import {NextResponse} from 'next/server'


export const dynamic = 'force-dynamic'

export async function GET() {
   await mongoose.connect(process.env.MONGODB_URI)
    const data = await File.find().sort({createdAt: -1})
      console.log(data, 'data')
    return NextResponse.json(data)
}