"use client"
import { BiMessageSquareEdit } from "react-icons/bi";
// pages/setdashboard.tsx
import React, { useState } from 'react';
// import ProfilePicture from "@/components/features/ppic/profilepic";

const SetDashboard: React.FC = () => {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [profilePicture, setProfilePicture] = useState<string | null>(null);

  // const handleProfilePictureChange = (newImage: string) => {
  //   setProfilePicture(newImage);
  // };

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   // Handle form submission logic here (e.g., send data to an API)
  //   console.log({ username, email, password, profilePicture });
  // };
return (
    <>
        <div  className=" w-fulll h-screen bg-gradient-to-b from-black  text-white justify-center flex" 
        // style={{background:"#433bb8c4"}}
        >
            <div className=" border-white border m-12  h-auto  w-screen  sm:min-h-[18rem] md:min-h-[22rem] lg:min-h-[16rem] xl:min-h-[24rem] flex-col  bg-opacity-10 text-white"> 

              
            <div className=" flex ">
              <h1 className="font1 text-center w-full"> Your Current Streaks </h1>

            </div>
            <div className=" flex justify-center items-center w-screen">
            <div className="m-auto   p-4  mt-4 mx-4 w-[64rem] h-[18rem] bg-gradient-to-t from-violet-600 rounded-lg py-4 flex-col space-y-6 overflow-hidden">
            <h1 className="sm:text-4xl text-3xl text-black bg-violet-400 w-auto h-16 rounded-lg text-center -tracking-tightest sm:py-2 overflow-hidden">
  Lorem is my new streak</h1>
              <div className=" w-[100%] h-4 rounded-xl bg-white ">
                <div className=" bg-violet-400 w-[2rem] rounded-xl    h-full "></div>
              </div>
              <div className=" grid grid-cols-2 gap-6     p-2  rounded-lg   ">
                 <h1 className=" text-2xl ">Staring Day - {} </h1>
                <h1> </h1>
                                <h1  className=" text-2xl " >Finale Day-  {} </h1>

                <button className=" text-2xl bg-gray-800 rounded-lg w-[8] md:min-w-[12rem] p-2 " >Check It Now - {} </button>              </div>
            </div> 
            </div>
            </div>
      </div>
    </>
  );
};

export default SetDashboard;
