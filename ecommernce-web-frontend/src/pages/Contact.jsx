import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

function Contact() {
  return (
    <div>
      <div className="text-3xl border-t text-center  pt-10">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-12 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-lg " src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-5">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132 <br />
            Email: admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-black text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">Explore Jobs</button>
        </div>
        
      </div>
      <NewsLetterBox/>
    </div>
  );
}

export default Contact;
