
"use client"
import Image from "next/image";
import nexy from "@/public/checklist.svg"
import Scroller from "@/components/acompo";
import pattern from "@/public/pattern2.webp";
export default function Landing() {
    return (
        <>
            <div className="mt-48" >

                <div className="m-12 h-auto bg-transparent flex justify-between px-7 gap-4 mx-10">
                    <div className="font1  h-[300px] w-auto p-3      ">
                        <h1 className="text-6xl font-bold">
                            Organising your streaks </h1><span><h1 className="text-6xl font-bold" >Making them Public </h1></span>
                        <h1 className="text-6xl font-bold">Gain followers
                        </h1></div>
                    <div className="bg-violet-400 flex -rotate-12 -py-12 px-3 rounded-3xl mx-10 justify-center  hover:bg-violet-600 animate-teleport">
                        <Image src={nexy} alt="checklist" className="-mt-12 w-56 " />
                    </div>
                </div>               
                <div className="flex w-full flex-col justify-between  ">
                    <div className="h-[250px] mt-24 w-auto p-3 flex flex-row justify-start ">
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
                    </div>
                    
                    <div className="h-[250px] w-auto p-3 flex flex-row justify-start">
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


                    </div>
                    <div className="h-[250px] mt-12 w-auto p-3 flex flex-row justify-start ">
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
                    </div>
                </div>
                <div className="bg-violet-300 h-24 w-[80%] container m-auto mt-12 ">
                    <h1 className="text-center h-auto p-4 rounded-lg text-black bg-purple-300 text-6xl font-bold">Try Now</h1>
                </div>
                <div className="bg-white h-[600px] items-center w-[93%] flex justify-center rounded-3xl container m-auto mt-12 ">
                    <h1 className="text-center h-10  p-4 rounded-lg text-black bg-purple-300 text-6xl font-bold">Try Now</h1>
                </div>

         <h1 className='text-5xl bgr mt-12 mb-3 text-center p-3 font-bold bg-gradient-to-l from-violet-700 via-violet-800 to-gray-900 line-clamp-3'>Marquee infinte scrolling without white space</h1> 

            </div>
        </>
    );
}