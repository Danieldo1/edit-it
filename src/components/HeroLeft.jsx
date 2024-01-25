''

import React from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroLeft = () => {
  return (
    <div className="md:w-[60%] w-full md:mt-8 xl:mt-10 mt-0">
          <h1 className="text-4xl md:text-5xl font-bold ">Transform Your Look with AIterImage!</h1>
            <h4 className="text-lg mt-3">Discover a new you with <span className="font-bold text-primary tracking-wide">AIterImage</span>. <br /> Our smart web app instantly reinvents your photos with stunning AI-powered styles. Unleash creativity and stand out—effortlessly. It's your face, reimagined.</h4>
            <div className="flex gap-2 mt-8">
              <Button><Link href="/create">Get creative</Link></Button>
              <Button variant="outline"><Link href="/browse">Explore</Link></Button>
            </div>

            <div className="mt-10 flex justify-center items-center md:justify-start">
                <button className="bg-background mt-10 px-6 py-4 rounded-lg border-2 border-primary border-solid mr-2 mb-2 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[14px_11px_0px_1px_#facc15] hover:transition-all hover:ease-in-out hover:duration-300">
                  <Link className='font-semibold' href='https://ko-fi.com/R6R6S3XAX' target='_blank'> 
                  Support this project
                  <div className=' justify-center items-center flex'>
                    <Image height='36' width='50' src='https://storage.ko-fi.com/cdn/brandasset/kofi_s_logo_nolabel.png?_gl=1*trhf8t*_ga*Mzk1NDY5MDkyLjE3MDIzNzAzNDY.*_ga_M13FZ7VQ2C*MTcwMjM3MDM0NS4xLjEuMTcwMjM3MjI4Ni40Mi4wLjA.'  alt='Buy Me a Coffee at ko-fi.com' className='animate-wiggle' />
                  </div>
                  Donate now
                  </Link>
              </button>
            </div>
        </div>
  )
}

export default HeroLeft