'use client'
import * as React from "react"

import { Card, CardContent,CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

export function HeroCarusel() {

    const slides = [
        { imageUrl: "/cinematic.png", text: "Cinematic Elegance" },
        { imageUrl: "/disney.png", text: "Disney Magic" },
        { imageUrl: "/digitalart.png", text: "Digital Artistry" },
        { imageUrl: "/photographic.png", text: "Photographic Realism" },
        { imageUrl: "/fantasy.png", text: "Fantasy Worlds" },
        { imageUrl: "/neopunk.png", text: "Neo Punk Vibes" },
        { imageUrl: "/enchance.png", text: "Enhanced Beauty" },
        { imageUrl: "/comicbook.png", text: "Comic Book Flair" },
        { imageUrl: "/lowpoly.png", text: "Low Poly Graphics" },
        { imageUrl: "/lineart.png", text: "Line Art Simplicity" },
      ];

  return (
    <div className="w-full max-w-md my-10">  
    <Carousel className="w-full max-w-md"  
     plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="relative flex aspect-square items-center justify-center p-6">
                <img src={slide.imageUrl} alt={`Slide ${index}`} className="object-cover w-full h-full rounded-md" />
                <span className="absolute inset-0 max-h-[100px] flex items-start justify-center  text-2xl md:text-3xl font-bold w-full bg-gradient-to-b from-background">{slide.text}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
   
    </Carousel>
    </div>
  )
}
