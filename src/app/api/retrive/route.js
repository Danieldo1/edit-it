
import {File} from "@/models/File"; // Ensure this points to your Mongoose model
import mongoose from 'mongoose';

export async function GET() {
    mongoose.connect(process.env.MONGODB_URI)
    const data = await File.find().sort({createdAt: -1})
    // console.log(data, 'data')
    return Response.json(data)
}