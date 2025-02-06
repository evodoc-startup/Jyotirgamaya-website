import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Main() {
    return (
        <main className='w-full flex md:flex-row flex-col-reverse'>
            <div className='md:w-1/2 w-full md:py-20 py-5 xl:pl-44 px-20'>
                <h1 className='text-5xl mb-10'>
                    What is Autism ?
                </h1>
                <p className='tracking-widest leading-loose font-light'>Autism, or Autism Spectrum Disorder (ASD), is a neurodevelopmental condition characterized by differences in communication, social interaction, and repetitive behaviors. It is a spectrum, meaning it affects individuals uniquely, with varying strengths and challenges. Autism is not a disease but a lifelong condition, with early support fostering growth and independence.</p>
                <Link href={"/"} className='block w-fit my-8 px-6 py-2 rounded-xl text-white font-bold bg-blue'>Know More</Link>
            </div>
            <div className='md:w-1/2 w-full flex justify-center xl:items-end items-center md:py-20 py-5'>
                <Image src={"/autism.png"} alt='Image' height={500} width={500} />
            </div>
        </main>
    )
}

export default Main