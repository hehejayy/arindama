"use client";
import React from 'react'
import {Card, CardHeader, CardFooter, Button,Link, ButtonGroup} from "@nextui-org/react";
import Image from "next/image";
import Buy from "../../../public/Buy.png";
import Baju1 from "../../../public/baju1.png";

export default function card() {
  return (
    <div className='flex justify-center flex-col  mt-10 text-3xl font-semibold '>
        <h1 className="text-center">
            Our Product 
        </h1>
        <ButtonGroup isDisabled>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

    <div className='flex gap-4'>
      <Card isFooterBlurred className="w-72 h-[300px] col-span-12 sm:col-span-5">
    <CardHeader className="absolute z-10 top-1 flex-col items-start">

      <div className='w-2 h-6'> 

      </div>
    </CardHeader>
    <Image
      alt="Card example background"
      className="z-0 w-full h-full -translate-y-6 object-cover"
      src={Baju1}
    />
    <CardFooter className="absolute bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
      <div>
        <p className="text-black text-tiny">Batik khas Indonesia</p>
        <p className="text-black text-tiny">Rp.-</p>
      </div>
      <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
                        <Image
                            src={Buy}
                            width={22}
                            height={22}
                            alt="Picture of the author" 
                        />
                    </Button>
    </CardFooter>
  </Card>
  <Card isFooterBlurred className="w-72 h-[300px] col-span-12 sm:col-span-5">
    <CardHeader className="absolute z-10 top-1 flex-col items-start">

      <div className='w-2 h-6'> 

      </div>
    </CardHeader>
    <Image
      alt="Card example background"
      className="z-0 w-full h-full -translate-y-6 object-cover"
      src={Baju1}
    />
    <CardFooter className="absolute bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
      <div>
        <p className="text-black text-tiny">Batik khas Indonesia</p>
        <p className="text-black text-tiny">Rp.-</p>
      </div>
      <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
                        <Image
                            src={Buy}
                            width={22}
                            height={22}
                            alt="Picture of the author" 
                        />
                    </Button>
    </CardFooter>
  </Card>
  <Card isFooterBlurred className="w-72 h-[300px] col-span-12 sm:col-span-5">
    <CardHeader className="absolute z-10 top-1 flex-col items-start">

      <div className='w-2 h-6'> 

      </div>
    </CardHeader>
    <Image
      alt="Card example background"
      className="z-0 w-full h-full -translate-y-6 object-cover"
      src={Baju1}
    />
    <CardFooter className="absolute bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
      <div>
        <p className="text-black text-tiny">Batik khas Indonesia</p>
        <p className="text-black text-tiny">Rp.-</p>
      </div>
      <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
                        <Image
                            src={Buy}
                            width={22}
                            height={22}
                            alt="Picture of the author" 
                        />
                    </Button>
    </CardFooter>
  </Card>
  <Card isFooterBlurred className="w-72 h-[300px] col-span-12 sm:col-span-5">
    <CardHeader className="absolute z-10 top-1 flex-col items-start">

      <div className='w-2 h-6'> 

      </div>
    </CardHeader>
    <Image
      alt="Card example background"
      className="z-0 w-full h-full -translate-y-6 object-cover"
      src={Baju1}
    />
    <CardFooter className="absolute bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
      <div>
        <p className="text-black text-tiny">Batik khas Indonesia</p>
        <p className="text-black text-tiny">Rp.-</p>
      </div>
      <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
                        <Image
                            src={Buy}
                            width={22}
                            height={22}
                            alt="Picture of the author" 
                        />
                    </Button>
    </CardFooter>
  </Card>
  </div>
    </div>
  )
}
