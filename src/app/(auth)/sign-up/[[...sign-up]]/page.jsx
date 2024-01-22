import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import DashboardLayout from "../../layout";

 
export default function Page() {
  return (
<DashboardLayout>
      <section className="w-full h-full lg:grid lg:grid-cols-2 lg:gap-4">
        <div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
        src="/signup.png"
        layout="fill"
        objectFit="cover"
        // Optionally, you can use this to adjust the position of the image
        // objectPosition="center center"
      />
    </div>
        </div>
        <div className="flex justify-center mt-20 items-center ">
          <SignUp />
        </div>
      
    </section>
</DashboardLayout>

  
  )
}