"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {Loader2} from "lucide-react"
import Image from "next/image";

const BrowsePage = () => {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImg = async () => {
      try {
        setLoading(true);
        const response = await fetch(`api/retrive?nocache=${new Date().getTime()}`);
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchImg();
  }, []);
  const gridClasses = [
    "col-span-4 row-span-4 md:col-span-6 md:row-span-6", // For div 1
    "col-span-2 row-span-2 col-start-5 md:col-span-3 md:row-span-3 md:col-start-7", // For div 2
    "col-span-2 row-span-2 col-start-5 row-start-3 md:col-span-3 md:row-span-3 md:col-start-10", // For div 3
    "col-span-4 row-span-4 col-start-3 row-start-5 md:col-span-3 md:row-span-3 md:col-start-7 md:row-start-4", // For div 4
    "col-span-2 row-span-2 col-start-1 row-start-5 md:col-span-3 md:row-span-3 md:col-start-10 md:row-start-4", // For div 5
    "col-span-2 row-span-2 row-start-7 md:col-span-3 md:row-span-3 md:row-start-7", // For div 6
    "col-span-2 row-span-2 row-start-9 md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-7", // For div 7
    "col-span-2 row-span-2 col-start-3 row-start-9 md:col-span-3 md:row-span-3 md:col-start-1 md:row-start-10", // For div 8
    "col-span-2 row-span-2 col-start-5 row-start-9 md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-10", // For div 9
    "col-span-2 row-span-2 col-start-5 row-start-11 md:col-span-6 md:row-span-6 md:col-start-7 md:row-start-7",
  ];
  return (
    <section className="w-full h-full mb-10">
      {loading === true ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <Loader2 className="w-5 h-5 animate-spin" />
        </div>
      ):(

      <div className="grid grid-cols-6 grid-rows-none gap-4 md:grid-cols-12 md:auto-rows-fr">
        {imageData.length > 0 &&
          imageData.map((image, index) => (
            <div
              key={image._id}
              className={`relative w-full h-full ${
                index < gridClasses.length
                  ? gridClasses[index]
                  : "col-span-2 row-span-2 md:col-span-3 md:row-span-3"
              } hover:transform hover:scale-110 hover:border-2 hover:border-primary rounded-lg transition duration-300 ease-in-out hover:z-10`}
            >
              <Link
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer "
              >
                <p className="absolute top-0 left-0 w-full bg-gradient-to-b from-background text-foreground p-1 font-bold line-clamp-1">
                  {image.style}
                </p>
                <img
                  src={image.url}
                  alt="user created images"
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
                <p className="absolute hidden xl:block bottom-0 left-0 w-full bg-gradient-to-t from-background from-10% to-100% text-foreground p-2 capitalize">
                  {image.description}
                </p>
              </Link>
            </div>
          ))}
      </div>
      )}
    </section>
  );
};

export default BrowsePage;
