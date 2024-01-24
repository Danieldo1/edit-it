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
  "col-span-2 row-span-5",                          // 1
  "row-span-3 col-start-3",                        // 2
  "row-span-3 col-start-4",                        // 3
  "row-span-3 col-start-3 row-start-4",             // 4
  "row-span-3 col-start-4 row-start-4",            // 5
  "col-span-2 row-span-4 col-start-3 row-start-7", // 6
  "col-span-2 row-span-5 col-start-1 row-start-6"  // 7
  ];
  return (
    <section className="w-full h-full mb-10">
      <div className="grid grid-cols-4 grid-rows-10 gap-1 md:gap-5">
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


