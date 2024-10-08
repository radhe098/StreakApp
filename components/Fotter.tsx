import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div>
    <div className="footer w-[32rem] sm:w-[48rem] lg:w-[60rem] xl:w-[83rem] m-auto flex flex-col justify-between min-w-[20rem] p-2 sm:p-4 lg:p-6 h-auto bg-gray-800 bg-opacity-40">
      <div className="toper sm:flex flex-wrap  justify-around gap-4">
        
        <div className="address text-white gap-2 w-auto ">
          <h1 className="">Visit Our Office</h1>
          <h1 className="text-lg ">Sharma heights, 12th floor, Street: 74, <span><br /></span>Prince Mkt, Furniture Bazar, <span><br /></span>Ulhasnagar,Mumbai
          <br />421502 </h1>
        </div>
        <div className="faqs w-auto text-white my-4 sm:m-0 text-left flex flex-col gap-2 ">
          <h1 className="">FaQs</h1>
          <h3 className="text-lg" >Is there any refund policy </h3>
          <h3 className="text-lg" >Will I get any accesseries </h3>
          <h3 className="text-lg" >what if i dont found any results </h3>
          <h3 className="text-lg" >Can I bring my dog with me</h3>
        </div>
        <div className="socials w-auto gap-2 flex flex-col pl-4">
          <h1 className="text-white font-ubantu ">Find Us </h1>
          <a href="">
            <FaInstagram size={28} color="white" />
          </a>
          <a href="">
            <FaFacebook size={28} color="white" />
          </a>
          <a href="">
            <FaYoutube size={28} color="white" />
          </a>
          <a href="">
            <FaWhatsapp size={28} color="white" />
          </a>
        </div>
      </div>
      <div className="bottom text-center">
      <h3 className="text-lg text-white lowercase " >Council of Connection and Commission©2024 <span></span></h3>
      </div>
    </div></div>
  </>
  );
}
Footer.displayName = 'Footer';

export default Footer;
