"use client"
import NextVideo from 'next-video';
import video from '@/videos/bgvideo.mp4'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import Image from "next/image";
import nexy from "@/public/checklist.svg"
import { useRouter } from 'next/navigation'
export default function Landing() {
    const router = useRouter()
    const handleRoute = () => {
        router.push('/login')
    }
    const { ref: ref, inView: inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { ref: ref3, inView: inView3 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (
        <>
            <div className="mt-48" >

                <div className="m-12 mb-48  h-auto bg-transparent flex justify-between sm:flex-1 px-7 gap-4 mx-10">
                    <motion.div
                         initial={{ x: -1000 }}
                         animate={{ x: 0 }}
                         transition={{ duration: 1 }}

                     className="font2  h-[300px] w-auto p-3">
                        <h1 className=" font-bold">
                            Organising your streaks </h1><span><h1 className=" font-bold" >Making them Public </h1></span>
                        <h1 className=" font-bold">Gain followers
                        </h1></motion.div>
                    <motion.div 
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity:1 }}
                      transition={{ duration: 1 }}
                    className="   bg-violet-400 flex -rotate-12 -py-12 px-3 rounded-3xl mx-10 justify-center  hover:bg-violet-500 animate-teleport">
                        <Image src={nexy} alt="checklist" className="-mt-12 w-56 " />
                    </motion.div>
                </div>               
                <div className="flex w-full flex-col justify-between  ">
                    <motion.div
                          ref={ref}
                          initial={{ y: -300, opacity: 0 }}
                          animate={inView ? { y: 0, opacity: 1 } : {}}
                          transition={{ duration: .5 }}
                    className="h-[250px] mb-20  w-auto p-3 flex flex-row justify-start ">
                        <div className="flex items-center justify-center h-full w-2/4 text-black">
                            <h1 className="text-center h-auto p-4 rounded-lg bg-purple-300 text-6xl font-bold">Step 1</h1>
                        </div>

                        <div className="flex justify-start items-center w-2/4 bg-white border rounded-l-3xl">
                            <div className=" text-black p-3 ">
                                <h1 className="text-left text-6xl font-bold shadow-3xl shadow-black">Create Account </h1>
                                <span>
                                    <h1 className="text-left text-6xl font-bold">or Sign In</h1>
                                </span>
                               
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                    ref={ref1}
                    initial={{ x: -200, opacity: 0 }}
                    animate={inView1 ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: .5 }}
                     className="h-[250px] mb-20 w-auto p-3 flex flex-row justify-start">
                        <div className="flex justify-end items-center w-2/4 bg-white  border rounded-r-3xl ">
                            <div className="h-full  text-black p-3  shadow-3xl shadow-black">

                                <h1 className=" text-right text-6xl font-bold">
                                   Start New Streak </h1><span><h1 className=" text-right text-6xl font-bold" >Making them Public </h1></span><h1 className=" text-right text-6xl font-bold">Gain followers
                                </h1>
                            </div>

                        </div>
                        <div className="flex items-center justify-center h-full w-2/4 text-black">
                            <h1 className="text-center h-auto p-4 rounded-lg bg-purple-300 text-6xl font-bold">Step 2</h1>
                        </div>


                    </motion.div>
                    <motion.div
                    ref={ref2}
                    initial={{ x:200, opacity: 0 }}
                    animate={inView2 ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                     className="h-[250px] mb-20 mt-12 w-auto p-3 flex flex-row justify-start ">
                        <div className="flex items-center justify-center h-full w-2/4 text-black">
                            <h1 className="text-center h-auto p-4 rounded-lg bg-purple-300 text-6xl font-bold">Step 3</h1>
                        </div>

                        <div className="flex justify-start items-center w-2/4 bg-white border rounded-tl-3xl">
                            <div className=" text-black p-3 shadow-3xl shadow-black">
                                <h1 className=" text-6xl font-bold">Organising your streaks</h1>
                                <span>
                                    <h1 className=" text-6xl font-bold">Making them Public</h1>
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                ref={ref3}
                initial={{ y:-100 , opacity: 0 }}
                animate={inView3 ? { y:0 , opacity: 1 } : {}}
                transition={{ duration: .5 }}
                className="bg-violet-300 cursor-pointer h-24 w-[80%] container m-auto mt-12 ">
                    <h1 onClick={handleRoute} className="text-center h-auto p-4 rounded-lg text-black bg-purple-300 text-6xl font-bold">Try Now</h1>
                </motion.div>
                <div className=" m-24 bg-gradient-to-tl overflow-hidden from-violet-300 to-gray-300 rounded-3xl  w-[90%] container  p-2 ">
                <div className="bg-white h-[600px] hover:h-[680px] items-center flex justify-center rounded-3xl   ">
                <NextVideo src={video}/>

                    {/* <h1 className="text-center h-10  p-4 rounded-lg text-black bg-purple-300 text-6xl font-bold">Try Now</h1> */}
                    
                </div>
                </div>

         <h1 className='bgr font1 text-5xl border-white border-b mt-12 mb-3 text-center p-3 font-bold bg-gradient-to-l from-violet-700 via-violet-800 to-gray-900 line-clamp-3 animate-pulse '>Watch Demo Now</h1> 

            </div>
        </>
    );
}