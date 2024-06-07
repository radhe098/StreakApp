// components/Marquee.tsx
import { useEffect } from 'react';
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
    <div className="marquee">
      <ul className="marquee-content flex list-none h-full animate-scrolling">
        <li><i className="fab fa-github">  <Image src="https://dummyimage.com/600x400/edb2ed/fff.jpg&text=hello" alt="checklist" width={100} height={100} className="inline-block h-48 w-72 " /></i></li>
        <li><i className="fab fa-codepen"> <Image src="https://dummyimage.com/600x400/edb2ed/fff.jpg&text=hello" alt="checklist" width={100} height={100} className="inline-block h-48 w-72 " /></i></li>
        <li><i className="fab fa-free-code-camp"> <Image src="https://dummyimage.com/600x400/edb2ed/fff.jpg&text=hello" alt="checklist" width={100} height={100} className="inline-block h-48 w-72 " /></i></li>
        <li><i className="fab fa-dev"> <Image src="https://dummyimage.com/600x400/edb2ed/fff.jpg&text=hello" alt="checklist" width={100} height={100} className="inline-block h-48 w-72 " /></i></li>
        <li><i className="fab fa-react"> <Image src="https://dummyimage.com/600x400/edb2ed/fff.jpg&text=hello" alt="checklist" width={100} height={100} className="inline-block h-48 w-72 " /></i></li>
        <li><i className="fab fa-vuejs"> <Image src="https://dummyimage.com/600x400/edb2ed/fff.jpg&text=hello" alt="checklist" width={100} height={100} className="inline-block h-48 w-72 " /></i></li>
        <li><i className="fab fa-angular"> <Image src="https://dummyimage.com/600x400/edb2ed/fff.jpg&text=hello" alt="checklist" width={100} height={100} className="inline-block h-48 w-72 " /></i></li>
        <li><i className="fab fa-node"> <Image src="https://dummyimage.com/600x400/edb2ed/fff.jpg&text=hello" alt="checklist" width={100} height={100} className="inline-block h-48 w-72 " /></i></li>
        <li><i className="fab fa-wordpress"> <Image src="https://dummyimage.com/600x400/edb2ed/fff.jpg&text=hello" alt="checklist" width={100} height={100} className="inline-block h-48 w-72 " /></i></li>
        <li><i className="fab fa-aws"> <Image src="https://dummyimage.com/600x400/edb2ed/fff.jpg&text=hello" alt="checklist" width={100} height={100} className="inline-block h-48 w-72 " /></i></li>
        <li><i className="fab fa-docker"> <Image src="https://dummyimage.com/600x400/edb2ed/fff.jpg&text=hello" alt="checklist" width={100} height={100} className="inline-block h-48 w-72 " /></i></li>
        <li><i className="fab fa-android"> <Image src="https://dummyimage.com/600x400/edb2ed/fff.jpg&text=hello" alt="checklist" width={100} height={100} className="inline-block h-48 w-72 " /></i></li>
      </ul>
    </div>
  );
};

export default Marquee;
