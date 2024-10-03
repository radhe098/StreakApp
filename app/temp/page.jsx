import Image from "next/image";
import CSPSSC from '@/public/CSPSC.webp';
export default function Temp(){
    
    
    return(
        <>
        <div className="bg-  ">
            <div className="flex justify-start  overflow-hidden">
            <Image src={CSPSSC} alt="checklist" className="mt-1 overflow-hidden w-1/4 " />
            <div 
            className="  w-3/4 flex flex-col justify-center "> 
            <h1 className="text-csps text-center text-5xl">Unshorten URLs </h1>
            </div>
            </div>
            <div className="bg-csps ">
            <p class="scroll-text" className="text-white bg-csps text-center" > Short URL Expander is a tool designed to protect adults from cyber scams by revealing the true destination of shortened URLs</p></div>

            <div className=" m-auto flex justify-around overflow-hidden w-[60%] h-8 mt-4 border border-csps rounded-lg ">
                <input className="w-full h-full p-2 text-black" type="text" placeholder="Enter your short URL" />
                <button className="bg-csps text-white w-24 h-8">Search</button>
            </div>
            <div classname=" h-auto m-4 p-4 text-black text-center" >
                

            </div>
        </div>
        </>
    );

}