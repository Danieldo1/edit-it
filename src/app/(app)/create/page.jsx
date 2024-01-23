'use client'

import React from 'react'
import { useUser } from "@clerk/nextjs"
import { useRouter } from 'next/navigation'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  select: z.string().min(1, { message: "Please select an option" }),
  file: z.string().min(1, { message: "Please select an image" }),
})

const CreatePage = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter()
  if(!isSignedIn) return router.push('/sign-up')

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      select: "",
      file: "",
    },
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
  
    <section>
      <h1 className="text-3xl font-bold ">Create</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8 border-2 p-8 rounded-xl shadow-md shadow-secondary">
      
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="file">Picture</Label>
                <FormField control={form.control} name="file" render={({ field }) => (
                  <Input id="file" type="file" className='cursor-pointer' {...field} />
                )}
                />
              </div>
              
              <FormField
          control={form.control}
          name="select"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Choose your style</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    <SelectItem value="Cinematic">Cinematic</SelectItem>
                    <SelectItem value="Disney">Disney</SelectItem>
                    <SelectItem value="Charactor">Charactor</SelectItem>
                    <SelectItem value="Digital art">Digital Art</SelectItem>
                    <SelectItem value="Photographic (Default)">Photographic</SelectItem>
                    <SelectItem value="Fantasy art">Fantasy Art</SelectItem>
                    <SelectItem value="Neonpunk">Neonpunk</SelectItem>
                    <SelectItem value="Enhance">Enhance</SelectItem>
                    <SelectItem value="Comic book">Comic Book</SelectItem>
                    <SelectItem value="Lowpoly">Lowpoly</SelectItem>
                    <SelectItem value="Line Art">Line Art</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
              Select your style that you want to be transformed into
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
  
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
            <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter your description " {...field} />
              </FormControl>
              <FormDescription>
                This is how AI will reimagine you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Create</Button>
      </form>
    </Form>

    </section>
  )
}

export default CreatePage