'use client';

import {HeroCarusel} from "../../components/HeroCarusel";
import Image from "next/image"
import HeroLeft from "@/components/HeroLeft";


export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col md:flex-row justify-between">
        {/* left */}
        <HeroLeft />
        {/* right */}
        <div className="md:w-[60%] w-full mt-8 md:mt-0 relative">
          <div className="justify-center flex items-center aspect-square relative">
            <Image src="/modelorg.jpg" width={500} height={500} alt="hero" className="object-cover w-[75%] h-[75%] rounded-md"/>
            <div className='absolute z-10 right-4 -bottom-8'>
              <Image src='arrow.svg' width={120} height={120} alt='arrow' className="-rotate-[75deg] "/>
            </div>
          </div>
          <div className='justify-center flex items-center'>
            <HeroCarusel />
          </div>
        </div>
      </div>
    </main>
  );
}
