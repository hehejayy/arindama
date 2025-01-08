import React from 'react'
import Image from 'next/image'
import content from '../../../public/content-aboutus.png'
export default function AboutUs() {
  return (
    <div className='flex justify-cente mt-4 '> 
        <Image
                            src={content}
                            width={500}
                            height={500}
                            alt="Picture of the author" 
                        />
    </div>
  )
}
