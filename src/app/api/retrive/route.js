
import {File} from "@/models/File"; // Ensure this points to your Mongoose model
import db from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET() {
    const data = await File.find({}).sort({createdAt: -1})
    // const headers = {
    //     'Cache-Control': 'no-cache, no-store, must-revalidate',
    //     Pragma: 'no-cache',
    //     Expires: '0'
    //   };
     // console.log(data, 'data')
    return NextResponse.json(data)
}