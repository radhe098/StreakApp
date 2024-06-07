"use client"
import NAvbar from "@/components/navbar"
import Landing from "@/components/landing";
import Demo from "@/components/sample"
import Scroller from "@/components/acompo";
import Footer from "@/components/Fotter";
import Scroll from "@/components/infinteScroll";
export default function Home() {
  return (
    <>
    <NAvbar/>
    <Landing/>
    <Scroller/>
{/* <Scroll/> */}
    <Demo/>
    <Footer/>

    
    </>
  );
}
