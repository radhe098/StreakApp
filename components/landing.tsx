"use client"
import Demo from "@/components/sample"
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
            <div className=" mt-48 md:mt-12  m-auto  w-[32rem] sm:w-[48rem] lg:w-[60rem] xl:w-[83rem] overflow-hidden" >

            <div className="m-4 sm:m-12 mb-48 h-auto bg-transparent flex flex-wrap sm:px-7 sm:mx-10 lg:flex justify-around">
    <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="font2 w-auto p-1 sm:p-3 order-2 lg:order-1"
    >
        <h1 className="font-bold">Organising your streaks</h1>
        <span>
            <h1 className="font-bold">Making them Public</h1>
        </span>
        <h1 className="font-bold">Gain followers</h1>
    </motion.div>
    <motion.div 
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-violet-400 flex w-[16rem] -py-12 p-3 rounded-3xl mx-2 justify-center order-1 lg:order-2 hover:bg-violet-500 "
    >
        <Image src={nexy} alt="checklist" className="-mt-12 w-56 " />
    </motion.div>
</div>
                <div className="flex w-[32rem] sm:w-[48rem] lg:w-[60rem] xl:w-[83rem] flex-col justify-between  mt-24 m-2 ">
                    <motion.div
                          ref={ref}
                          initial={{ x: -200, opacity: 0 }}
                          animate={inView ? { x: 0, opacity: 1 } : {}}
                          transition={{ duration: .5 }}
                    className="h-[15rem]  mt-24 w-[32rem] sm:w-[48rem] lg:w-[60rem] xl:w-[83rem]  p-3 flex flex-row justify-start ">
                        <div className="flex items-center justify-center h-auto w-2/4 text-black">
                            <h1 className="text-center h-auto p-4 rounded-lg bg-purple-300 sm:text-4xl text-3xl md:text-6xl font-bold">Step 1</h1>
                        </div>

                        <div className="bg-white border rounded-l-3xl sm:text-4xl text-3xl md:text-4xl xl:text-6xl lg:text-5xl flex justify-end items-center w-2/4   h-auto ">
                            <div className=" text-black px-1  p-6  ">
                                <h1 className="  font-bold  shadow-black">Create Account or Sign In</h1>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                    ref={ref1}
                    initial={{ x: 200, opacity: 0 }}
                    animate={inView1 ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: .5 }}
                     className="h-[250px] md:my-14 w-auto p-3 flex flex-row justify-start">
                        <div className="flex justify-end items-center w-2/4 bg-white  border rounded-r-3xl ">
                            <div className="sm:text-4xl text-3xl md:text-4xl xl:text-6xl lg:text-5xl flex justify-start text-black items-center  h-auto ">

                                <h1 className=" text-right font-bold">
                                   Start New Streak Making them Public Gain followers
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
                     className="h-[250px]  mt-12 w-auto p-3 flex flex-row justify-start ">
                        <div className="flex items-center justify-center h-full w-2/4 text-black">
                            <h1 className="text-center h-auto p-4 rounded-lg bg-purple-300 text-6xl font-bold">Step 3</h1>
                        </div>

                        <div className="flex justify-start items-center w-2/4 bg-white border rounded-tl-3xl">
                            <div className=" text-black p-3 shadow-3xl sm:text-4xl text-3xl md:text-4xl xl:text-6xl lg:text-5xl flex shadow-black">
                                <h1 className=" font-bold text-left">Organising your streaks Making them Public</h1>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                ref={ref3}
                initial={{scale:0 , opacity: 0 }}
                animate={inView3 ? { scale:1, opacity: 1 } : {}}
                transition={{ duration: .5 }}
                className="bg-violet-300 cursor-pointer h-24 w-[80%] container m-auto mt-12 ">
                    <h1 onClick={handleRoute} className="text-center h-auto p-4 rounded-lg text-black bg-purple-300 text-6xl font-bold">Try Now</h1>
                </motion.div>

                <div className="  mt-4 m-auto  bg-gradient-to-tl overflow-hidden from-violet-300 to-gray-300 rounded-3xl  w-[90%] container  p-2 ">
                <div className="bg-white  sm:h-[24rem] lg:h-[29rem] items-center flex justify-center overflow-hidden rounded-3xl   ">
                <NextVideo src={video}/>

                    {/* <h1 className="text-center h-10  p-4 rounded-lg text-black bg-purple-300 text-6xl font-bold">Try Now</h1> */}
                    
                </div>
                </div>

         <h1 className='bgr font1 text-5xl border-white border-b mt-12 mb-3 text-center p-3 font-bold bg-gradient-to-l from-violet-700 via-violet-800 to-gray-900 line-clamp-3 animate-pulse '>Watch Demo Now</h1> 
    <Demo/>

            </div>
        </>
    );
}