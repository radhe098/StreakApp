// components/Marquee.tsx
import { useEffect } from 'react';
import shoe from '../public/shoeimg.jpg'
import Image from 'next/image';


const Marquee: React.FC = () => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content") as HTMLElement;

    root.style.setProperty("--marquee-elements", `${marqueeContent.children.length}`);

    for (let i = 0; i < parseInt(marqueeElementsDisplayed); i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <div className="marquee p-4 m-auto w-[32rem] sm:w-[48rem] lg:w-[60rem] xl:w-[83rem]">
      <ul className="marquee-content flex list-none h-full animate-scrolling">
        <li><i className="fab fa-android m-4"> 
           <Image src="https://i.imgur.com/2Ad9Wdo.png" alt="Image" width={200} height={150} objectFit="cover" className="inline-block border border-white h-full w-full " />
           </i></li>
      </ul>
    </div>
  );
};

export default Marquee;
