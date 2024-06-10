export default function page(){
    return(
        <>
            <div className="rainbow w-full flex pt-12   h-screen ">
            <div className=' bg-slate-800 w-3/12 mt-2 m-6 rounded-3xl p-4 flex-1' >
        {/* <img src="/Literature.jpg" alt="" className='' /> */}
        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6 p-8 rounded-lg bg-green-200" 
        //   onSubmit={navigateTo('/')} 
          method="POST">
          <div className="sm:mx-auto sm:w-full items-center sm:max-w-sm">
           <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
            Login Yourself
          </h2>
        </div>
        <div>
        </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">                
              <input  id="email"  name="email"  type="email"
                // value={email}  onChange={settheemail}  
                autoComplete="email"  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insetfocus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                //   value={password}
                //   onChange={setthepass}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

              </div>
            </div>

            <div>
              <button
                // onClick={onSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              {/* <New>Sign in</New> */}
            </div>
          </form>
          <div className=' text-white flex justify-around mt-7'>
            <h1 className=" text-white text-xl  "> Register Yourself </h1> <button
            //  onClick={()=>navigateTo('/register')}
              className="border text-lg border-black w-36 h-8 hover:bg-indigo-500 bg-indigo-600 rounded-lg  ">Sign Up</button>
          </div>
        </div>
      </div>

                  {/*  */}

                  <div className=' bg-slate-800 w-3/12 mt-2 m-6 rounded-3xl p-4 flex-1' >
       
       <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
         <form className=" space-y-4 p-8 rounded-lg bg-green-200" method="POST">
         <div className="sm:mx-auto sm:w-full items-center sm:max-w-sm">
         {/* <div className="mx-auto m:mx-auto sm:w-full sm:max-w-sm h-32 w-16 rounded-3xl bg-cover">
           <img
           className=""
           src="/infi.png"
           alt="Your Company"/></div> */}
         
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
           Register Yourself
         </h2>
       </div>
       <div>
       <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
               UserName
             </label>
             <div className="mt-2"> 
               <input
                 id="name"
                 name="name"
                 type="text"
                //  value={name}
                //  onChange={setthename}               
                 autoComplete="name"
                 required
                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
             </div>
       </div>
           <div>
             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
               Email address
             </label>
             <div className="mt-2">                
             <input  id="email"  name="email"  type="email"
            //    value={email}  onChange={settheemail}  
               autoComplete="email"  required
                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insetfocus:ring-indigo-600 sm:text-sm sm:leading-6"/>
             </div>
           </div>

           <div>
             <div className="flex items-center justify-between">
               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                 Password
               </label>
             </div>
             <div className="mt-2">
               <input
                 id="password"
                 name="password"
                //  value={password}
                //  onChange={setthepass}
                 type="password"
                 autoComplete="current-password"
                 required
                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
             </div>
           </div>

           <div>
             <button
            //    onClick={onSubmit}
               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
               Sign up
             </button>
             {/* <New>Sign in</New> */}
           </div>
         
         </form> 
         <div className=' text-white flex justify-around mt-7'>
           <h1 className=" text-white text-xl  ">Already Registered ? </h1> <button
            // onClick={()=>navigateTo('/login')}
             className="border text-lg border-black w-36 h-8 hover:bg-indigo-500 bg-indigo-600 rounded-lg  ">Login</button>
         </div>
       </div>
     </div>
     {/*  */}

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