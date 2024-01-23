'use client'

import React, { useState } from 'react'
import { useUser } from "@clerk/nextjs"
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Progress } from "@/components/ui/progress"

import * as z from "zod"
import CreateForm from '@/components/CreateForm'

const formSchema = z.object({
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  select: z.string().min(1, { message: "Please select an option" }),
  file: z.string().min(1, { message: "Please select an image" }),
})

const CreatePage = () => {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(5)
  const [generating, setGenerating] = useState(false)

  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter()
  if(!isSignedIn) return router.push('/sign-up')

  const onSubmit = async (values) => {
    setProgress(65)
    setGenerating(true)
    const response = await fetch('api/create',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: values.description,
        style: values.select,
        file: values.file
      })
    })
    setProgress(100)
    setGenerating(false)
    
  }
  const handleUpload = async (event) => {
    setLoading(true)
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    console.log(event.target.files[0].name)
  
    const response = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData, // No headers needed, browser sets the multipart/form-data header
    });
    setLoading(false)
    setProgress(33)
    const data = await response.json();
    form.setValue('file', data.data.url)
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      select: "",
      file: "",
    },
  })
  return (
  
    <section>
      <h1 className="text-3xl font-bold ">Create</h1>
      <div className='my-5 '>
        <Progress value={progress} />
      </div>

      <CreateForm onSubmit={onSubmit} handleUpload={handleUpload} loading={loading} form={form} generating={generating}  />

    </section>
  )
}

export default CreatePage