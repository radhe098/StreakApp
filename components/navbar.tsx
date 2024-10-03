import ButtAnimatiom from "@/components/btncomponent";

export default function Navbar() {
 
    return(
        <>
        
        <div className="  m-auto w-[32rem] sm:w-[48rem] lg:w-[60rem] xl:w-[83rem]  h-18 sm:h-18  text-black bg-green-200 flex justify-between px-4   ">
            <div className="font1">LOGO</div>
            <div className=" p-3 ">            
                <ButtAnimatiom/>
            </div>
        </div>
        </>
    );
}