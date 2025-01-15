"use client";
import React from 'react'
import Image from 'next/image'
import content from '../../../public/content-aboutus.png'
import { Button } from '@nextui-org/react'
import { motion, Variants } from "framer-motion";
import clsx from 'clsx';

const kananHeaderVariants: Variants = {
  hide: {
      opacity: 0,
      x: 500,
  },
  show: {
      opacity: 1,
      x: 0,
      transition: {
          duration: 2,
      },
  },
};
export default function AboutUs() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center ml-10 mt-28 gap-4'> 
        <Image
          src={content}
          alt="Picture of the author"
          className='md:mr-10 md:w-[450] md:h-[450]' 
        />
        <motion.div
          className={clsx(
            'z-10 flex flex-col gap-4',
          )}    
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={kananHeaderVariants}>
          <div className="">
            <h1 className='text-2xl md:text-3xl font-semibold pb-6'>About Arindama</h1>
            <p className='text-base md:text-lg pb-6'>Kami adalah platform e-commerce yang menghadirkan pakaian tradisional dan modern terinspirasi dari kekayaan budaya Indonesia, memadukan elemen tradisional dengan gaya kontemporer untuk melestarikan warisan nusantara.</p>
            <Button color="primary" variant="shadow" className="w-full md:w-60 rounded-full py-3 mt-2">
              <h3>Ayo Gas Ayo Gas</h3>
            </Button>
          </div>
        </motion.div>
    </div>
  )
}
