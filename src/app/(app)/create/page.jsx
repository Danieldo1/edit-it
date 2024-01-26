"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

import * as z from "zod";
import CreateForm from "@/components/CreateForm";
import { Label } from "@/components/ui/label";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
  select: z.string().min(1, { message: "Please select an option" }),
  file: z.string().min(1, { message: "Please select an image" }),
});

const CreatePage = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(5);
  const [generating, setGenerating] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const [showDialog, setShowDialog] = useState(false);
  const [imageInfo, setImageInfo] = useState(null);
  const [closing , setClosing] = useState(false)

  const { isSignedIn } = useUser();
  const router = useRouter();
  // if(!isSignedIn) return router.push('/sign-up')
  const { toast } = useToast();

  // useEffect(() => {
  //   if (!isSignedIn) {
  //     router.push("/sign-up");
  //   }
  // }, [isSignedIn, router]);

  const incrementProgress = (currentProgress, setProgress) => {
    const intervalId = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 1;
        setProgress(currentProgress);
      } else {
        clearInterval(intervalId);
      }
    }, 1000); 
    return intervalId;
  };

  const onSubmit = async (values) => {
    setProgress(65);
    const progressInterval = incrementProgress(65, setProgress);
    setGenerating(true);
    try {
      const response = await fetch("api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: values.description,
          style: values.select,
          file: values.file,
        }),
      });
      if (response.ok) {
        const imageData = await response.json();
        console.log(imageData,'imageData');
        clearInterval(progressInterval);
        setProgress(100);
        setImageInfo(imageData);
        setShowDialog(true);
      } else {
        // Handle error response
        toast({
          title: "Error",
          description: "Please reload the page and try again",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error creating",
        variant: "destructive",
      });
      clearInterval(progressInterval);
      setProgress(65);
    } finally {
      setGenerating(false);
    }
  };

  const handleShare = async() => {
    try {
      handleCloseDialog();
     
      const response = await fetch('/api/share', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl: imageInfo, // the URL of the image to share
          style: form.watch('select'), // the style of the image
          description: form.watch('description'), // the description of the image
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        form.setValue('description', '');
        toast({
          title: 'Image Generated Successfully',
          description: 'Thank you for generating your image with us !',
          variant: 'success'
        })
      } else {
        console.error('Failed to share the image');
        toast({
          title: 'Error',
          description: 'Hmm something went wrong',
          variant: 'destructive',
        })
      }
    } catch (error) {
      console.error('Error while sharing the image:', error);
      // Handle the exception
    }
  }

  const handleUpload = async (event) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    const response = await fetch(
      `https://api.imgbb.com/1/upload?expiration=60000&key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData, // No headers needed, browser sets the multipart/form-data header
      }
    );
    setLoading(false);
    setProgress(33);
    const data = await response.json();
    form.setValue("file", data.data.url);
    setUploaded(true);
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      select: "",
      file: "",
    },
  });

  const handleCloseDialog = () => {
    setShowDialog(false);
  };
  return (
    <section className="w-full h-full ">
      <h1 className="text-3xl font-bold mb-5 md:mb-0">Create</h1>
      <div className="flex flex-col md:flex-col">
        <div className="relative mt-5 md:order-3 mb-5">
          <Progress value={progress} />
          <Label className="absolute inset-0 flex justify-center items-center text-sm font-bold text-foreground">
            {progress}%
          </Label>
        </div>
        <div className=" md:order-1 pb-5">
          <CreateForm
            onSubmit={onSubmit}
            handleUpload={handleUpload}
            loading={loading}
            form={form}
            generating={generating}
            uploaded={uploaded}
            setUploaded={setUploaded}
          />
        </div>
        {/* Dialog POP up */}
        {/* {JSON.stringify(imageInfo) } */}
        {imageInfo !== null ? (
          <div className="order-2 w-full">
            <AlertDialog open={showDialog && imageInfo !== null } onOpenChange={setShowDialog}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-foreground font-bold text-3xl">
                    Image Result
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                  <img
                    src={imageInfo}
                    alt="Generated Image"
                    className="rounded-md"
                  />
                  <div>
                    <p className="mt-5 text-foreground font-bold text-base">
                      Description:{" "}
                      <span className="font-normal text-base capitalize">
                        {form.watch("description")}
                      </span>
                    </p>
                    <p className="mt-0 text-foreground font-bold text-base">
                      Style:{" "}
                      <span className="font-normal text-base capitalize">
                        {form.watch("select")}
                      </span>
                    </p>
                  </div>
                </AlertDialogDescription>
                <AlertDialogFooter>                 
                    <Button variant="default" onClick={handleShare}>
                      Close
                    </Button>     
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ): null}
      </div>
    </section>
  );
};

export default CreatePage;
