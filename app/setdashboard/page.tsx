"use client"
// pages/setdashboard.tsx
import React, { useState } from 'react';
import Ppic from "@/components/features/ppic/profilepic";

const SetDashboard: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const handleProfilePictureChange = (newImage: string) => {
    setProfilePicture(newImage);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log({ username, email, password, profilePicture });
  };

  return (
    <>
      <div className="w-full flex flex-col items-center pt-8 h-screen">
        <div className="bg-opacity-80 bg-white rounded-3xl items-center p-12 w-[80%] sm:w-[calc(70vw - 40px)]">
          <Ppic onChange={handleProfilePictureChange} />
          <div className="w-full border-black border-b mt-3"></div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row justify-around text-black mt-4">
              <h1 className="text-3xl w-48">Username</h1>
              <textarea
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Name"
                className="w-full sm:w-64 px-4 h-8 mt-2 sm:mt-0"
              ></textarea>
            </div>
            <div className="flex flex-col sm:flex-row justify-around text-black mt-4">
              <h1 className="text-3xl w-48">Email</h1>
              <textarea
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full sm:w-64 px-4 h-8 mt-2 sm:mt-0"
              ></textarea>
            </div>
            <div className="flex flex-col sm:flex-row justify-around text-black mt-4">
              <h1 className="text-3xl w-48">Password</h1>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full sm:w-64 px-4 h-8 mt-2 sm:mt-0"
              />
            </div>
            <div className="flex justify-end mt-8">
              <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SetDashboard;
