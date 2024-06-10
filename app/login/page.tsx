export default function page(){
    return(
        <>
            <div className="rainbow w-full flex-col pt-12   h-screen ">
                                          
                <div className="bg-opacity-80 bg-white rounded-3xl items-center p-12  h-auto w-[70%] m-auto ">
                    <h1 className="text-black text-3xl text-center " > LogIn or SignUp </h1>

                    <div className="mt-12 flex sm:flex-wrap justify-around border-b border-black pb-3">
                        <h1 className="text-3xl text-black text-left " >Enter a Username </h1>
                        <input className="text-black text-xl border-black rounded-lg w-[28rem] text-center" type="text" placeholder="username" />


                    </div>
                    <div className="mt-12 flex sm:flex-wrap justify-around border-b border-black pb-3 ">
                        <h1 className="text-3xl text-black text-left " >Enter Your Work Email </h1>
                        <input className="text-black text-xl border-black rounded-lg w-[28rem] text-center" type="text" placeholder="email address" />
                    </div>
                    <div className="mt-12 flex sm:flex-wrap justify-around border-b border-black pb-3 ">
                        <h1 className="text-3xl text-black text-left " >Enter New Password </h1>
                        <input className="text-black text-xl border-black rounded-lg w-[28rem] text-center" type="password" placeholder="Password" />
                    </div>
                    <div className=" flex justify-center items-center mt-8 ">
                    <button className=" m-auto  w-12rem h-auto p-2 bg-white text-black border text-3xl " >Submit</button>
                    </div>

                </div>
            </div>
        </>
    );
}