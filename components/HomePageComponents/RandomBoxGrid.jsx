"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image'

// Main component
const RandomBoxGrid = ({ width, contentArray, timeInSeconds }) => {
  const [boxContent, setBoxContent] = useState([]);
  const numBoxes = width * width;
  const halfBoxes = Math.floor(numBoxes / 2);

  // Function to generate random box content
  const generateRandomContent = () => {
    const tempContent = Array(numBoxes).fill(null);
    const indices = new Set();

    while (indices.size < halfBoxes) {
      const randomIndex = Math.floor(Math.random() * numBoxes);
      if (!indices.has(randomIndex)) {
        indices.add(randomIndex);
        const randomContent =
          contentArray[Math.floor(Math.random() * contentArray.length)];
        tempContent[randomIndex] = randomContent;
      }
    }

    setBoxContent(tempContent);
  };

  useEffect(() => {
    generateRandomContent();
    const interval = setInterval(() => {
      generateRandomContent();
    }, timeInSeconds * 1000); // Update every `timeInSeconds`

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [contentArray, timeInSeconds]);

  return (
    <div
    className="w-min mx-auto grid gap-[1px] bg-neutral-700 shadow-inner-3xl"
      style={{
        gridTemplateColumns: `repeat(${width}, 1fr)`,
      }}
    >
      {boxContent.map((content, index) => (
        <div
          key={index}
          className="w-[70px] md:w-40 h-auto aspect-square bg-background flex justify-center items-center text-white"
        >
          {content ? (
            typeof content === "string" && content.startsWith("/") ? (
                <div className="relative w-[80%] h-[80%] bg-neutral-900">
                
                <Image src={content} alt="random" fill style={{ objectFit: "cover", }} />
                </div>
            ) : (
                <div className="bg-neutral-900 w-full h-full flex justify-center items-center shadow-inner-2xl border border-neutral-800 rounded-sm hover:bg-primary-400/30 transition-all duration-500 ">
                    <span className="text-[10px] md:text-base">{content}</span>
                </div>
            )
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RandomBoxGrid;
