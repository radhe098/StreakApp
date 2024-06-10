import ButtAnimatiom from "@/components/btncomponent";

export default function Navbar() {
 
    return(
        <>
        
        <div className="  w-full h-16 text-black bg-white flex justify-between px-4   ">
            <div className="font1">LOGO</div>
            <div className=" p-3 ">            <ButtAnimatiom/>
            </div>
        </div>
        </>
    );
}