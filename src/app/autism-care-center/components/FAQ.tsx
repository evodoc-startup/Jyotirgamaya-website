'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FaAngleDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 }
  }
}

function FAQ () {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index))
  }

  const faqs = [
    {
      question: 'Is autism caused by bad parenting?',
      answer:
        'Autism is a neurodevelopmental condition caused by genetic and environmental factors, not parenting styles or techniques.'
    },
    {
      question: 'Can autistic individuals lead successful, independent lives?',
      answer:
        'Many autistic individuals lead fulfilling, independent lives, excel in careers, and make meaningful contributions to society, though support needs may vary.'
    },
    {
      question: 'Do all autistic people have intellectual disabilities?',
      answer:
        'Autism exists on a spectrum. Some individuals may have intellectual disabilities, while others may have average or even exceptional intellectual abilities.'
    },
    {
      question: 'Can autism be cured?',
      answer:
        'Autism is not an illness; it is a lifelong condition. Therapies can support skill development and improve quality of life but do not "cure" autism.'
    },
    {
      question: 'Are autistic people incapable of feeling emotions or empathy?',
      answer:
        'Autistic people experience emotions deeply and are capable of empathy, though they may express or process these differently.'
    }
  ]

  return (
    <section className='py-20 md:px-24 px-10 my-10 flex md:flex-row flex-col items-start justify-center relative z-0 gap-16'>
      <motion.div
        className='md:w-1/2 w-full flex items-center'
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      >
        <div className='flex flex-col items-start'>
          <h2 className='text-left text-5xl md:text-6xl font-serif font-bold text-charcoal leading-tight tracking-tight'>
            Common <br/>
            <span className='text-watermelon-red'>Questions</span>
          </h2>
          <div className='h-1.5 w-24 bg-watermelon-green mt-6 mb-10 rounded-full'></div>
          <div className='my-10 md:block hidden relative'>
             <div className="absolute inset-0 bg-watermelon-red/10 rounded-[3rem] blur-3xl -z-10" />
            <Image src={'/faq.png'} height={450} width={450} alt='FAQ Image' className="rounded-[3rem] object-cover shadow-premium" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className='md:w-1/2 w-full flex flex-col justify-center gap-6'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
      >
        {faqs.map((faq, index) => (
          <Question
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </motion.div>

      <div>
        <p className='tracking-widest absolute right-28 text-[300px] font-serif -rotate-[30deg] bottom-40 -z-10 text-watermelon-red opacity-[0.03]'>
          FAQ
        </p>
      </div>
    </section>
  )
}

function Question ({
  index,
  question,
  answer,
  isOpen,
  toggleFAQ
}: {
  index: number
  question: string
  answer: string
  isOpen: boolean
  toggleFAQ: (index: number) => void
}) {
  return (
    <motion.div
      className={`w-full h-fit py-8 rounded-[2rem] shadow-premium border border-gray-100 px-10 z-10 cursor-pointer transition-all duration-500 ${isOpen ? 'bg-white' : 'bg-gray-50/50 hover:bg-white'}`}
      onClick={() => toggleFAQ(index)}
      variants={itemVariants}
      viewport={{ once: true }}
    >
      <div className='w-full flex justify-between items-center text-xl font-serif font-semibold text-charcoal'>
        <p>{question}</p>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-watermelon-red text-white rotate-180' : 'bg-white text-charcoal border border-gray-100'}`}>
          <FaAngleDown />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className='font-sans text-charcoal/70 leading-relaxed text-lg'>{answer}</p>
      </div>
    </motion.div>
  )
}

export default FAQ
