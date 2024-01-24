'use client'

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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import Image from "next/image"




const CreateForm = ({onSubmit, handleUpload, loading, form,generating, uploaded}) => {

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8 border-2 p-8 rounded-xl shadow-md shadow-secondary">
    
          <div className="grid w-full max-w-full md:max-w-lg  justify-center  items-center gap-1.5">
             <div className="flex items-center justify-center gap-5">
                {uploaded===true ? (
                  <div className="flex flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center ">
                                <div className="aspect-square rounded-lg ">
                                    <img src={form.watch('file')} className=" rounded-lg" />
                                </div>
                            </div>
                        </div>
                ):(
                  <div className="flex flex-col md:flex-row md:gap-5 items-center justify-center">
                      <div className="flex flex-col items-center justify-center ">
                            <div className="flex flex-col items-center justify-center md:mb-0 mb-8">
                                <div className="aspect-square rounded-lg">
                                    <Image src={'/photoupload.svg'} width={150} height={150} className=" rounded-lg" />
                                </div>
                            </div>
                        </div>

                        <div className={`flex flex-col items-center md:items-start justify-center `}> 
                        <Input id="file" type="file" onChange={handleUpload} className='cursor-pointer'  />
                        {loading===true ? (
                        <div className="flex flex-col items-center justify-center mt-2 md:mt-0  md:ml-5 ">
                          <Loader2 className="w-5 h-5 animate-spin" />
                        </div>  
                          ) : (
                        <div className={`mt-2  flex flex-col md:flex-row `}>
                        <FormDescription>
                          Select your photo of your face
                        </FormDescription>
                        </div>
                        )}
                        </div>
                    </div>

                )}
             </div>
                        
               
  

              
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
                <SelectItem value="(No style)">No Style</SelectItem>
                <SelectItem value="Cinematic">Cinematic</SelectItem>
                <SelectItem value="Disney Charactor">Disney Character</SelectItem>
                <SelectItem value="Digital Art">Digital Art</SelectItem>
                <SelectItem value="Photographic (Default)">Photographic</SelectItem>
                <SelectItem value="Fantasy art">Fantasy art</SelectItem>
                <SelectItem value="Neonpunk">Neonpunk</SelectItem>
                <SelectItem value="Enhance">Enhance</SelectItem>
                <SelectItem value="Comic book">Comic book</SelectItem>
                <SelectItem value="Lowpoly">Lowpoly</SelectItem>
                <SelectItem value="Line art">Line art</SelectItem>
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
      <Button type="submit" className="w-full">
        {generating===true ? (
            <div className="flex items-center gap-2">
            <p>Generating</p>
            <Loader2 className="w-5 h-5 animate-spin" />
            </div>
      ) : "Create" }
      </Button>

    </form>
  </Form>
  )
}

export default CreateForm