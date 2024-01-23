import {NextResponse} from 'next/server'

export async function POST(request) {
    const file = await request.file();
    const formData = new FormData();
  
    formData.append('image', file.buffer, file.originalname);
  
    const response = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${process.env.IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData
    });
  
    const data = await response.json();
  
    console.log(data)
    return NextResponse.json(data);
}