
import {File} from "@/models/File"; // Ensure this points to your Mongoose model
import db from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET() {
    const data = await File.find({}).sort({createdAt: -1})
     // console.log(data, 'data')
    return NextResponse.json(data)
}