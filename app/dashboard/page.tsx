
import Ppic from "@/components/features/ppic/profilepic";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import coimg from "@/public/coverimage.jpg";

export default function page(){
    return(
        <>
       {/* <div className=" top-0  h-24 w-full p-1 flex border-white border ">
            </div> */}
        <div className=" flex justify-center bg-gradient-to-t from-violet-500 h-[54rem] pb-8 sm:h-[48rem] items-center to-white">   
        <div >
        <div className="m-12  h-auto  w-[18rem] sm:min-w-[24rem] md:min-w-[36rem] lg:min-w-[48rem] xl:min-w-[56rem] sm:min-h-[18rem] md:min-h-[22rem] lg:min-h-[16rem] xl:min-h-[24rem] flex-col  bg-gray-900 bg-opacity-100 text-white ">
            
        <div className="flex-wrap gap-3 flex p-3 justify-around  rounded-lg text-black "
style={{
    backgroundImage: `url(${coimg.src})`, backgroundSize: ' cover', backgroundPosition: 'right', backgroundRepeat: 'no-repeat'    
  }}    >
      {/* <Ppic  /> */}
        <div className="  rounded-lg bg-white border-white border flex-col justify-center p-2 w-[18rem]">
            <h1 className="text-black text-4xl text-center mt-2 sm:mt-6 ">Jhon Doe</h1>
            <div className="flex justify-around sm:mt-3 mt-1 bg-white">
            <FaInstagram size={28} color="green" />
            <a href="">
            <FaFacebook size={28} color="green" />
          </a>
          <a href="">
            <FaYoutube size={28} color="green" />
          </a>
          <a href="">
            <FaWhatsapp size={28} color="green" />
          </a></div>

        </div>

        </div>
        <div className="p-3 flex-col justify-center">
            <div className=" w-full  flex-wrap md:flex p-4  justify-around"> 
            <h1 className=" text-2xl"> Your Name 
            </h1>

            <input type="text" className="w-[15rem] border-black border"/>
            </div>
            <div className=" w-full  flex-wrap md:flex p-4  justify-around"> 
            <h1 className=" text-2xl"> Your Name 
            </h1>

            <input type="text" className="w-[15rem] border-black border"/>
            </div>
            <div className=" w-full  flex-wrap md:flex p-4  justify-around"> 
            <h1 className=" text-2xl"> Your Name 
            </h1>

            <input type="text" className="w-[15rem] border-black border"/>
            </div>
            <div className=" w-full  flex-wrap md:flex p-4  justify-around"> 
            <h1 className=" text-2xl"> Your Name 
            </h1>

            <input type="text" className="w-[15rem] border-black border"/>
            </div>
            
        </div>
        <div className=" flex justify-start ">
        <button className="w-24 h-[2.5rem] p-1 m-2 text-xl rounded-lg bg-blue-500"> Save</button>
        <button className="w-24 h-[2.5rem] p-1 m-2 text-xl rounded-lg bg-red-500">Cancel</button>
        </div></div>
        </div> </div>
        </>
    );
}   