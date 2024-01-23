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
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const { isSignedIn, user, isLoaded } = useUser();
   const path = usePathname()


  return (
<section>
<div className='md:block hidden'>
            <div className='flex justify-between items-center py-4 border-b-2 '>
                <div>LOGO</div>
                <div className='flex gap-4 justify-evenly items-center'>
                    <Link href={'/'} className={path === '/' ? 'text-primary transition-all duration-700 ease-in-out ' : 'hover:text-primary'}>Home</Link>
                    <Link href={'/create'} className={path === '/create' ? 'text-primary transition-all duration-700 ease-in-out ' : 'hover:text-primary'}>Create</Link>
                    <Link href={'/browse'} className={path === '/browse' ? 'text-primary transition-all duration-700 ease-in-out ' : 'hover:text-primary'}>Browse</Link>
                    {isSignedIn === true ? <UserButton afterSignOutUrl='/' /> : <Link href={'/sign-up'} className='hover:text-primary'>Login</Link>}
                    <ModeToggle />
                </div>
            </div>
        </div>
                        {/* MOBILE NAV */}
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
                                            <Link href={'/'} className={path === '/' ? 'text-primary' : ''}>Home</Link>
                                            <Link href={'/create'} className={path === '/create' ? 'text-primary' : ''}>Create</Link>
                                            <Link href={'/browse'} className={path === '/browse' ? 'text-primary' : ''}>Browse</Link>
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