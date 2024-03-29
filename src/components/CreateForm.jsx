"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, RotateCcw } from "lucide-react";
import Image from "next/image";

const CreateForm = ({
  onSubmit,
  handleUpload,
  loading,
  form,
  generating,
  uploaded,
  setUploaded,
}) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-8 border-2 p-8 rounded-xl shadow-md shadow-secondary"
      >
        {/* PHOTO STATE */}
        <div
          className={`grid w-full md:w-1/2 max-w-full  justify-center md:max-w-full items-center gap-1.5 ${
            uploaded === true
              ? "mx-auto md:max-w-[35%] lg:max-w-[30%] xl:max-w-[25%]"
              : "md:w-full  "
          }`}
        >
          <div className="flex items-center justify-center gap-5">
            {uploaded === true ? (
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center ">
                  <div className="aspect-square rounded-lg ">
                    <img
                      src={form.watch("file")}
                      alt="Uploaded user Image"
                      className=" rounded-lg"
                    />
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    form.setValue("file", "");
                    setUploaded(false);
                  }}
                  className="mt-5 hover:bg-destructive hover:text-destructive-foreground group"
                >
                  <RotateCcw className="w-4 h-4 mr-2 group-hover:rotate-[-120deg]" />
                  Reset
                </Button>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:gap-5 md:justify-start md:items-center items-center justify-center">
                <div className="flex flex-col items-center justify-center ">
                  <div className="flex flex-col items-center justify-center md:mb-0 mb-8">
                    <div className="aspect-square rounded-lg">
                      <Image
                        src={"/photoupload.svg"}
                        width={150}
                        height={150}
                        className=" rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`flex flex-col items-center md:items-start justify-center `}
                >
                  <Input
                    id="file"
                    type="file"
                    onChange={handleUpload}
                    className="cursor-pointer"
                  />
                  {loading === true ? (
                    <div className="flex flex-col items-center justify-center mt-2 ">
                      <Loader2 className="w-5 h-5 animate-spin md:ml-36 md:mt-5" />
                    </div>
                  ) : (
                    <div className={`mt-2  flex flex-col md:flex-row `}>
                      <FormDescription>
                        Please upload a portrait photo of yourself
                      </FormDescription>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* STYLE SELECTOR */}
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
                <SelectContent className="cursor-pointer">
                  <SelectItem value="Cinematic" className="cursor-pointer">
                    Cinematic
                  </SelectItem>
                  <SelectItem
                    value="Disney Charactor"
                    className="cursor-pointer"
                  >
                    Disney Character
                  </SelectItem>
                  <SelectItem value="Digital Art" className="cursor-pointer">
                    Digital Art
                  </SelectItem>
                  <SelectItem
                    value="Photographic (Default)"
                    className="cursor-pointer"
                  >
                    Photographic
                  </SelectItem>
                  <SelectItem value="Fantasy art" className="cursor-pointer">
                    Fantasy Art
                  </SelectItem>
                  <SelectItem value="Neonpunk" className="cursor-pointer">
                    Neonpunk
                  </SelectItem>
                  <SelectItem value="Enhance" className="cursor-pointer">
                    Enhance
                  </SelectItem>
                  <SelectItem value="Comic book" className="cursor-pointer">
                    Comic Book
                  </SelectItem>
                  <SelectItem value="Lowpoly" className="cursor-pointer">
                    Lowpoly
                  </SelectItem>
                  <SelectItem value="Line art" className="cursor-pointer">
                    Line Art
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select your style that you want to be transformed into
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* DESCRIPTION/PROMPT */}
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
                Describe the image you want to generate: background,animals,appearance
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {generating === true ? (
            <div className="flex items-center gap-2">
              <p>Generating</p>
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          ) : (
            "Create"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CreateForm;
