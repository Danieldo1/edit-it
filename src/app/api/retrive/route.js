
import {File} from "@/models/File"; // Ensure this points to your Mongoose model
import db from '@/lib/db';

export async function GET() {
    const data = await File.find({}).sort({createdAt: -1})
    // console.log(data, 'data')
    return Response.json(data)
}