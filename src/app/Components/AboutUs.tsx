"use client";
import React from 'react'
import Image from 'next/image'
import content from '../../../public/content-aboutus.png'
import { Button } from '@nextui-org/react'
import { motion, Variants,  } from "framer-motion";
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

    <div className='flex justify-center  ml-10 mt-28 gap-40   '> 
        <Image
                            src={content}
                            width={450}
                            height={450}
                            alt="Picture of the author"
                            className='' 
                        />
                        <motion.div
                    className={clsx(
                        'z-10 flex flex-col gap-4',
                    )}
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={kananHeaderVariants}>
                        <div className="pt-8">
                            <h1 className='text-3xl font-semibold pb-6'>About Arindama</h1>
                            <p className='text-lg pb-6'>Kami adalah platform e-commerce yang menghadirkan pakaian tradisional dan modern terinspirasi dari kekayaan budaya Indonesia, memadukan elemen tradisional dengan gaya kontemporer untuk melestarikan warisan nusantara.</p>
                            <Button color="primary" variant="shadow" className="w-60 rounded-full py-3 mt-2">
          <h3>ayo gas ayo gas</h3>
      </Button>
                        </div></motion.div>
    </div>

  )
}
