import React from "react"
import { motion } from "framer-motion"
import image from "@/assets/image"
import Image from "next/image"
const Hero = () => {
  return (
    <div className="h-full w-full flex flex-col ">
      <div className="w-full h-[100vh]  pt-24 flex flex-col">
        <div className="inner-carouel flex h-[30vh] ">
          {image.map((images, index) => {
            return (
              <div className="flex h-[70vh] mx-10  bg-black" key={index}>
                <Image src={images} width={1000} height={200} alt="image" />
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <div class="text-3xl font-semibold  flex  justify-center gap-3  items-center">
          Bring{" "}
          <div className="bg-red-500 rounded-full w-32 h-32 text-white flex justify-center items-center">
            {" "}
            Japan&apos;s
          </div>{" "}
          Finest Electronics to Your Doorstep.
        </div>
      </div>
    </div>
  )
}

export default Hero
