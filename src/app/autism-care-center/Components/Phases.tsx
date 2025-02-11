import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

function Phases() {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                // Adjust the stagger timing (in seconds) as needed
                staggerChildren: 0.5,
            },
        },
    };

    // Define the animation for each item (grid column)
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
    };

    return (
        <div className="md:px-16 py-6">
            <motion.div
                className="grid lg:grid-cols-7 grid-cols-1 lg:grid-rows-1 sm:gap-y-5 gap-y-2 w-full my-5 text-sm text-center break-words lg:p-0 px-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Animate only once when in view
            >
                {/* Grid Column 1 */}
                <motion.div className="w-full h-fit" variants={itemVariants}>
                    <div className="w-full flex items-center lg:flex-col flex-row">
                        <div className="w-36 aspect-square rounded-full border-2 xl:p-5 p-3 object-contain border-blue hover:bg-blue hover:invert transition duration-300 lg:mr-0 mr-10">
                            <Image
                                src={"/talking.svg"}
                                height={400}
                                width={400}
                                alt={"Icon"}
                                className="h-full w-[80%] mx-auto"
                            />
                        </div>
                        <div className="w-full mt-2 lg:text-center text-left">
                            <p className="lg:text-base sm:text-2xl ml-5 text-2xl my-5 text-orange uppercase font-bold tracking-widest">
                                Phase 1
                            </p>
                            <p className="leading-loose">
                                Build trust and familiarity through structured activities in a safe, welcoming environment.
                                Focus on understanding the child’s strengths, interests, and challenges through play-based assessments.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Separator (desktop) */}
                <motion.div className="lg:flex hidden w-full px-4 h-full items-center" variants={itemVariants}>
                    <div className="h-[1px] w-full bg-black"></div>
                </motion.div>
                {/* Separator (mobile) */}
                <motion.div className="lg:hidden flex w-full px-4 sm:h-64 h-44 items-center" variants={itemVariants}>
                    <div className="sm:ml-10 ml-8 w-[1px] h-full bg-black"></div>
                </motion.div>

                {/* Grid Column 2 */}
                <motion.div className="w-full h-fit" variants={itemVariants}>
                    <div className="w-full flex items-center lg:flex-col flex-row">
                        <div className="w-36 aspect-square rounded-full border-2 xl:p-5 p-3 object-contain border-blue hover:bg-blue hover:invert transition duration-300 lg:mr-0 mr-10">
                            <Image
                                src={"/search.svg"}
                                height={400}
                                width={400}
                                alt={"Icon"}
                                className="h-full w-[80%] mx-auto"
                            />
                        </div>
                        <div className="mt-2 lg:text-center text-left">
                            <p className="lg:text-base sm:text-2xl ml-5 text-2xl my-5 text-orange uppercase font-bold tracking-widest">
                                Phase 2
                            </p>
                            <p className="leading-loose">
                                Collaborate with parents and therapists to identify developmental delays, sensory needs, and communication challenges.
                                Pinpoint areas like social skills, language development, or emotional regulation that need focused intervention.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Separator (desktop) */}
                <motion.div className="lg:flex hidden w-full px-4 h-full items-center" variants={itemVariants}>
                    <div className="h-[1px] w-full bg-black"></div>
                </motion.div>
                {/* Separator (mobile) */}
                <motion.div className="lg:hidden flex w-full px-4 sm:h-64 h-44 items-center" variants={itemVariants}>
                    <div className="sm:ml-10 ml-8 w-[1px] h-full bg-black"></div>
                </motion.div>

                {/* Grid Column 3 */}
                <motion.div className="w-full h-fit" variants={itemVariants}>
                    <div className="w-full flex items-center lg:flex-col flex-row">
                        <div className="w-36 aspect-square rounded-full border-2 xl:p-5 p-3 object-contain border-blue hover:bg-blue hover:invert transition duration-300 lg:mr-0 mr-10">
                            <Image
                                src={"/understand.svg"}
                                height={400}
                                width={400}
                                alt={"Icon"}
                                className="h-full w-[80%] mx-auto"
                            />
                        </div>
                        <div className="w-full mt-2 lg:text-center text-left">
                            <p className="lg:text-base sm:text-2xl ml-5 text-2xl my-5 text-orange uppercase font-bold tracking-widest">
                                Phase 3
                            </p>
                            <p className="leading-loose">
                                Introduce individualized strategies and therapies, such as speech therapy, occupational therapy, or applied behavior analysis (ABA).
                                Encourage skill development through structured routines, visual aids, and sensory-friendly techniques.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Separator (desktop) */}
                <motion.div className="lg:flex hidden w-full px-4 h-full items-center" variants={itemVariants}>
                    <div className="h-[1px] w-full bg-black"></div>
                </motion.div>
                {/* Separator (mobile) */}
                <motion.div className="lg:hidden flex w-full px-4 sm:h-64 h-44 items-center" variants={itemVariants}>
                    <div className="sm:ml-10 ml-8 w-[1px] h-full bg-black"></div>
                </motion.div>

                {/* Grid Column 4 */}
                <motion.div className="w-full h-fit" variants={itemVariants}>
                    <div className="w-full flex items-center lg:flex-col flex-row">
                        <div className="w-36 aspect-square rounded-full border-2 xl:p-5 p-3 object-contain border-blue hover:bg-blue hover:invert transition duration-300 lg:mr-0 mr-10">
                            <Image
                                src={"/write.svg"}
                                height={400}
                                width={400}
                                alt={"Icon"}
                                className="h-full w-[80%] mx-auto"
                            />
                        </div>
                        <div className="w-full mt-2 lg:text-center text-left">
                            <p className="lg:text-base sm:text-2xl ml-5 text-2xl my-5 text-orange uppercase font-bold tracking-widest">
                                Phase 4
                            </p>
                            <p className="leading-loose">
                                Reinforce learned skills through consistent practice at home, school, and social settings.
                                Provide tools for parents and caregivers to continue supporting the child’s growth and independence.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Phases