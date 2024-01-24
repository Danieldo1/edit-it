'use client'
import React, { useState, useEffect } from 'react';

const BrowsePage = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetchImg()
  },[])

const fetchImg = async () => {
  await fetch('api/retrive').then(response=>{response.json().then(data=>{
    console.log(data, 'data from client')
    setImageData(data)
    
})
})
}
const gridClasses = [
  "col-span-4 row-span-4 md:col-span-6 md:row-span-6",            // For div 1
  "col-span-2 row-span-2 col-start-5 md:col-span-3 md:row-span-3 md:col-start-7", // For div 2
  "col-span-2 row-span-2 col-start-5 row-start-3 md:col-span-3 md:row-span-3 md:col-start-10", // For div 3
  "col-span-4 row-span-4 col-start-3 row-start-5 md:col-span-3 md:row-span-3 md:col-start-7 md:row-start-4", // For div 4
  "col-span-2 row-span-2 col-start-1 row-start-5 md:col-span-3 md:row-span-3 md:col-start-10 md:row-start-4", // For div 5
  "col-span-2 row-span-2 row-start-7 md:col-span-3 md:row-span-3 md:row-start-7", // For div 6
  "col-span-2 row-span-2 row-start-9 md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-7", // For div 7
  "col-span-2 row-span-2 col-start-3 row-start-9 md:col-span-3 md:row-span-3 md:col-start-1 md:row-start-10", // For div 8
  "col-span-2 row-span-2 col-start-5 row-start-9 md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-10", // For div 9
  "md:col-span-6 md:row-span-6 md:col-start-7 md:row-start-7",
  ];
  return (
    <section className="w-full h-full mb-10">
      <div className="grid grid-cols-6 grid-rows-10 gap-4 md:grid-cols-12 md:grid-rows-12 ">
      {imageData.length > 0 && imageData.map((image, index) => (
        <img
          key={image._id}
          src={image.url}
          alt="image"
          // Apply grid positioning classes based on the index
          className={`w-full h-full object-cover ${gridClasses[index % gridClasses.length]}`}
        />
      ))}
    </div>
    </section>
  )
}

export default BrowsePage


