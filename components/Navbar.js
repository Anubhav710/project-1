import Image from "next/image"
import React from "react"

const Navbar = () => {
  return (
    <div className="h-[15%]   flex justify-between px-16  items-center">
      {/* Logo and Navigation Bars */}
      <div className="image flex items-center h-full gap-12">
        <Image
          src="/images/logo.png"
          width={120}
          height={120}
          alt="logo"
          className="bg-cover"
        />
        <ul className="flex  gap-4 text-black font-semibold text-[16px] ">
          <li>Appliances</li>
          <li>Ho Green</li>
          <li>Stories</li>
          <li>Who we are</li>
          <li>Contact Us</li>
        </ul>
      </div>
      {/* Two Box starting */}
      <div className="flex space-x-5 h-full p-5 justify-center ">
        <div className="bg-[#E4002B] h-30 w-30 px-2 text-white py-2  ">
          95+ <br /> Years <br /> Legacy
        </div>
        <div className="bg-[#E4002B] h-20 w-20 px-4 text-white py-2  ">
          Let&apos;s <br /> Akai
        </div>
      </div>
    </div>
  )
}

export default Navbar
