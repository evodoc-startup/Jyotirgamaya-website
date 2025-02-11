'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FaAngleDown } from "react-icons/fa";
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            // Adjust the stagger timing (in seconds) as needed
            staggerChildren: 0.5,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
    },
};


function FAQ() {
    return (
        <section className='py-5 md:px-24 px-14 my-10 flex md:flex-row flex-col items-center justify-center relative z-0' >
            <motion.div className='md:w-1/2 w-full flex items-center'
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            >
                <div className='flex flex-col items-center justify-center'>
                    <h3 className='text-center text-4xl tracking-widest leading-relaxed'><span className='text-red-700'>F</span>requently <span className='text-blue'>A</span>sked <span className='text-pink'>Q</span>uestions</h3>
                    <div className='h-[1px] w-[60%] bg-black mx-auto my-5'></div>
                    <div className='my-10 md:block hidden'>
                        <Image src={"/faq.png"} height={400} width={400} alt='Image' />
                    </div>
                </div>
            </motion.div>
            <motion.div className='md:w-1/2 w-full flex flex-col justify-center gap-5'
                variants={containerVariants}
                initial="hidden"
                whileInView={"visible"}
            >
                <Question question='Is autism caused by bad parenting?' answer='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatibus, in autem ex iusto numquam quo consequatur optio molestiae exercitationem quaerat labore a molestias libero, accusantium dolorum facere. Assumenda, totam.' />
                <Question question='Is autism caused by bad parenting?' answer='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatibus, in autem ex iusto numquam quo consequatur optio molestiae exercitationem quaerat labore a molestias libero, accusantium dolorum facere. Assumenda, totam.' />
                <Question question='Is autism caused by bad parenting?' answer='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatibus, in autem ex iusto numquam quo consequatur optio molestiae exercitationem quaerat labore a molestias libero, accusantium dolorum facere. Assumenda, totam.' />
                <Question question='Is autism caused by bad parenting?' answer='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatibus, in autem ex iusto numquam quo consequatur optio molestiae exercitationem quaerat labore a molestias libero, accusantium dolorum facere. Assumenda, totam.' />
            </motion.div>
            <div className=''>
                <p className='tracking-widest absolute right-16 text-[400px] -rotate-[30deg] bottom-40 -z-10 text-[#D0CBCB] opacity-15'>FAQ</p>
            </div>
            <div className='bg-[#6F93E0] h-36 w-36 md:block hidden absolute top-0 rotate-45 -left-20'></div>
        </section>
    )
}

function Question({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <motion.div className='w-full h-fit py-6 rounded-lg shadow-md px-10 z-10' onClick={() => setIsOpen((prev) => !prev)}
            variants={itemVariants}
            viewport={{ once: true }}
        >
            <div className='w-full flex justify-between items-center tracking-wider text-lg'>
                <p>{question}</p>
                <FaAngleDown
                    className={`${isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-500 ease-in-out`}
                />
            </div>
            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}>
                <p className='tracking-wider my-5'>
                    {answer}
                </p>
            </div>
        </motion.div>

    )
}

export default FAQ