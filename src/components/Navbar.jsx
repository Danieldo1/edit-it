"use client";

import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import ModeToggle from "./ModeToggle";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const path = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          setIsDarkMode(document.documentElement.classList.contains("dark"));
        }
      });
    });

    mutationObserver.observe(document.documentElement, {
      attributes: true,
    });

    // Cleanup observer on component unmount
    return () => mutationObserver.disconnect();
  }, []);

  return (
    <section>
      <div className="md:block hidden">
        <div className="flex justify-between items-center py-4 border-b-2 ">
          <div className="flex ">
            <Link href={"/"} className="flex items-center ">
              <Image
                src={"/logoai.svg"}
                alt="logo"
                width={50}
                height={50}
                className={`cursor-pointer ${isDarkMode ? "invert" : ""}`}
              />
              <p className="text1 text-3xl">AIterImage</p>
            </Link>
          </div>

          <div className="flex gap-4 justify-evenly items-center">
            <Link
              href={"/"}
              className={
                path === "/"
                  ? "text-primary transition-all duration-700 ease-in-out "
                  : "hover:text-primary"
              }
            >
              Home
            </Link>
            <Link
              href={"/create"}
              className={
                path === "/create"
                  ? "text-primary transition-all duration-700 ease-in-out "
                  : "hover:text-primary"
              }
            >
              Create
            </Link>
            <Link
              href={"/browse"}
              className={
                path === "/browse"
                  ? "text-primary transition-all duration-700 ease-in-out "
                  : "hover:text-primary"
              }
            >
              Browse
            </Link>
            {isSignedIn === true ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link href={"/sign-up"} className="hover:text-primary">
                Login
              </Link>
            )}
            <ModeToggle />
          </div>
        </div>
      </div>
      {/* MOBILE NAV */}
      <div className="md:hidden block  ">
        <div className="flex justify-between py-4 items-center border-b-2 ">
          <div className="flex ">
            <Link href={"/"} className="flex items-center ">
              <Image
                src={"/logoai.svg"}
                alt="logo"
                width={40}
                height={40}
                className={`cursor-pointer ${isDarkMode ? "invert" : ""}`}
              />
              <p className="text1 text-2xl">AIterImage</p>
            </Link>
          </div>
          <div>
            <div className="flex flex-row gap-4 justify-evenly items-center ">
              <ModeToggle />
              <UserButton afterSignOutUrl="/" />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="h-full ">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="text-center items-center flex justify-center">
                        <Image
                          src={"/logoai.svg"}
                          alt="logo"
                          width={40}
                          height={40}
                          className={` ${isDarkMode ? "invert" : ""}`}
                        />
                      </div>
                      <p className="text1 mt-1 text-2xl">AIterImage</p>
                    </SheetTitle>
                    <SheetDescription>
                      <div className=" h-full flex flex-col text-xl mt-10 items-center justify-evenly gap-4 ">
                        <Link
                          href={"/"}
                          className={path === "/" ? "text-primary" : ""}
                        >
                          Home
                        </Link>
                        <Link
                          href={"/create"}
                          className={path === "/create" ? "text-primary" : ""}
                        >
                          Create
                        </Link>
                        <Link
                          href={"/browse"}
                          className={path === "/browse" ? "text-primary" : ""}
                        >
                          Browse
                        </Link>
                        {isSignedIn === false ? (
                          <Link href={"/sign-up"}>Login</Link>
                        ) : null}
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
  );
};

export default Navbar;
