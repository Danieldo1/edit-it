import React from 'react'
import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Link from 'next/link'

const Navbar = () => {
  return (
<section>
<div className='md:block hidden'>
            <div className='flex justify-between py-4 border-b-2 '>
                <div>LOGO</div>
                <div className='flex gap-4'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/create'}>Create</Link>
                    <Link href={'/browse'}>Browse</Link>
                    <Link href={'/login'}>Login</Link>
                </div>
            </div>
        </div>

        <div className='md:hidden block  '>
            <div className='flex justify-between py-4 mx-2 border-b-2 '>
                <div>LOGO</div>


                    <Sheet>
                        <SheetTrigger><Menu /></SheetTrigger>
                        <SheetContent className="h-full ">
                            <SheetHeader>
                            <SheetTitle>LOGO</SheetTitle>
                            <SheetDescription>
                            <div className=' h-full flex flex-col text-xl mt-10 items-center justify-evenly gap-4'>
                                <div>Home</div>
                                <div>Create</div>
                                <div>Browse</div>
                                <div>Login</div>
                            </div>
                            </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                     </Sheet>
                </div>

        </div>
</section>
  )
}

export default Navbar