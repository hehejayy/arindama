"use client";
import React from 'react'
import { Card, CardHeader, CardFooter, Button, Link, ButtonGroup } from "@nextui-org/react";
import Image from "next/image";
import Buy from "../../../public/Buy.png";
import Baju1 from "../../../public/baju1.png";
import Baju2 from "../../../public/baju2.png";
import Baju3 from "../../../public/baju3.png";
import Baju4 from "../../../public/baju4.png";
import Baju5 from "../../../public/baju5.png";
import Baju6 from "../../../public/baju6.png";
import Baju7 from "../../../public/baju7.png";
import Baju8 from "../../../public/baju8.png";

export default function CardComponent() {
  return (
    <div className='flex justify-center flex-col mt-10 text-3xl font-semibold'>
      <h1 className="text-center">Our Product</h1>
      <ButtonGroup isDisabled>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      {/* Wrapper div to enable horizontal scrolling */}
      <div className='flex gap-4 justify-start overflow-x-auto px-4 py-6 items-center' >
        <Card isFooterBlurred className="w-72 h-[300px] flex-shrink-0">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <div className='w-2 h-6'></div>
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
              <Image src={Buy} width={22} height={22} alt="Picture of the author" />
            </Button>
          </CardFooter>
        </Card>

        {/* Repeat other cards */}
        <Card isFooterBlurred className="w-72 h-[300px] flex-shrink-0">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <div className='w-2 h-6'></div>
          </CardHeader>
          <Image
            alt="Card example background"
            className="z-0 w-full h-full -translate-y-6 object-cover"
            src={Baju2}
          />
          <CardFooter className="absolute bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Batik khas Indonesia</p>
              <p className="text-black text-tiny">Rp.-</p>
            </div>
            <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
              <Image src={Buy} width={22} height={22} alt="Picture of the author" />
            </Button>
          </CardFooter>
        </Card>

        {/* Add more cards as needed */}
        <Card isFooterBlurred className="w-72 h-[300px] flex-shrink-0">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <div className='w-2 h-6'></div>
          </CardHeader>
          <Image
            alt="Card example background"
            className="z-0 w-full h-full -translate-y-6 object-cover"
            src={Baju3}
          />
          <CardFooter className="absolute bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Batik khas Indonesia</p>
              <p className="text-black text-tiny">Rp.-</p>
            </div>
            <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
              <Image src={Buy} width={22} height={22} alt="Picture of the author" />
            </Button>
          </CardFooter>
        </Card>

        <Card isFooterBlurred className="w-72 h-[300px] flex-shrink-0">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <div className='w-2 h-6'></div>
          </CardHeader>
          <Image
            alt="Card example background"
            className="z-0 w-full h-full -translate-y-6 object-cover"
            src={Baju4}
          />
          <CardFooter className="absolute bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Batik khas Indonesia</p>
              <p className="text-black text-tiny">Rp.-</p>
            </div>
            <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
              <Image src={Buy} width={22} height={22} alt="Picture of the author" />
            </Button>
          </CardFooter>
        </Card>
</div><div className='flex gap-4 justify-start overflow-x-auto px-4 py-6'>
        <Card isFooterBlurred className="w-72 h-[300px] flex-shrink-0">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <div className='w-2 h-6'></div>
          </CardHeader>
          <Image
            alt="Card example background"
            className="z-0 w-full h-full -translate-y-6 object-cover"
            src={Baju5}
          />
          <CardFooter className="absolute bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Batik khas Indonesia</p>
              <p className="text-black text-tiny">Rp.-</p>
            </div>
            <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
              <Image src={Buy} width={22} height={22} alt="Picture of the author" />
            </Button>
          </CardFooter>
        </Card>

        <Card isFooterBlurred className="w-72 h-[300px] flex-shrink-0">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <div className='w-2 h-6'></div>
          </CardHeader>
          <Image
            alt="Card example background"
            className="z-0 w-full h-full -translate-y-6 object-cover"
            src={Baju6}
          />
          <CardFooter className="absolute bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Batik khas Indonesia</p>
              <p className="text-black text-tiny">Rp.-</p>
            </div>
            <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
              <Image src={Buy} width={22} height={22} alt="Picture of the author" />
            </Button>
          </CardFooter>
        </Card>

        <Card isFooterBlurred className="w-72 h-[300px] flex-shrink-0">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <div className='w-2 h-6'></div>
          </CardHeader>
          <Image
            alt="Card example background"
            className="z-0 w-full h-full -translate-y-6 object-cover"
            src={Baju7}
          />
          <CardFooter className="absolute bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Batik khas Indonesia</p>
              <p className="text-black text-tiny">Rp.-</p>
            </div>
            <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
              <Image src={Buy} width={22} height={22} alt="Picture of the author" />
            </Button>
          </CardFooter>
        </Card>

        <Card isFooterBlurred className="w-72 h-[300px] flex-shrink-0">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <div className='w-2 h-6'></div>
          </CardHeader>
          <Image
            alt="Card example background"
            className="z-0 w-full h-full -translate-y-6 object-cover"
            src={Baju8}
          />
          <CardFooter className="absolute bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Batik khas Indonesia</p>
              <p className="text-black text-tiny">Rp.-</p>
            </div>
            <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
              <Image src={Buy} width={22} height={22} alt="Picture of the author" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className='flex justify-end mr-6 mt-4'>
        <Button as={Link} color="primary" href="#" className="mr-1 min-w-5 px-2">
          Lebih Banyak Lagi
        </Button>
      </div>
    </div>
  )
}
