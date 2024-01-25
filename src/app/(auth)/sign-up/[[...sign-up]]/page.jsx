import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

 
export default function Page() {
  return (
    <section className="w-full min-h-screen relative"> {/* min-h-screen ensures the section takes at least the full viewport height */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/main-bg.png"
        layout="fill"
        objectFit="cover"
        className="w-full h-full" 
      />
    </div>
    <h2 className="text-4xl text-white font-bold text-center mb-5 z-10 relative pt-10">Create your account</h2>
    <div className="w-full h-full lg:grid lg:grid-cols-2 lg:gap-4 z-10 relative">
      <div className="flex justify-center items-center h-full">
        {/* Empty div for alignment */}
      </div>
      <div className="flex justify-center items-center ">
        <SignUp afterSignInUrl="/" />
      </div>
    </div>
  </section>

  
  )
}