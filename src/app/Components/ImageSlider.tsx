"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "../../../public/header/banner1.png";
import image2 from "../../../public/header/banner2.png";
import image3 from "../../../public/header/banner3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {Button} from "@nextui-org/react";
import { motion, Variants,  } from "framer-motion";
import clsx from 'clsx';


// Interface for image data
interface ImageData {
  src: StaticImageData;
}
const introHeaderVariants: Variants = {
  hide: {
      opacity: 0,
      x: -500,
  },
  show: {
      opacity: 1,
      x: 0,
      transition: {
          duration: 2,
      },
  },
};

// Image data array
const images: ImageData[] = [
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
];
const pulsateVariants: Variants = {
  rest: {
    scale: 1,
  },
  pulsate: {
    scale: [1, 1.2, 1], // Mengembang dan kembali
    transition: {
      duration: 1, // Durasi animasi
      repeat: Infinity, // Animasi terus berulang
      ease: "easeInOut",
    },
  },
};

export default function ImageSlider(): JSX.Element {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full mx-auto mt-4">
      <div
        className="relative h-48 md:h-[460px] mx-6 md:mx-12 group hover:-translate-y-2"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
        />
        <div className="absolute flex flex-col ml-10 md:ml-28 md:top-16 ">
        <motion.header
                    className={clsx(
                        'z-10 flex flex-col gap-4',
                    )}
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={introHeaderVariants}>
        <h1 className="text-primary  font-semibold text-sm pb-2"></h1>
        <h1 className="text-primary  font-bold text-1xl md:text-5xl  w-[100%] ">DISKON AKHIR TAHUN<br></br> <motion.span
        className="text-red-600"
        initial="rest"
        animate="pulsate"
        variants={pulsateVariants}
      >
        HINGGA 80%
      </motion.span></h1>
        <h1 className="text-primary  font-normal text-sm md:text-base w-2/3 md:pt-1 ">Menyatukan Warisan Nusantara dengan Gaya Modern</h1>
        <Button color="primary" variant="shadow" className="w-28 md:w-60 rounded-full py- md:mt-2">
          <h6 className="text-xs md:text-base">Temukan Gaya Mu</h6>
      </Button>
      </motion.header>
      </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform h-[50px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-transparent text-white p-2 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-400 group-hover:text-white" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform h-[50px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-transparent text-white p-2 group"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-400 group-hover:text-white" />
      </button>
    </div>
  );
}
