"use client";
import { useState } from "react";
import Frame from "@/components/sample";
// import NextVideo from 'next-video';
// import video from '@/videos/bgvideo.mp4'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import shoe from '@/public/shoeimg.jpg'
import nexy from "@/public/checklist.svg";
import one from "@/public/media/1_1.jpg" 
import two from "@/public/media/2.jpg" 
import three from "@/public/media/3.jpg" 
import four from "@/public/media/6.jpg" 
import five from "@/public/media/5.jpg" 
import six from "@/public/media/6.jpg" 

import { useRouter } from "next/navigation";

export default function Landing(){
    
  const router = useRouter();
  const handleRoute = () => {
    router.push("/login");
  };
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

  type Slide = {
    id: number;
    src: string;
    alt: string;
  };

    const slides:Slide[] = [
      { id: 1, src: shoe.src, alt: "Slide 1" },
      { id: 2, src: shoe.src, alt: "Slide " },
      { id: 3, src: one.src, alt: "Slide " },
      { id: 4, src: two.src, alt: "Slide " },
      { id: 5, src: three.src, alt: "Slide " },
      { id: 6, src: four.src, alt: "Slide " },
      { id: 7, src: five.src, alt: "Slide " },
      { id: 8, src: "https://i.imgur.com/2Ad9Wdo.png", alt: "Slide 3" },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
      const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }

  return (
    <>
      <div className=" font2 mt-96 md:mt-12  m-auto  w-[32rem] sm:w-[48rem] lg:w-[60rem] xl:w-[83rem] overflow-hidden">
        <div className="m-4 sm:m-12 mb-48 h-auto bg-transparent flex flex-wrap sm:px-7 sm:mx-10 lg:flex justify-around">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            
            transition={{ duration: 1 }}
            className=" font-custom text-7xl tracking-wider w-auto p-1 sm:p-3 order-2 lg:order-1"
          >
            <h1 className="mb-4">Organise your streaks</h1>
            <span>
              <h1 className="mb-4">Make them Public</h1>
            </span>
            <h1 className="mb-4">Create Community</h1>
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
        {/* <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={ {y: 0, opacity: 1}}
        transition={{ duration: 0.5 }}
         className=" border border-white-b  mt-32 "></motion.div> */}

        <div className="flex w-[32rem] sm:w-[48rem] lg:w-[60rem] xl:w-[83rem] flex-col justify-between  mt-52 m-2 ">
          <motion.div
            ref={ref}
            initial={{ x: -200, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="h-[15rem]  w-[32rem] sm:w-[48rem] lg:w-[60rem] xl:w-[83rem]  p-3 flex flex-row justify-start "
          >
            <div className="flex items-center justify-center h-auto w-2/4 text-black">
              <h1 className="text-center h-auto p-4 rounded-lg bg-purple-300 sm:text-4xl text-3xl md:text-6xl font-bold">
                Step 1
              </h1>
            </div>

            <div className="bg-white border rounded-l-3xl sm:text-4xl text-3xl md:text-4xl xl:text-6xl lg:text-5xl flex justify-end items-center w-2/4   h-auto ">
              <div className=" text-black px-1  p-6  ">
                <h1 className="  font-bold  shadow-black">
                  Create Account or Sign In
                </h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref1}
            initial={{ x: 200, opacity: 0 }}
            animate={inView1 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="h-[250px] md:my-14 w-auto p-3 flex flex-row justify-start"
          >
            <div className="flex justify-end items-center w-2/4 bg-white  border rounded-r-3xl ">
              <div className="sm:text-4xl text-3xl md:text-4xl xl:text-6xl lg:text-5xl flex justify-start text-black items-center  h-auto ">
                <h1 className=" text-right font-bold">
                  Start New Streak Making them Public Gain followers
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center h-full w-2/4 text-black">
              <h1 className="text-center h-auto p-4 rounded-lg bg-purple-300 text-6xl font-bold">
                Step 2
              </h1>
            </div>
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ x: 200, opacity: 0 }}
            animate={inView2 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="h-[250px]  mt-12 w-auto p-3 flex flex-row justify-start "
          >
            <div className="flex items-center justify-center h-full w-2/4 text-black">
              <h1 className="text-center h-auto p-4 rounded-lg bg-purple-300 text-6xl font-bold">
                Step 3
              </h1>
            </div>

            <div className="flex justify-start items-center w-2/4 bg-white border rounded-tl-3xl">
              <div className=" text-black p-3 shadow-3xl sm:text-4xl text-3xl md:text-4xl xl:text-6xl lg:text-5xl flex shadow-black">
                <h1 className=" font-bold text-left">
                  Organise your streaks Making them Public
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          ref={ref3}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView3 ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-violet-300 cursor-pointer h-24 w-[80%] container m-auto mt-12 "
        >
          <h1
            onClick={handleRoute}
            className="text-center h-auto p-4 rounded-lg text-black bg-purple-300 text-6xl font-bold"
          >
            Try Now
          </h1>
        </motion.div>
        <motion.div
        ref={ref3}
        initial={{ y: -200, opacity: 0 }}
        animate={ inView3 ? {y: 0, opacity: 1}:{}}
        transition={{ duration: 0.5 }}
         className=" border border-white-b  mt-32 "></motion.div>
          <div className="  mt-24 m-auto  bg-gradient-to-tl overflow-hidden from-violet-300 to-gray-300 rounded-3xl  w-[90%] container  p-2 ">
          <div className="bg-white  sm:h-[24rem] lg:h-[32rem] items-center flex justify-center overflow-hidden rounded-3xl relative  ">
            <h1 onClick={prevSlide} className="left-0 absolute text-black text-6xl p-2 cursor-pointer z-10">
              &#8249; {/* Left arrow symbol */}
            </h1>
            <h1 onClick={nextSlide} className="right-0 absolute text-black text-6xl p-2 cursor-pointer z-10">
              &#8250; {/* Right arrow symbol */}</h1>
              <motion.div
        key={slides[currentSlide].id}  // Important for animation re-render
        initial={{ opacity: 0, x: 100 }}  // Starting position
        animate={{ opacity: 1, x: 0 }}    // Transition to full opacity
        exit={{ opacity: 1, x: -100 }}    // Exit animation
        transition={{ duration: 0.5 }}    // Animation duration
        className="flex justify-center items-center w-full"
      >
        <Image src={slides[currentSlide].src} alt={slides[currentSlide].alt} height={500} width={500} className=" w-full h-full object-cover " layout="responsive" />
      </motion.div>

            {/* <NextVideo src={video}/> */}
            {/* <h1 className="text-center h-10  p-4 rounded-lg text-black bg-purple-300 text-6xl font-bold">Try Now</h1> */}
          </div>
        </div>

        <h1 className="bgr font1 text-5xl border-white border-b mt-12 mb-3 text-center p-3 font-bold bg-gradient-to-l from-violet-700 via-violet-800 to-gray-900 line-clamp-3 animate-pulse ">
          Watch Frame Now
        </h1>
        <Frame />
      </div>
    </>
  );
}
 
