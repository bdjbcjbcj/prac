import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className=" bg-gray-50 mt-40">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col justify-between sm:flex-row gap-12  text-sm">
        {/* Logo + Description */}
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="text-gray-500 leading-relaxed w-80">
            Lorem is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
             specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div className="">
          <p className="text-lg font-semibold mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Delivery</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="  text-lg font-semibold mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li>📞 +92 823 6492383</li>
            <li>📧 zunairhafeez404@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t text-center py-4 text-gray-500 text-sm">
        © 2026 YourBrand. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
