import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <section>
      <div className="flex justify-center mt-20 items-center">
        <SignIn />
      </div>
      <div>

      </div>
    </section>
  
  );
}