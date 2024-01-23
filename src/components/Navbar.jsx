'use client'

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
  import { Button } from './UI/button'
  import ModeToggle from './ModeToggle'

  import Link from 'next/link'
  import { UserButton } from "@clerk/nextjs";
  import { useUser } from "@clerk/nextjs"

const Navbar = () => {
    const { isSignedIn, user, isLoaded } = useUser();
    console.log(isSignedIn)


  return (
<section>
<div className='md:block hidden'>
            <div className='flex justify-between items-center py-4 border-b-2 '>
                <div>LOGO</div>
                <div className='flex gap-4 justify-evenly items-center'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/create'}>Create</Link>
                    <Link href={'/browse'}>Browse</Link>
                    {isSignedIn === true ? <UserButton afterSignOutUrl='/' /> : <Link href={'/sign-up'}>Login</Link>}
                    {/* <Link href={'/sign-up'}>Login</Link> */}
                </div>
            </div>
        </div>

        <div className='md:hidden block  '>
            <div className='flex justify-between py-4 items-center border-b-2 '>
                <div>LOGO</div>
                        <div> 
                            <div className='flex flex-row gap-4 justify-evenly items-center '>
                                <ModeToggle />
                                <UserButton afterSignOutUrl='/' />
                                    <Sheet>
                                        <SheetTrigger asChild >
                                            <Button variant="outline" size="icon">
                                            <Menu className="h-6 w-6" />
                                            </Button>
                                        </SheetTrigger>
                                        <SheetContent className="h-full ">
                                            <SheetHeader>
                                            <SheetTitle>LOGO</SheetTitle>
                                            <SheetDescription>
                                            <div className=' h-full flex flex-col text-xl mt-10 items-center justify-evenly gap-4'>
                                            <Link href={'/'}>Home</Link>
                                            <Link href={'/create'}>Create</Link>
                                            <Link href={'/browse'}>Browse</Link>
                                            {isSignedIn === false ? <Link href={'/sign-up'}>Login</Link> : null}
                                            
                                            </div>
                                            </SheetDescription>
                                            </SheetHeader>
                                        </SheetContent>
                                    </Sheet>
                            </div>
                        </div>
                </div>

        </div>
</section>
  )
}

export default Navbar