import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import shoe from '../public/shoeimg.jpg';

const InfiniteScroller: React.FC = () => {
  const [items, setItems] = useState<number[]>(Array.from({ length: 10 }, (_, i) => i));
  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setItems(prevItems => [...prevItems, ...Array.from({ length: 10 }, (_, i) => prevItems.length + i)]);
        }
      });
      if (node) observer.current.observe(node);
    },
    []
  );

  return (

    <div className=" w-[32rem] sm:w-[48rem] lg:w-[60rem] xl:w-[83rem] no-scrollbar mt-12 m-auto bg-gradient-to-br from-gray-900 to-purple-900 h-[480px] overflow-y-scroll p-8 overflow-hidden scroll-container">
      <div className="flex flex-wrap  justify-around items-center gap-8 w-full">
        {items.map((_, index) => {
          if (index === items.length - 1) {
            return (
              <div
                ref={lastItemRef}
                key={index}
                className="bg-white h-72 w-32 text-black flex justify-center items-center overflow-hidden"
              >
             </div>
            );
          }
          return (
            <div
              key={index}
              className="bg-white h-48 w-96 gap-4 text-black flex justify-center items-center overflow-hidden"
            >
              <Image src={shoe}alt="Image" width={400}
      height={100} objectFit="cover" /> 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteScroller;
