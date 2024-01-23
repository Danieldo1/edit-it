import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

 
export default function Page() {
  return (
      <section className="w-full h-full ">
        <h2 className="text-3xl font-bold text-center mb-5">Sign Up</h2>
        <div className="w-full h-full lg:grid lg:grid-cols-2 lg:gap-4 ">
            <div className="flex justify-center items-center h-full">
            <div style={{ position: 'relative', width: '100%', height: '100%' }} className="">
          <Image
            src="/signup.png"
            layout="fill"
            objectFit="cover"
            className="absolute w-full h-full"
            // Optionally, you can use this to adjust the position of the image
            // objectPosition="center center"
          />
        </div>
            </div>
            <div className="flex justify-center mt-20 items-center ">
              <SignUp afterSignUpUrl="/" />
            </div>
        </div>
      
    </section>

  
  )
}