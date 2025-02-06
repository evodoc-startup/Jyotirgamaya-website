import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Services() {
    return (
        <section>
            <div className='w-full px-10 py-10 bg-moonstone text-center'>
                <h1 className='text-5xl font-bold tracking-wide text-white'>Services</h1>
                <p className='mt-5 font-sans'>"Discover our therapy services to support parents, children, and families in overcoming challenges and building healthy relationships."</p>
            </div>
            <div className='py-10 xl:px-52 lg:px-32 lg:flex px-10 hidden flex-col gap-y-24 mt-20'>
                <div className='w-full flex justify-around gap-x-6'>
                    <div className='w-[45%] flex flex-col'>
                        <h3 className='text-3xl tracking-widest leading-normal'>Parent Coaching and Counseling</h3>
                        <div className='h-[1px] my-3 w-full bg-[#77B2FF]'></div>
                        <p className='my-4 font-bold'>Overview:</p>
                        <p>Personalized guidance for parents to develop positive parenting strategies, set boundaries, and strengthen relationships with their children.</p>
                        <p className='my-4 font-bold'>Best For :</p>
                        <p>Parents facing challenges with discipline, communication, or emotional regulation in the home</p>
                        <Link href={"/"} className='py-2 px-4 my-4 bg-[#FF9B28] text-white justify-self-end w-fit'>Explore Now</Link>
                    </div>
                    <div className='w-fit flex items-center'>
                        <Image src="/service-1.png" height={400} width={400} alt='services-1' className='' />
                    </div>
                </div>
                <div className='w-full flex justify-around flex-row-reverse gap-x-6'>
                    <div className='w-[45%] flex flex-col'>
                        <h3 className='text-3xl tracking-widest leading-normal'>Child Behavior Therapy</h3>
                        <div className='h-[1px] my-3 w-full bg-[#79FFEF]'></div>
                        <p className='my-4 font-bold'>Overview:</p>
                        <p>Specialized therapy for children to help manage issues like anxiety, aggression, attention difficulties, and social challenges.</p>
                        <p className='my-4 font-bold'>Best For :</p>
                        <p>Children aged 5–12 experiencing behavioral or emotional issues.</p>
                        <Link href={"/"} className='py-2 px-5 my-4 bg-[#FF9B28] text-white justify-self-end w-fit'>Explore Now</Link>
                    </div>
                    <div className='w-fit flex items-center'>
                        <Image src="/service-2.png" height={400} width={400} alt='services-1' className='' />
                    </div>
                </div>
                <div className='w-full flex justify-around gap-x-6'>
                    <div className='w-[45%] flex flex-col'>
                        <h3 className='text-3xl tracking-widest leading-normal'>Family Therapy</h3>
                        <div className='h-[1px] my-3 w-full bg-[#FF8B8B]'></div>
                        <p className='my-4 font-bold'>Overview:</p>
                        <p>A collaborative approach involving parents and children to address and resolve family conflicts or communication breakdowns.</p>
                        <p className='my-4 font-bold'>Best For :</p>
                        <p> Families struggling with tension, lack of understanding, or adjusting to life changes.</p>
                        <Link href={"/"} className='py-2 px-5 my-4 bg-[#FF9B28] text-white justify-self-end w-fit'>Explore Now</Link>
                    </div>
                    <div className='w-fit flex items-center'>
                        <Image src="/service-3.png" height={400} width={400} alt='services-1' className='' />
                    </div>
                </div>
                <div className='w-full flex justify-around flex-row-reverse gap-x-6'>
                    <div className='w-[45%] flex flex-col'>
                        <h3 className='text-3xl tracking-widest leading-normal'>School Adjustment
                            Counseling</h3>
                        <div className='h-[1px] my-3 w-full bg-[#32FF40]'></div>
                        <p className='my-4 font-bold'>Overview:</p>
                        <p>Counseling focused on helping children and teens navigate school pressures, manage academic stress, and build social skills.</p>
                        <p className='my-4 font-bold'>Best For :</p>
                        <p>Children and adolescents facing difficulty adjusting to school environments.</p>
                        <Link href={"/"} className='py-2 px-5 my-4 bg-[#FF9B28] text-white justify-self-end w-fit'>Explore Now</Link>
                    </div>
                    <div className='w-fit flex items-center'>
                        <Image src="/service-4.png" height={400} width={400} alt='services-1' className='' />
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className='py-10  lg:hidden px-10 flex flex-col gap-y-24 mt-20'>

                <div className='w-full flex flex-col gap-y-6 shadow-xl hover:shadow-2xl rounded-lg transition-all duration-300 justify-center items-center overflow-hidden'>
                    <div className='w-full flex items-center'>
                        <Image src="/service-1.png" height={400} width={400} alt='services-1' className='w-full h-96 object-cover' />
                    </div>
                    <div className='w-full flex flex-col md:p-10 p-7'>
                        <h3 className='text-3xl tracking-widest leading-normal'>Parent Coaching and Counseling</h3>
                        <div className='h-[1px] my-3 w-full bg-green-700'></div>
                        <p className='my-4 font-bold'>Overview:</p>
                        <p>Personalized guidance for parents to develop positive parenting strategies, set boundaries, and strengthen relationships with their children.</p>
                        <p className='my-4 font-bold'>Best For :</p>
                        <p>Parents facing challenges with discipline, communication, or emotional regulation in the home</p>
                        <Link href={"/"} className='py-2 px-4 my-4 bg-[#FF9B28] text-white justify-self-end w-fit'>Explore Now</Link>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-y-6 shadow-xl hover:shadow-2xl rounded-lg transition-all duration-300 justify-center items-center overflow-hidden'>
                    <div className='w-full flex items-center'>
                        <Image src="/service-2.png" height={400} width={400} alt='services-1' className='w-full h-96 object-cover' />
                    </div>
                    <div className='w-full flex flex-col md:p-10 p-7'>
                        <h3 className='text-3xl tracking-widest leading-normal'>Child Behavior Therapy</h3>
                        <div className='h-[1px] my-3 w-full bg-[#79FFEF]'></div>
                        <p className='my-4 font-bold'>Overview:</p>
                        <p>Personalized guidance for parents to develop positive parenting strategies, set boundaries, and strengthen relationships with their children.</p>
                        <p className='my-4 font-bold'>Best For :</p>
                        <p>Parents facing challenges with discipline, communication, or emotional regulation in the home</p>
                        <Link href={"/"} className='py-2 px-4 my-4 bg-[#FF9B28] text-white justify-self-end w-fit'>Explore Now</Link>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-y-6 shadow-xl hover:shadow-2xl rounded-lg transition-all duration-300 justify-center items-center overflow-hidden'>
                    <div className='w-full flex items-center'>
                        <Image src="/service-3.png" height={400} width={400} alt='services-1' className='w-full h-96 object-cover' />
                    </div>
                    <div className='w-full flex flex-col md:p-10 p-7'>
                        <h3 className='text-3xl tracking-widest leading-normal'>Family Therapy</h3>
                        <div className='h-[1px] my-3 w-full bg-[#FF8B8B]'></div>
                        <p className='my-4 font-bold'>Overview:</p>
                        <p>A collaborative approach involving parents and children to address and resolve family conflicts or communication breakdowns.</p>
                        <p className='my-4 font-bold'>Best For :</p>
                        <p> Families struggling with tension, lack of understanding, or adjusting to life changes.</p>
                        <Link href={"/"} className='py-2 px-4 my-4 bg-[#FF9B28] text-white justify-self-end w-fit'>Explore Now</Link>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-y-6 shadow-xl hover:shadow-2xl rounded-lg transition-all duration-300 justify-center items-center overflow-hidden'>
                    <div className='w-full flex items-center'>
                        <Image src="/service-4.png" height={400} width={400} alt='services-1' className='w-full h-96 object-cover' />
                    </div>
                    <div className='w-full flex flex-col md:p-10 p-7'>
                        <h3 className='text-3xl tracking-widest leading-normal'>School Adjustment
                            Counseling</h3>
                        <div className='h-[1px] my-3 w-full bg-[#32FF40]'></div>
                        <p className='my-4 font-bold'>Overview:</p>
                        <p>Counseling focused on helping children and teens navigate school pressures, manage academic stress, and build social skills.</p>
                        <p className='my-4 font-bold'>Best For :</p>
                        <p>Children and adolescents facing difficulty adjusting to school environments.</p>
                        <Link href={"/"} className='py-2 px-4 my-4 bg-[#FF9B28] text-white justify-self-end w-fit'>Explore Now</Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services