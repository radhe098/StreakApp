"use client";
import { useEffect, useState } from "react";
import MainComp from "@/components/MainContent";
import Image from "next/image";

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showAnimation ? (
        <div className="flex items-center justify-center h-[400px] mt-12">
        <div className="relative">
            <div className="h-24 w-full rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
            </div>
        </div>
    </div>
      ) : (
        <div className="m-auto p-2 bg-gradient-radial  border-white border w-[100%] mb-12">
        <MainComp />
    </div>
      )}
    </div>
  );
};

export default Home;