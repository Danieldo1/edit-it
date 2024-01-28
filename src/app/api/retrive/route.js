
import {File} from "../../../models/File";
import mongoose from 'mongoose'
import {NextResponse} from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
    const data = await File.find()
    mongoose.connect(process.env.MONGODB_URI)
    const headers = {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',

      };
     // console.log(data, 'data')
    return new NextResponse(JSON.stringify(data), { headers })
}